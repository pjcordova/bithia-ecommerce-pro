import { PrismaClient } from '@prisma/client'

// Previene múltiples instancias de Prisma Client en desarrollo
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'], // Opcional: te mostrará las consultas SQL en la terminal
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma