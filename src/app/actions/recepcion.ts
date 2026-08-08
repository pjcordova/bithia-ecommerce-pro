'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function obtenerProductosInventario() {
    try {
        const productosRaw = await prisma.productos.findMany({
            include: { inventario_tallas: true },
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

export async function registrarRecepcionMercaderia(data: {
    codigo_barras?: string
    nombre: string
    categoria: string
    color_principal: string
    costo_inversion: number
    precio_venta: number
    imagen_url?: string
    tallas: { talla: string; cantidad: number }[]
}) {
    try {
        const { codigo_barras, nombre, categoria, color_principal, costo_inversion, precio_venta, imagen_url, tallas } = data

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
            producto = await prisma.productos.create({
                data: {
                    codigo_barras: codigo_barras || null,
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
                            cantidad: t.cantidad
                        }))
                    }
                },
                include: { inventario_tallas: true }
            })
        } else {
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
                const tallaExistente = producto.inventario_tallas.find(
                    (item: any) => item.talla.toUpperCase() === tallaUpper
                )

                if (tallaExistente) {
                    await prisma.inventario_tallas.update({
                        where: { id: tallaExistente.id },
                        data: { cantidad: tallaExistente.cantidad + t.cantidad }
                    })
                } else {
                    await prisma.inventario_tallas.create({
                        data: {
                            producto_id: producto.id,
                            talla: tallaUpper,
                            cantidad: t.cantidad
                        }
                    })
                }
            }
        }

        revalidatePath('/inventario')
        revalidatePath('/inventario/recepcion')
        return { success: true, message: `¡Mercadería registrada con éxito bajo el Lote ${numeroLote}!` }
    } catch (error) {
        console.error("Error al registrar recepción:", error)
        return { success: false, error: "Hubo un error al registrar la recepción de mercadería." }
    }
}