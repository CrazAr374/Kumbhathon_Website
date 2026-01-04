import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Get database URL from multiple possible environment variables
const getDatabaseUrl = (): string => {
  // Try primary DATABASE_URL first (Prisma Accelerate)
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL
  }
  
  // Fall back to Database_PRISMA_DATABASE_URL (Direct PostgreSQL)
  if (process.env.Database_PRISMA_DATABASE_URL) {
    return process.env.Database_PRISMA_DATABASE_URL
  }
  
  // Fall back to Database_POSTGRES_URL (Alternative PostgreSQL)
  if (process.env.Database_POSTGRES_URL) {
    return process.env.Database_POSTGRES_URL
  }
  
  throw new Error('No DATABASE_URL configured. Please set one of: DATABASE_URL, Database_PRISMA_DATABASE_URL, or Database_POSTGRES_URL')
}

// Override DATABASE_URL at runtime for Prisma to use
process.env.DATABASE_URL = getDatabaseUrl()

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma