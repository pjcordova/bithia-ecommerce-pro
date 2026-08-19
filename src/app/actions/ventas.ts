'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function obtenerVentas(opciones?: { incluirAnuladas?: boolean }) {
    try {
        const ventasRaw = await prisma.ventas.findMany({
            where: opciones?.incluirAnuladas ? {} : { anulada: false },
            include: {
                clientes: { select: { nombre: true, whatsapp: true } },
                perfiles: { select: { nombre: true } },
                detalle_ventas: { include: { productos: { select: { nombre: true } } } },
            },
            orderBy: { fecha_hora: 'desc' },
            take: 200,
        })

        const ventas = ventasRaw.map(v => ({
            id: v.id,
            fecha_hora: (v.fecha_hora || new Date()).toISOString(),
            canal_venta: v.canal_venta,
            metodo_pago: v.metodo_pago,
            total: Number(v.total),
            descuento: Number(v.descuento || 0),
            utilidad_neta_venta: Number(v.utilidad_neta_venta),
            anulada: v.anulada || false,
            fecha_anulacion: v.fecha_anulacion ? v.fecha_anulacion.toISOString() : null,
            motivo_anulacion: v.motivo_anulacion,
            clienteNombre: v.clientes?.nombre || null,
            vendedoraNombre: v.perfiles?.nombre || null,
            items: v.detalle_ventas.map(d => ({
                nombre: d.productos.nombre,
                color: d.color,
                talla: d.talla,
                cantidad: d.cantidad,
                subtotal: Number(d.subtotal),
            })),
        }))

        return { success: true, ventas }
    } catch (error) {
        console.error("Error al obtener ventas:", error)
        return { success: false, ventas: [] }
    }
}

export async function anularVenta(data: {
    venta_id: string
    motivo: string
    usuario_id?: string
    usuarioNombre?: string
}) {
    try {
        const { venta_id, motivo, usuario_id, usuarioNombre } = data

        if (!motivo.trim()) {
            return { success: false, error: 'Explica el motivo de la anulación' }
        }

        const resultado = await prisma.$transaction(async (tx) => {
            const venta = await tx.ventas.findUnique({
                where: { id: venta_id },
                include: { detalle_ventas: true },
            })

            if (!venta) throw new Error('La venta ya no existe')
            if (venta.anulada) throw new Error('Esta venta ya estaba anulada')

            // Devolver al inventario lo que se había descontado, dejando rastro en el kardex.
            // El trigger de Postgres solo actúa al insertar detalle_ventas, así que la
            // devolución se hace explícitamente acá.
            for (const d of venta.detalle_ventas) {
                const inv = await tx.inventario_tallas.findFirst({
                    where: { producto_id: d.producto_id, talla: d.talla, color: d.color },
                })

                if (inv) {
                    await tx.inventario_tallas.update({
                        where: { id: inv.id },
                        data: { cantidad: inv.cantidad + d.cantidad },
                    })
                } else {
                    // La combinación se borró después de la venta: se recrea con lo devuelto
                    await tx.inventario_tallas.create({
                        data: {
                            producto_id: d.producto_id,
                            talla: d.talla,
                            color: d.color,
                            cantidad: d.cantidad,
                        },
                    })
                }

                await tx.movimientos_inventario.create({
                    data: {
                        producto_id: d.producto_id,
                        talla: d.talla,
                        color: d.color,
                        tipo: 'ingreso',
                        cantidad: d.cantidad,
                        motivo: `Anulación de venta #${venta_id.slice(0, 8)} — ${motivo.trim()}${usuarioNombre ? ` (${usuarioNombre})` : ''}`,
                        usuario_id: usuario_id || null,
                    },
                })
            }

            // Revertir lo que la venta había sumado a la clienta
            if (venta.cliente_id) {
                const unidades = venta.detalle_ventas.reduce((s, d) => s + d.cantidad, 0)
                const cliente = await tx.clientes.findUnique({ where: { id: venta.cliente_id } })
                if (cliente) {
                    await tx.clientes.update({
                        where: { id: venta.cliente_id },
                        data: {
                            // Math.max evita dejar totales negativos si hubo ajustes manuales
                            total_prendas_compradas: Math.max(0, (cliente.total_prendas_compradas || 0) - unidades),
                            valor_total_vida: Math.max(0, Number(cliente.valor_total_vida || 0) - Number(venta.total)),
                        },
                    })
                }
            }

            await tx.ventas.update({
                where: { id: venta_id },
                data: {
                    anulada: true,
                    fecha_anulacion: new Date(),
                    motivo_anulacion: motivo.trim(),
                    anulada_por: usuario_id || null,
                },
            })

            const unidadesDevueltas = venta.detalle_ventas.reduce((s, d) => s + d.cantidad, 0)
            return { unidadesDevueltas, total: Number(venta.total) }
        })

        revalidatePath('/ventas')
        revalidatePath('/dashboard')
        revalidatePath('/finanzas')
        revalidatePath('/inventario')
        revalidatePath('/pos')
        revalidatePath('/clientes')

        return {
            success: true,
            message: `Venta anulada. Se devolvieron ${resultado.unidadesDevueltas} prenda${resultado.unidadesDevueltas > 1 ? 's' : ''} al inventario.`,
        }
    } catch (error: any) {
        console.error("Error al anular venta:", error)
        return { success: false, error: error.message || 'No se pudo anular la venta' }
    }
}
