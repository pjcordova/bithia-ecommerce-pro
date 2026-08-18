'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function obtenerClientes() {
    try {
        const clientesRaw = await prisma.clientes.findMany({ orderBy: { nombre: 'asc' } })
        const clientes = clientesRaw.map(c => ({
            ...c,
            valor_total_vida: Number(c.valor_total_vida || 0),
            total_prendas_compradas: c.total_prendas_compradas || 0,
            fecha_nacimiento: c.fecha_nacimiento ? c.fecha_nacimiento.toISOString().split('T')[0] : null,
            created_at: c.created_at ? c.created_at.toISOString() : null,
        }))
        return { success: true, clientes }
    } catch (error) {
        console.error("Error al obtener clientes:", error)
        return { success: false, clientes: [] }
    }
}

export async function crearCliente(data: {
    nombre: string
    whatsapp?: string
    fecha_nacimiento?: string
    notas?: string
}) {
    try {
        if (!data.nombre.trim()) {
            return { success: false, error: "El nombre es obligatorio" }
        }
        if (data.whatsapp) {
            const existente = await prisma.clientes.findFirst({ where: { whatsapp: data.whatsapp } })
            if (existente) {
                return { success: false, error: `Ya existe una clienta con este número: "${existente.nombre}". Búscala en vez de crear un registro duplicado.` }
            }
        }
        await prisma.clientes.create({
            data: {
                nombre: data.nombre.trim(),
                whatsapp: data.whatsapp || null,
                fecha_nacimiento: data.fecha_nacimiento ? new Date(data.fecha_nacimiento) : null,
                notas: data.notas || null,
            }
        })
        revalidatePath('/clientes')
        return { success: true, message: 'Clienta registrada con éxito' }
    } catch (error) {
        console.error("Error al crear cliente:", error)
        return { success: false, error: "No se pudo registrar la clienta" }
    }
}

export async function actualizarCliente(id: string, data: {
    nombre: string
    whatsapp?: string
    fecha_nacimiento?: string
    notas?: string
}) {
    try {
        if (!data.nombre.trim()) {
            return { success: false, error: "El nombre es obligatorio" }
        }
        if (data.whatsapp) {
            const existente = await prisma.clientes.findFirst({ where: { whatsapp: data.whatsapp, NOT: { id } } })
            if (existente) {
                return { success: false, error: `Ya existe otra clienta con este número: "${existente.nombre}".` }
            }
        }
        await prisma.clientes.update({
            where: { id },
            data: {
                nombre: data.nombre.trim(),
                whatsapp: data.whatsapp || null,
                fecha_nacimiento: data.fecha_nacimiento ? new Date(data.fecha_nacimiento) : null,
                notas: data.notas || null,
            }
        })
        revalidatePath('/clientes')
        return { success: true, message: 'Clienta actualizada correctamente' }
    } catch (error) {
        console.error("Error al actualizar cliente:", error)
        return { success: false, error: "No se pudo actualizar la clienta" }
    }
}

export async function eliminarCliente(id: string) {
    try {
        const ventasCount = await prisma.ventas.count({ where: { cliente_id: id } })
        if (ventasCount > 0) {
            return {
                success: false,
                error: `No se puede eliminar: esta clienta tiene ${ventasCount} venta${ventasCount > 1 ? 's' : ''} registrada${ventasCount > 1 ? 's' : ''} en su historial.`,
            }
        }
        await prisma.clientes.delete({ where: { id } })
        revalidatePath('/clientes')
        return { success: true, message: 'Clienta eliminada correctamente' }
    } catch (error) {
        console.error("Error al eliminar cliente:", error)
        return { success: false, error: "No se pudo eliminar la clienta" }
    }
}

export async function obtenerHistorialCompras(clienteId: string) {
    try {
        const ventas = await prisma.ventas.findMany({
            where: { cliente_id: clienteId },
            include: { detalle_ventas: { include: { productos: true } } },
            orderBy: { fecha_hora: 'desc' },
        })
        const historial = ventas.map(v => ({
            id: v.id,
            fecha_hora: (v.fecha_hora || new Date()).toISOString(),
            canal_venta: v.canal_venta,
            metodo_pago: v.metodo_pago,
            total: Number(v.total),
            items: v.detalle_ventas.map(d => ({
                nombre: d.productos.nombre,
                talla: d.talla,
                color: d.color,
                cantidad: d.cantidad,
                subtotal: Number(d.subtotal),
            })),
        }))
        return { success: true, historial }
    } catch (error) {
        console.error("Error al obtener historial de compras:", error)
        return { success: false, historial: [] }
    }
}
