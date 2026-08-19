'use server'

import { prisma } from '@/lib/prisma'
import { inicioDelDiaNegocio } from '@/lib/fechas'
import { revalidatePath } from 'next/cache'

export async function obtenerVentasHoyUsuario(usuarioId: string) {
    try {
        const hoy = new Date()
        const inicioDia = inicioDelDiaNegocio(hoy)
        const ventasHoy = await prisma.ventas.findMany({
            where: { usuario_id: usuarioId, fecha_hora: { gte: inicioDia }, anulada: false }
        })

        const totalSistema = ventasHoy.reduce((s, v) => s + Number(v.total), 0)
        const porMetodo: Record<string, number> = { efectivo: 0, yape: 0, plin: 0, transferencia: 0, tarjeta: 0 }
        ventasHoy.forEach(v => {
            porMetodo[v.metodo_pago] = (porMetodo[v.metodo_pago] || 0) + Number(v.total)
        })

        return { success: true, totalSistema, porMetodo, cantidadVentas: ventasHoy.length }
    } catch (error) {
        console.error("Error al obtener ventas del día:", error)
        return { success: false, totalSistema: 0, porMetodo: {}, cantidadVentas: 0 }
    }
}

export async function obtenerHistorialCuadres() {
    try {
        const cuadresRaw = await prisma.cuadres_caja.findMany({
            include: { perfiles: true },
            orderBy: { fecha_hora: 'desc' },
            take: 20,
        })

        const cuadres = cuadresRaw.map(cq => ({
            id: cq.id,
            fecha_hora: (cq.fecha_hora || new Date()).toISOString(),
            monto_efectivo: Number(cq.monto_efectivo || 0),
            monto_yape: Number(cq.monto_yape || 0),
            monto_plin: Number(cq.monto_plin || 0),
            monto_transferencia: Number(cq.monto_transferencia || 0),
            monto_tarjeta: Number(cq.monto_tarjeta || 0),
            monto_declarado: Number(cq.monto_declarado),
            monto_sistema: Number(cq.monto_sistema),
            diferencia: Number(cq.diferencia),
            observaciones: cq.observaciones,
            estado: cq.estado,
            staffNombre: cq.perfiles?.nombre || 'Desconocido',
        }))

        return { success: true, cuadres }
    } catch (error) {
        console.error("Error al obtener historial de cuadres:", error)
        return { success: false, cuadres: [] }
    }
}

export async function registrarCuadre(data: {
    usuario_staff_id: string
    monto_efectivo: number
    monto_yape: number
    monto_plin: number
    monto_transferencia: number
    monto_tarjeta: number
    observaciones?: string
}) {
    try {
        const hoy = new Date()
        const inicioDia = inicioDelDiaNegocio(hoy)
        const ventasHoy = await prisma.ventas.findMany({
            where: { usuario_id: data.usuario_staff_id, fecha_hora: { gte: inicioDia }, anulada: false }
        })

        const montoSistema = ventasHoy.reduce((s, v) => s + Number(v.total), 0)
        const montoDeclarado = data.monto_efectivo + data.monto_yape + data.monto_plin + data.monto_transferencia + data.monto_tarjeta
        const diferencia = montoDeclarado - montoSistema
        const estado = Math.abs(diferencia) < 1 ? 'aprobado' : 'descuadre'

        await prisma.cuadres_caja.create({
            data: {
                usuario_staff_id: data.usuario_staff_id,
                monto_efectivo: data.monto_efectivo,
                monto_yape: data.monto_yape,
                monto_plin: data.monto_plin,
                monto_transferencia: data.monto_transferencia,
                monto_tarjeta: data.monto_tarjeta,
                monto_declarado: montoDeclarado,
                monto_sistema: montoSistema,
                diferencia,
                observaciones: data.observaciones || null,
                estado,
            }
        })

        revalidatePath('/cierre-turno')
        return {
            success: true,
            message: estado === 'aprobado' ? '¡Cuadre de caja OK!' : `Cuadre registrado con una diferencia de S/ ${Math.abs(diferencia).toFixed(2)}`,
            estado,
        }
    } catch (error) {
        console.error("Error al registrar cuadre:", error)
        return { success: false, error: "No se pudo registrar el cuadre de caja" }
    }
}
