import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

type LineaPedido = {
  codigo_lote: string;
  talla: string;
  cantidad: number;
};

type Problema = {
  codigo_lote: string;
  talla: string;
  motivo: string;
};

/**
 * Recibe el aviso de bithia-web cuando una clienta confirma un pedido por
 * WhatsApp y descuenta el stock real acá — bithia-web no guarda cantidades
 * propias a propósito (ver docs/integracion-erp-stock.md del otro repo,
 * donde está el contrato completo de este endpoint).
 *
 * Mismo patrón que confirmarVentaPOS (src/app/actions/pos.ts): se crea la
 * venta y sus detalle_ventas dentro de una transacción, y es el trigger de
 * base de datos `trg_descontar_inventario` (AFTER INSERT en detalle_ventas)
 * el que de verdad descuenta inventario_tallas y registra el kardex — igual
 * que en el POS. Este endpoint nunca lo hace a mano para no descontar dos
 * veces.
 *
 * A diferencia del POS (una venta humana, todo o nada), acá un pedido puede
 * traer líneas que no se puedan procesar (lote inexistente, color ambiguo,
 * stock insuficiente) sin que eso tumbe las demás — bithia-web solo mira el
 * status HTTP, así que un pedido con problemas igual responde 200 y el
 * detalle queda en problemas[] para revisión manual.
 */
export async function POST(request: NextRequest) {
  const apiKey = process.env.ERP_STOCK_API_KEY;
  if (!apiKey) {
    console.error("[descontar-stock] ERP_STOCK_API_KEY no configurada en el ERP");
    return NextResponse.json({ error: "Endpoint no configurado" }, { status: 500 });
  }

  if (request.headers.get("authorization") !== `Bearer ${apiKey}`) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  let body: { items?: LineaPedido[]; metodo_pago?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const items = body.items;
  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "items vacío o ausente" }, { status: 400 });
  }
  for (const item of items) {
    if (
      typeof item.codigo_lote !== "string" ||
      !item.codigo_lote ||
      typeof item.talla !== "string" ||
      !item.talla ||
      !Number.isFinite(item.cantidad) ||
      item.cantidad <= 0
    ) {
      return NextResponse.json(
        { error: "Cada item necesita codigo_lote, talla y cantidad > 0" },
        { status: 400 }
      );
    }
  }

  const metodosValidos = ["efectivo", "yape", "plin", "transferencia", "tarjeta"];
  const metodoPago = metodosValidos.includes(body.metodo_pago ?? "")
    ? (body.metodo_pago as string)
    : "transferencia";

  try {
    const resultado = await prisma.$transaction(async (tx) => {
      const detalle: {
        producto_id: string;
        talla: string;
        color: string;
        cantidad: number;
        precio_venta_unitario: number;
        costo_inversion_unitario: number;
      }[] = [];
      const problemas: Problema[] = [];

      for (const item of items) {
        const talla = item.talla.toUpperCase();

        // Camino preciso: producto_colores.codigo_lote identifica un color
        // exacto (recepciones nuevas, ver recepcion.ts). No hay ambigüedad
        // posible por acá — si existe, resuelve directo sin adivinar color.
        const colorMatch = await tx.producto_colores.findUnique({
          where: { codigo_lote: item.codigo_lote },
          include: { productos: true },
        });

        if (colorMatch) {
          const inv = await tx.inventario_tallas.findFirst({
            where: { producto_id: colorMatch.producto_id, talla, color: colorMatch.color },
          });

          if (!inv) {
            problemas.push({
              codigo_lote: item.codigo_lote,
              talla,
              motivo: `El producto "${colorMatch.productos.nombre}" (${colorMatch.color}) no tiene inventario cargado para la talla ${talla}.`,
            });
            continue;
          }
          if (inv.cantidad < item.cantidad) {
            problemas.push({
              codigo_lote: item.codigo_lote,
              talla,
              motivo: `Stock insuficiente: hay ${inv.cantidad} y se pidieron ${item.cantidad}.`,
            });
            continue;
          }

          detalle.push({
            producto_id: colorMatch.producto_id,
            talla,
            color: colorMatch.color,
            cantidad: item.cantidad,
            precio_venta_unitario: Number(colorMatch.productos.precio_venta),
            costo_inversion_unitario: Number(colorMatch.productos.costo_inversion),
          });
          continue;
        }

        // Camino de respaldo: productos recepcionados antes de que existiera
        // el código por color (producto_colores.codigo_lote), matcheando
        // contra productos.lote como antes. Puede ser ambiguo si ese lote
        // agrupa más de un color — acá sí hace falta el chequeo.
        const producto = await tx.productos.findFirst({
          where: { lote: item.codigo_lote },
          include: { inventario_tallas: { where: { talla } } },
        });

        if (!producto) {
          problemas.push({
            codigo_lote: item.codigo_lote,
            talla,
            motivo: "No existe un producto con ese código de lote en el ERP.",
          });
          continue;
        }

        if (producto.inventario_tallas.length === 0) {
          problemas.push({
            codigo_lote: item.codigo_lote,
            talla,
            motivo: `El producto "${producto.nombre}" no tiene inventario cargado para la talla ${talla}.`,
          });
          continue;
        }

        const colores = new Set(producto.inventario_tallas.map((t) => t.color));
        if (colores.size > 1) {
          problemas.push({
            codigo_lote: item.codigo_lote,
            talla,
            motivo: `El lote agrupa ${colores.size} colores (${[...colores].join(
              ", "
            )}) y bithia-web no manda color: no se puede saber cuál descontar sin ambigüedad. Este producto es de antes del código por color — recepciónalo de nuevo para que cada color quede con su propio código.`,
          });
          continue;
        }

        const inv = producto.inventario_tallas[0];
        if (inv.cantidad < item.cantidad) {
          problemas.push({
            codigo_lote: item.codigo_lote,
            talla,
            motivo: `Stock insuficiente: hay ${inv.cantidad} y se pidieron ${item.cantidad}.`,
          });
          continue;
        }

        detalle.push({
          producto_id: producto.id,
          talla,
          color: inv.color,
          cantidad: item.cantidad,
          precio_venta_unitario: Number(producto.precio_venta),
          costo_inversion_unitario: Number(producto.costo_inversion),
        });
      }

      if (detalle.length === 0) {
        return { ventaId: null, problemas };
      }

      const total = detalle.reduce((s, d) => s + d.precio_venta_unitario * d.cantidad, 0);
      const utilidadNeta = detalle.reduce(
        (s, d) => s + (d.precio_venta_unitario - d.costo_inversion_unitario) * d.cantidad,
        0
      );

      const venta = await tx.ventas.create({
        data: {
          canal_venta: "whatsapp",
          metodo_pago: metodoPago,
          total,
          utilidad_neta_venta: utilidadNeta,
        },
      });

      // Cada INSERT dispara trg_descontar_inventario, igual que en el POS.
      for (const d of detalle) {
        await tx.detalle_ventas.create({
          data: {
            venta_id: venta.id,
            producto_id: d.producto_id,
            talla: d.talla,
            color: d.color,
            cantidad: d.cantidad,
            costo_inversion_unitario: d.costo_inversion_unitario,
            precio_venta_unitario: d.precio_venta_unitario,
            precio_lista: d.precio_venta_unitario,
            subtotal: d.precio_venta_unitario * d.cantidad,
          },
        });
      }

      return { ventaId: venta.id, problemas };
    });

    if (resultado.problemas.length > 0) {
      console.error("[descontar-stock] pedido con líneas sin procesar:", {
        ventaId: resultado.ventaId,
        problemas: resultado.problemas,
      });
    }

    if (resultado.ventaId) {
      revalidatePath("/inventario");
      revalidatePath("/dashboard");
      revalidatePath("/ventas");
    }

    return NextResponse.json(
      { ok: true, ventaId: resultado.ventaId, problemas: resultado.problemas },
      { status: 200 }
    );
  } catch (error) {
    console.error("[descontar-stock] error al registrar la venta:", error, { items });
    return NextResponse.json({ error: "No se pudo registrar la venta" }, { status: 500 });
  }
}
