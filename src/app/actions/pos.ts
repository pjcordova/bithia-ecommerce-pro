'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function obtenerDatosPOS() {
    try {
        const productosRaw = await prisma.productos.findMany({
            where: { activo: true },
            include: { inventario_tallas: { where: { cantidad: { gt: 0 } } } },
            orderBy: { nombre: 'asc' },
        })

        const productos = productosRaw
            .map((p: any) => ({
                ...p,
                costo_inversion: Number(p.costo_inversion),
                precio_venta: Number(p.precio_venta),
                margen_neto: p.margen_neto ? Number(p.margen_neto) : 0,
            }))
            .filter((p: any) => p.inventario_tallas.length > 0)

        const clientes = await prisma.clientes.findMany({ orderBy: { nombre: 'asc' } })

        return { success: true, productos, clientes }
    } catch (error) {
        console.error("Error al cargar datos de POS:", error)
        return { success: false, productos: [], clientes: [] }
    }
}

export async function confirmarVentaPOS(data: {
    items: { producto_id: string; talla: string; cantidad: number; precio_venta_unitario: number; costo_inversion_unitario: number }[]
    canal_venta: 'stand' | 'instagram'
    metodo_pago: 'efectivo' | 'yape' | 'plin' | 'transferencia' | 'tarjeta'
    cliente_id?: string
    cliente_nuevo?: { nombre: string; whatsapp: string }
    usuario_id?: string
}) {
    try {
        const { items, canal_venta, metodo_pago, cliente_id, cliente_nuevo, usuario_id } = data
        if (!items.length) {
            return { success: false, error: "El carrito está vacío" }
        }

        const { ventaId, clienteCreado } = await prisma.$transaction(async (tx) => {
            // Verificar stock disponible dentro de la transacción para evitar sobreventa
            // si dos ventas concurrentes intentan descontar la misma prenda.
            // El trigger `trg_descontar_inventario` (AFTER INSERT en detalle_ventas) no
            // valida stock disponible, así que esta comprobación debe hacerse en la app.
            for (const item of items) {
                const tallaUpper = item.talla.toUpperCase()
                const inv = await tx.inventario_tallas.findFirst({
                    where: { producto_id: item.producto_id, talla: tallaUpper }
                })
                if (!inv || inv.cantidad < item.cantidad) {
                    const producto = await tx.productos.findUnique({ where: { id: item.producto_id } })
                    throw new Error(`Stock insuficiente para "${producto?.nombre || 'una prenda'}" (talla ${tallaUpper}). Actualiza la página e intenta de nuevo.`)
                }
            }

            // Resuelve el cliente antes de crear la venta: usa el seleccionado del dropdown,
            // o busca/crea uno nuevo por celular (así el POS alimenta el CRM directamente).
            let clienteIdFinal = cliente_id || null
            let clienteCreado = false

            if (!clienteIdFinal && cliente_nuevo?.whatsapp) {
                const existente = await tx.clientes.findFirst({ where: { whatsapp: cliente_nuevo.whatsapp } })
                if (existente) {
                    clienteIdFinal = existente.id
                } else {
                    const nuevo = await tx.clientes.create({
                        data: {
                            nombre: cliente_nuevo.nombre || 'Cliente POS',
                            whatsapp: cliente_nuevo.whatsapp,
                        }
                    })
                    clienteIdFinal = nuevo.id
                    clienteCreado = true
                }
            }

            const total = items.reduce((s, i) => s + i.precio_venta_unitario * i.cantidad, 0)
            const utilidadNeta = items.reduce((s, i) => s + (i.precio_venta_unitario - i.costo_inversion_unitario) * i.cantidad, 0)

            const venta = await tx.ventas.create({
                data: {
                    cliente_id: clienteIdFinal,
                    usuario_id: usuario_id || null,
                    canal_venta,
                    metodo_pago,
                    total,
                    utilidad_neta_venta: utilidadNeta,
                }
            })

            // Cada INSERT en detalle_ventas dispara el trigger que descuenta
            // inventario_tallas y registra el movimiento de salida en el kardex.
            for (const item of items) {
                const tallaUpper = item.talla.toUpperCase()
                const subtotal = item.precio_venta_unitario * item.cantidad

                await tx.detalle_ventas.create({
                    data: {
                        venta_id: venta.id,
                        producto_id: item.producto_id,
                        talla: tallaUpper,
                        cantidad: item.cantidad,
                        costo_inversion_unitario: item.costo_inversion_unitario,
                        precio_venta_unitario: item.precio_venta_unitario,
                        subtotal,
                    }
                })
            }

            if (clienteIdFinal) {
                const unidadesCompradas = items.reduce((s, i) => s + i.cantidad, 0)
                await tx.clientes.update({
                    where: { id: clienteIdFinal },
                    data: {
                        total_prendas_compradas: { increment: unidadesCompradas },
                        valor_total_vida: { increment: total },
                    }
                })
            }

            return { ventaId: venta.id, clienteCreado }
        })

        revalidatePath('/pos')
        revalidatePath('/inventario')
        revalidatePath('/dashboard')
        revalidatePath('/clientes')
        return {
            success: true,
            message: clienteCreado ? '¡Venta registrada y cliente nuevo agregado al CRM!' : '¡Venta registrada con éxito!',
            ventaId,
        }
    } catch (error: any) {
        console.error("Error al confirmar venta:", error)
        return { success: false, error: error.message || "Hubo un error al registrar la venta." }
    }
}
