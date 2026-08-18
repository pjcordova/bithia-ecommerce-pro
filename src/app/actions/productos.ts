'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function actualizarProducto(id: string, data: {
    nombre: string
    categoria: string
    color_principal: string
    costo_inversion: number
    precio_venta: number
    imagen_url?: string
}) {
    try {
        await prisma.productos.update({
            where: { id },
            data: {
                nombre: data.nombre,
                categoria: data.categoria,
                color_principal: data.color_principal,
                costo_inversion: data.costo_inversion,
                precio_venta: data.precio_venta,
                imagen_url: data.imagen_url || null,
            }
        })

        revalidatePath('/inventario')
        return { success: true, message: 'Prenda actualizada correctamente' }
    } catch (error) {
        console.error("Error al actualizar producto:", error)
        return { success: false, error: "No se pudo actualizar la prenda" }
    }
}

export async function cambiarEstadoProducto(id: string, activo: boolean) {
    try {
        const producto = await prisma.productos.update({
            where: { id },
            data: { activo }
        })

        revalidatePath('/inventario')
        return {
            success: true,
            message: activo ? `"${producto.nombre}" fue reactivada` : `"${producto.nombre}" fue dada de baja`,
        }
    } catch (error) {
        console.error("Error al cambiar estado del producto:", error)
        return { success: false, error: "No se pudo cambiar el estado de la prenda" }
    }
}

export async function ajustarStockManual(data: {
    producto_id: string
    talla: string
    color: string
    cantidad: number
    tipo: 'ingreso' | 'salida' | 'ajuste'
    motivo: string
    usuarioNombre?: string
    usuario_id?: string
}) {
    try {
        const { producto_id, talla, color, cantidad, tipo, motivo, usuarioNombre, usuario_id } = data
        if (!cantidad || cantidad <= 0) {
            return { success: false, error: "La cantidad debe ser mayor a cero" }
        }
        const tallaUpper = talla.toUpperCase()

        const inventarioTalla = await prisma.inventario_tallas.findFirst({
            where: { producto_id, talla: tallaUpper, color }
        })

        const stockActual = inventarioTalla?.cantidad || 0

        if (tipo === 'salida' && cantidad > stockActual) {
            return {
                success: false,
                error: `No puedes retirar ${cantidad} unidades: solo hay ${stockActual} en stock para ${color} talla ${tallaUpper}.`,
            }
        }

        const delta = tipo === 'salida' ? -cantidad : cantidad
        const nuevaCantidad = stockActual + delta

        if (inventarioTalla) {
            await prisma.inventario_tallas.update({
                where: { id: inventarioTalla.id },
                data: { cantidad: nuevaCantidad }
            })
        } else {
            await prisma.inventario_tallas.create({
                data: { producto_id, talla: tallaUpper, color, cantidad: nuevaCantidad }
            })
        }

        await prisma.movimientos_inventario.create({
            data: {
                producto_id,
                talla: tallaUpper,
                color,
                tipo,
                cantidad,
                motivo: usuarioNombre ? `${motivo} (${usuarioNombre})` : motivo,
                usuario_id: usuario_id || null,
            }
        })

        revalidatePath('/inventario')
        return { success: true, message: 'Movimiento de stock registrado correctamente' }
    } catch (error) {
        console.error("Error al ajustar stock:", error)
        return { success: false, error: "No se pudo registrar el movimiento de stock" }
    }
}

export async function obtenerMovimientos(productoId: string) {
    try {
        const movimientos = await prisma.movimientos_inventario.findMany({
            where: { producto_id: productoId },
            orderBy: { fecha_hora: 'desc' },
            take: 50,
        })
        return { success: true, movimientos }
    } catch (error) {
        console.error("Error al obtener movimientos:", error)
        return { success: false, movimientos: [] }
    }
}
