'use server'

import { prisma } from '@/lib/prisma'
import { hashPassword, verifyPassword } from '@/lib/password'
import { revalidatePath } from 'next/cache'

export async function loginConCredenciales(email: string, password: string) {
    try {
        const cleanEmail = email.toLowerCase().trim()
        const perfil = await prisma.perfiles.findUnique({ where: { email: cleanEmail } })

        if (!perfil || !perfil.password_hash) {
            return { success: false, error: 'Correo o contraseña incorrectos' }
        }

        const passwordValida = await verifyPassword(password, perfil.password_hash)
        if (!passwordValida) {
            return { success: false, error: 'Correo o contraseña incorrectos' }
        }

        return {
            success: true,
            user: {
                id: perfil.id,
                name: perfil.nombre,
                email: perfil.email,
                role: perfil.rol === 'admin' ? 'ADMIN' as const : 'USER' as const,
            },
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error)
        return { success: false, error: 'Ocurrió un error inesperado al iniciar sesión' }
    }
}

export async function obtenerPersonal() {
    try {
        const personal = await prisma.perfiles.findMany({
            select: { id: true, nombre: true, email: true, rol: true, created_at: true },
            orderBy: { nombre: 'asc' },
        })
        return { success: true, personal }
    } catch (error) {
        console.error("Error al obtener personal:", error)
        return { success: false, personal: [] }
    }
}

export async function crearPersonal(data: {
    nombre: string
    email: string
    password: string
    rol: 'admin' | 'staff'
}) {
    try {
        if (!data.nombre.trim() || !data.email.trim()) {
            return { success: false, error: 'Nombre y correo son obligatorios' }
        }
        if (!data.password || data.password.length < 6) {
            return { success: false, error: 'La contraseña debe tener al menos 6 caracteres' }
        }

        const cleanEmail = data.email.toLowerCase().trim()
        const existente = await prisma.perfiles.findUnique({ where: { email: cleanEmail } })
        if (existente) {
            return { success: false, error: `Ya existe una cuenta con el correo "${cleanEmail}"` }
        }

        const passwordHash = await hashPassword(data.password)
        await prisma.perfiles.create({
            data: {
                nombre: data.nombre.trim(),
                email: cleanEmail,
                rol: data.rol,
                password_hash: passwordHash,
            }
        })

        revalidatePath('/configuracion')
        return { success: true, message: 'Personal agregado correctamente, ya puede iniciar sesión' }
    } catch (error) {
        console.error("Error al crear personal:", error)
        return { success: false, error: 'No se pudo agregar el personal' }
    }
}

export async function eliminarPersonal(id: string, idActual: string) {
    try {
        if (id === idActual) {
            return { success: false, error: 'No puedes eliminar tu propia cuenta mientras tienes sesión iniciada' }
        }

        const [ventas, gastos, movimientos, cuadres] = await Promise.all([
            prisma.ventas.count({ where: { usuario_id: id } }),
            prisma.gastos_operativos.count({ where: { usuario_id: id } }),
            prisma.movimientos_inventario.count({ where: { usuario_id: id } }),
            prisma.cuadres_caja.count({ where: { usuario_staff_id: id } }),
        ])
        const totalRegistros = ventas + gastos + movimientos + cuadres
        if (totalRegistros > 0) {
            return {
                success: false,
                error: `No se puede eliminar: tiene ${totalRegistros} registro(s) asociado(s) (ventas, gastos, movimientos o cuadres). Es historial real del negocio.`,
            }
        }

        await prisma.perfiles.delete({ where: { id } })
        revalidatePath('/configuracion')
        return { success: true, message: 'Personal eliminado correctamente' }
    } catch (error) {
        console.error("Error al eliminar personal:", error)
        return { success: false, error: 'No se pudo eliminar el personal' }
    }
}
