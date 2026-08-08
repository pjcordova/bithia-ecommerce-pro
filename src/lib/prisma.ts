import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'], // Esto te ayudará a ver en la terminal qué está pasando
    });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;