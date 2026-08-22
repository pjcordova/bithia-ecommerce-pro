'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function obtenerDatosFinanzas() {
    try {
        const [ventasRaw, gastosRaw] = await Promise.all([
            // Las ventas anuladas no deben sumar en ingresos ni utilidad
            prisma.ventas.findMany({ where: { anulada: false }, orderBy: { fecha_hora: 'desc' } }),
            prisma.gastos_operativos.findMany({ orderBy: { fecha_hora: 'desc' } }),
        ])

        const ventas = ventasRaw.map(v => ({
            ...v,
            fecha_hora: (v.fecha_hora || new Date()).toISOString(),
            total: Number(v.total),
            descuento: Number(v.descuento || 0),
            utilidad_neta_venta: Number(v.utilidad_neta_venta),
        }))

        const gastos = gastosRaw.map(g => ({
            ...g,
            fecha_hora: (g.fecha_hora || new Date()).toISOString(),
            monto: Number(g.monto),
        }))

        return { success: true, ventas, gastos }
    } catch (error) {
        console.error("Error al obtener datos de finanzas:", error)
        return { success: false, ventas: [], gastos: [] }
    }
}

export async function agregarGasto(data: {
    concepto: string
    monto: number
    categoria: string
    usuario_id?: string
}) {
    try {
        if (!data.concepto.trim()) {
            return { success: false, error: "La descripción es obligatoria" }
        }
        if (!data.monto || data.monto <= 0) {
            return { success: false, error: "El monto debe ser mayor a cero" }
        }
        await prisma.gastos_operativos.create({
            data: {
                concepto: data.concepto.trim(),
                monto: data.monto,
                categoria: data.categoria,
                usuario_id: data.usuario_id || null,
            }
        })
        revalidatePath('/finanzas')
        revalidatePath('/dashboard')
        return { success: true, message: 'Gasto registrado con éxito' }
    } catch (error) {
        console.error("Error al registrar gasto:", error)
        return { success: false, error: "No se pudo registrar el gasto" }
    }
}

export async function actualizarGasto(id: string, data: {
    concepto: string
    monto: number
    categoria: string
}) {
    try {
        if (!data.concepto.trim()) {
            return { success: false, error: "La descripción es obligatoria" }
        }
        if (!data.monto || data.monto <= 0) {
            return { success: false, error: "El monto debe ser mayor a cero" }
        }
        await prisma.gastos_operativos.update({
            where: { id },
            data: {
                concepto: data.concepto.trim(),
                monto: data.monto,
                categoria: data.categoria,
            }
        })
        revalidatePath('/finanzas')
        revalidatePath('/dashboard')
        return { success: true, message: 'Gasto actualizado correctamente' }
    } catch (error) {
        console.error("Error al actualizar gasto:", error)
        return { success: false, error: "No se pudo actualizar el gasto" }
    }
}

export async function eliminarGasto(id: string) {
    try {
        await prisma.gastos_operativos.delete({ where: { id } })
        revalidatePath('/finanzas')
        revalidatePath('/dashboard')
        return { success: true, message: 'Gasto eliminado correctamente' }
    } catch (error) {
        console.error("Error al eliminar gasto:", error)
        return { success: false, error: "No se pudo eliminar el gasto" }
    }
}
