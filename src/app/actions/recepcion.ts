'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function buscarProductoPorCodigo(codigo_barras: string) {
    try {
        const producto = await prisma.productos.findUnique({
            where: { codigo_barras },
            include: { inventario_tallas: true }
        })
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
    tallas: { talla: string; cantidad: number }[]
}) {
    try {
        const { codigo_barras, nombre, categoria, color_principal, costo_inversion, precio_venta, tallas } = data

        // 1. Buscar si ya existe por código EAN
        let producto = codigo_barras
            ? await prisma.productos.findUnique({ where: { codigo_barras }, include: { inventario_tallas: true } })
            : null

        if (!producto) {
            // CREAR PRODUCTO NUEVO E INVENTARIO DE TALLAS
            producto = await prisma.productos.create({
                data: {
                    codigo_barras: codigo_barras || null,
                    nombre,
                    categoria,
                    color_principal,
                    costo_inversion,
                    precio_venta,
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
            // PRODUCTO EXISTENTE: Actualizar costos/precios y sumar stock por talla
            await prisma.productos.update({
                where: { id: producto.id },
                data: { costo_inversion, precio_venta }
            })

            for (const t of tallas) {
                const tallaUpper = t.talla.toUpperCase()
                const tallaExistente = producto.inventario_tallas.find(
                    (item: any) => item.talla.toUpperCase() === tallaUpper
                )

                if (tallaExistente) {
                    // Sumar al stock existente de esa talla
                    await prisma.inventario_tallas.update({
                        where: { id: tallaExistente.id },
                        data: { cantidad: tallaExistente.cantidad + t.cantidad }
                    })
                } else {
                    // Si llegó en una talla nueva que no se registraba antes para este modelo
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
        return { success: true, message: "¡Stock de mercadería actualizado correctamente en Ica!" }
    } catch (error) {
        console.error("Error al registrar recepción:", error)
        return { success: false, error: "Hubo un error al registrar la recepción de mercadería." }
    }
}