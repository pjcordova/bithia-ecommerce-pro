'use server'

import { prisma } from '@/lib/prisma'

export async function obtenerDatosDashboard() {
    try {
        const [ventasRaw, detalleVentasRaw, productosRaw, clientesRaw, inventarioRaw, gastosRaw] = await Promise.all([
            // Las ventas anuladas no deben sumar en ningún indicador
            prisma.ventas.findMany({ where: { anulada: false }, orderBy: { fecha_hora: 'desc' } }),
            prisma.detalle_ventas.findMany(),
            prisma.productos.findMany({ where: { activo: true } }),
            prisma.clientes.findMany(),
            prisma.inventario_tallas.findMany(),
            prisma.gastos_operativos.findMany(),
        ])

        const ventas = ventasRaw.map(v => ({
            ...v,
            fecha_hora: (v.fecha_hora || new Date()).toISOString(),
            total: Number(v.total),
            utilidad_neta_venta: Number(v.utilidad_neta_venta),
        }))

        const detalleVentas = detalleVentasRaw.map(d => ({
            ...d,
            costo_inversion_unitario: Number(d.costo_inversion_unitario),
            precio_venta_unitario: Number(d.precio_venta_unitario),
            subtotal: Number(d.subtotal),
            utilidad_subtotal: d.utilidad_subtotal ? Number(d.utilidad_subtotal) : 0,
        }))

        const productos = productosRaw.map(p => ({
            ...p,
            costo_inversion: Number(p.costo_inversion),
            precio_venta: Number(p.precio_venta),
            margen_neto: p.margen_neto ? Number(p.margen_neto) : 0,
        }))

        const clientes = clientesRaw.map(c => ({
            ...c,
            valor_total_vida: Number(c.valor_total_vida || 0),
            total_prendas_compradas: c.total_prendas_compradas || 0,
        }))

        const gastos = gastosRaw.map(g => ({
            ...g,
            monto: Number(g.monto),
            fecha_hora: (g.fecha_hora || new Date()).toISOString(),
        }))

        return {
            success: true,
            ventas,
            detalleVentas,
            productos,
            clientes,
            inventario: inventarioRaw,
            gastos,
        }
    } catch (error) {
        console.error("Error al cargar datos del dashboard:", error)
        return {
            success: false,
            ventas: [], detalleVentas: [], productos: [], clientes: [], inventario: [], gastos: [],
        }
    }
}
