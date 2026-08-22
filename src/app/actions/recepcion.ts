'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function obtenerProductosInventario() {
    try {
        const productosRaw = await prisma.productos.findMany({
            include: { inventario_tallas: true, producto_colores: true },
            orderBy: { created_at: 'desc' }
        })

        // Solución: Añadir tipado explícito (p: any) para evitar el error de TypeScript en el build
        const productos = productosRaw.map((p: any) => ({
            ...p,
            costo_inversion: Number(p.costo_inversion),
            precio_venta: Number(p.precio_venta),
            margen_neto: p.margen_neto ? Number(p.margen_neto) : 0,
        }))

        return { success: true, productos }
    } catch (error) {
        console.error("Error al obtener inventario:", error)
        return { success: false, productos: [] }
    }
}

export async function buscarProductoPorCodigo(codigo_barras: string) {
    try {
        const productoRaw = await prisma.productos.findUnique({
            where: { codigo_barras },
            include: { inventario_tallas: true }
        })

        if (!productoRaw) return { success: true, producto: null }

        const producto = {
            ...productoRaw,
            costo_inversion: Number(productoRaw.costo_inversion),
            precio_venta: Number(productoRaw.precio_venta),
            margen_neto: productoRaw.margen_neto ? Number(productoRaw.margen_neto) : 0,
        }

        return { success: true, producto }
    } catch (error) {
        console.error("Error al buscar producto por código:", error)
        return { success: false, error: "Error al consultar la base de datos" }
    }
}

// Genera un código de barras interno único (prefijo de categoría + año/mes + correlativo)
// para cuando el escaneo falla o la prenda no trae un código de fábrica.
async function generarCodigoBarrasUnico(catPrefijo: string): Promise<string> {
    const now = new Date()
    const anio = now.getFullYear().toString().slice(-2)
    const mes = (now.getMonth() + 1).toString().padStart(2, '0')

    for (let intento = 0; intento < 5; intento++) {
        const totalProductos = await prisma.productos.count()
        const correlativo = (totalProductos + 1 + intento).toString().padStart(4, '0')
        const codigo = `${catPrefijo}${anio}${mes}${correlativo}`
        const existente = await prisma.productos.findUnique({ where: { codigo_barras: codigo } })
        if (!existente) return codigo
    }
    // Fallback extremo si hubo colisiones repetidas (alta concurrencia)
    return `${catPrefijo}${anio}${mes}${Date.now().toString().slice(-6)}`
}

export async function registrarRecepcionMercaderia(data: {
    codigo_barras?: string
    nombre: string
    categoria: string
    color_principal: string
    costo_inversion: number
    precio_venta: number
    imagen_url?: string
    tallas: { talla: string; color: string; cantidad: number }[]
    // Foto propia de cada color, para que el POS muestre la imagen correcta al elegirlo
    fotosPorColor?: { color: string; imagen_url?: string }[]
    usuarioNombre?: string
    usuario_id?: string
}) {
    try {
        const { codigo_barras, nombre, categoria, color_principal, costo_inversion, precio_venta, imagen_url, tallas, fotosPorColor, usuarioNombre, usuario_id } = data

        const now = new Date()
        const anio = now.getFullYear().toString().slice(-2)
        const mes = (now.getMonth() + 1).toString().padStart(2, '0')
        const catPrefijo = categoria ? categoria.substring(0, 3).toUpperCase() : 'GEN'

        const totalLotesMes = await prisma.productos.count({
            where: {
                categoria,
                created_at: {
                    gte: new Date(now.getFullYear(), now.getMonth(), 1)
                }
            }
        })
        const correlativo = (totalLotesMes + 1).toString().padStart(2, '0')
        const numeroLote = `${catPrefijo}-${anio}${mes}-${correlativo}`

        let producto = codigo_barras
            ? await prisma.productos.findUnique({ where: { codigo_barras }, include: { inventario_tallas: true } })
            : null

        if (!producto) {
            const codigoFinal = codigo_barras || await generarCodigoBarrasUnico(catPrefijo)

            producto = await prisma.productos.create({
                data: {
                    codigo_barras: codigoFinal,
                    nombre,
                    categoria,
                    color_principal,
                    costo_inversion,
                    precio_venta,
                    imagen_url: imagen_url || null,
                    lote: numeroLote,
                    inventario_tallas: {
                        create: tallas.map(t => ({
                            talla: t.talla.toUpperCase(),
                            color: t.color,
                            cantidad: t.cantidad
                        }))
                    }
                },
                include: { inventario_tallas: true }
            })

            await prisma.movimientos_inventario.createMany({
                data: tallas.map(t => ({
                    producto_id: producto!.id,
                    talla: t.talla.toUpperCase(),
                    color: t.color,
                    tipo: 'ingreso',
                    cantidad: t.cantidad,
                    motivo: `Recepción — Lote ${numeroLote}${usuarioNombre ? ` (${usuarioNombre})` : ''}`,
                    usuario_id: usuario_id || null,
                }))
            })

            const codigosPorColor = await guardarColoresDeProducto(producto.id, numeroLote, tallas, fotosPorColor)

            revalidatePath('/inventario')
            revalidatePath('/inventario/recepcion')
            return {
                success: true,
                message: `¡Prenda nueva registrada! Lote ${numeroLote} · Código ${producto.codigo_barras}`,
                codigo_barras: producto.codigo_barras,
                lote: numeroLote,
                codigosPorColor,
            }
        }

        await prisma.productos.update({
            where: { id: producto.id },
            data: {
                costo_inversion,
                precio_venta,
                imagen_url: imagen_url || producto.imagen_url
            }
        })

        for (const t of tallas) {
            const tallaUpper = t.talla.toUpperCase()
            // Cada combinación color+talla es una fila de stock distinta
            const existente = producto.inventario_tallas.find(
                (item: any) => item.talla.toUpperCase() === tallaUpper && item.color === t.color
            )

            if (existente) {
                await prisma.inventario_tallas.update({
                    where: { id: existente.id },
                    data: { cantidad: existente.cantidad + t.cantidad }
                })
            } else {
                await prisma.inventario_tallas.create({
                    data: {
                        producto_id: producto.id,
                        talla: tallaUpper,
                        color: t.color,
                        cantidad: t.cantidad
                    }
                })
            }
        }

        await prisma.movimientos_inventario.createMany({
            data: tallas.map(t => ({
                producto_id: producto!.id,
                talla: t.talla.toUpperCase(),
                color: t.color,
                tipo: 'ingreso',
                cantidad: t.cantidad,
                motivo: `Recepción — Lote ${numeroLote}${usuarioNombre ? ` (${usuarioNombre})` : ''}`,
                usuario_id: usuario_id || null,
            }))
        })

        const codigosPorColor = await guardarColoresDeProducto(producto.id, numeroLote, tallas, fotosPorColor)

        revalidatePath('/inventario')
        revalidatePath('/inventario/recepcion')
        const unidadesIngresadas = tallas.reduce((s, t) => s + t.cantidad, 0)
        return {
            success: true,
            message: `¡Stock actualizado! +${unidadesIngresadas} unidades bajo Lote ${numeroLote}`,
            codigo_barras: producto.codigo_barras,
            lote: numeroLote,
            codigosPorColor,
        }
    } catch (error) {
        console.error("Error al registrar recepción:", error)
        return { success: false, error: "Hubo un error al registrar la recepción de mercadería." }
    }
}

// A partir de "TOP-2508-03" y "Rojo" -> "TOP-2508-03-ROJO"
function codigoLotePorColor(numeroLote: string, color: string): string {
    const colorSlug = color
        .trim()
        .toUpperCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '') // quita tildes
        .replace(/\s+/g, '-')
    return `${numeroLote}-${colorSlug}`
}

// Registra cada color del ingreso en producto_colores con su foto y su
// código puente con bithia-web. Si el color ya existía, solo actualiza la
// foto cuando se envió una nueva (así no se borra una foto ya cargada al
// reponer stock sin adjuntar imagen) y conserva el código que ya tenía —
// cada color mantiene el código de cuando se vio por primera vez, no el
// lote de la recepción que lo repuso.
async function guardarColoresDeProducto(
    productoId: string,
    numeroLote: string,
    tallas: { color: string }[],
    fotosPorColor?: { color: string; imagen_url?: string }[]
): Promise<{ color: string; codigo_lote: string }[]> {
    const coloresUnicos = Array.from(new Set(tallas.map(t => t.color)))
    const codigosPorColor: { color: string; codigo_lote: string }[] = []

    for (const color of coloresUnicos) {
        const foto = fotosPorColor?.find(f => f.color === color)?.imagen_url || null
        const existente = await prisma.producto_colores.findFirst({
            where: { producto_id: productoId, color }
        })

        if (existente) {
            if (foto) {
                await prisma.producto_colores.update({
                    where: { id: existente.id },
                    data: { imagen_url: foto },
                })
            }
            codigosPorColor.push({ color, codigo_lote: existente.codigo_lote || codigoLotePorColor(numeroLote, color) })
        } else {
            const codigo_lote = codigoLotePorColor(numeroLote, color)
            await prisma.producto_colores.create({
                data: { producto_id: productoId, color, imagen_url: foto, codigo_lote },
            })
            codigosPorColor.push({ color, codigo_lote })
        }
    }

    return codigosPorColor
}