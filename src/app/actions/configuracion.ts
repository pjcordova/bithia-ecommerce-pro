'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function obtenerConfiguracionEmpresa() {
    try {
        const config = await prisma.configuracion_empresa.findFirst()
        return { success: true, config }
    } catch (error) {
        console.error("Error al obtener configuración de empresa:", error)
        return { success: false, config: null }
    }
}

export async function actualizarConfiguracionEmpresa(data: {
    nombre_empresa: string
    whatsapp_corporativo: string
}) {
    try {
        const existente = await prisma.configuracion_empresa.findFirst()
        if (existente) {
            await prisma.configuracion_empresa.update({
                where: { id: existente.id },
                data: {
                    nombre_empresa: data.nombre_empresa,
                    whatsapp_corporativo: data.whatsapp_corporativo,
                }
            })
        } else {
            await prisma.configuracion_empresa.create({
                data: {
                    nombre_empresa: data.nombre_empresa,
                    whatsapp_corporativo: data.whatsapp_corporativo,
                }
            })
        }
        revalidatePath('/configuracion')
        return { success: true, message: 'Ajustes de empresa guardados' }
    } catch (error) {
        console.error("Error al actualizar configuración de empresa:", error)
        return { success: false, error: 'No se pudieron guardar los ajustes' }
    }
}
