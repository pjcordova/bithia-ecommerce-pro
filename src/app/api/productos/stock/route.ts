import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type StockTalla = { talla: string; cantidad: number };

/**
 * Consulta de stock real en vivo, para que bithia-web muestre las mismas
 * cantidades que ve la dueña acá en el ERP — antes bithia-web solo tenía un
 * toggle manual "disponible/agotado", sin cantidades. Solo lectura, la
 * llama el servidor de bithia-web (nunca el navegador de la clienta
 * directo, por eso comparte la autenticación con el endpoint de descuento).
 *
 * Body: { "codigos": ["TOP-2508-03-ROJO", "VES-2508-99"] }
 * Respuesta: { "TOP-2508-03-ROJO": [{ "talla": "M", "cantidad": 3 }], "VES-2508-99": [] }
 * Un código que no matchea nada (o falló al resolver) devuelve array vacío,
 * nunca un error — bithia-web debe poder seguir mostrando el catálogo igual.
 */
export async function POST(request: NextRequest) {
  const apiKey = process.env.ERP_STOCK_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Endpoint no configurado" }, { status: 500 });
  }
  if (request.headers.get("authorization") !== `Bearer ${apiKey}`) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  let body: { codigos?: string[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const codigos = Array.isArray(body.codigos)
    ? body.codigos.filter((c): c is string => typeof c === "string" && c.length > 0)
    : [];

  const resultado: Record<string, StockTalla[]> = {};
  for (const codigo of codigos) resultado[codigo] = [];
  if (codigos.length === 0) return NextResponse.json(resultado);

  // Camino preciso: cada código de producto_colores es un color exacto.
  const coloresMatch = await prisma.producto_colores.findMany({
    where: { codigo_lote: { in: codigos } },
  });
  const codigosResueltos = new Set(coloresMatch.map((c) => c.codigo_lote as string));

  for (const c of coloresMatch) {
    const inv = await prisma.inventario_tallas.findMany({
      where: { producto_id: c.producto_id, color: c.color },
      select: { talla: true, cantidad: true },
    });
    resultado[c.codigo_lote as string] = inv;
  }

  // Camino de respaldo: códigos que no matchean producto_colores todavía
  // (productos de antes del código por color) se resuelven contra
  // productos.lote, sumando el stock de todos los colores de ese lote por
  // talla — no es preciso por color, pero es mejor que no mostrar nada.
  const codigosLegacy = codigos.filter((c) => !codigosResueltos.has(c));
  if (codigosLegacy.length > 0) {
    const productos = await prisma.productos.findMany({
      where: { lote: { in: codigosLegacy } },
      include: { inventario_tallas: { select: { talla: true, cantidad: true } } },
    });
    for (const p of productos) {
      const porTalla = new Map<string, number>();
      for (const inv of p.inventario_tallas) {
        porTalla.set(inv.talla, (porTalla.get(inv.talla) || 0) + inv.cantidad);
      }
      resultado[p.lote as string] = Array.from(porTalla, ([talla, cantidad]) => ({ talla, cantidad }));
    }
  }

  return NextResponse.json(resultado);
}
