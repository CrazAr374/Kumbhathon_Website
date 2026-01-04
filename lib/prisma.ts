import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Get database URL from multiple possible environment variables
const getDatabaseUrl = (): string | undefined => {
  // Try Database_DATABASE_URL first
  if (process.env.Database_DATABASE_URL) {
    return process.env.Database_DATABASE_URL
  }
  
  // Fall back to primary DATABASE_URL
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
  
  return undefined
}

// Set DATABASE_URL for Prisma from available sources
const dbUrl = getDatabaseUrl()
if (dbUrl) {
  process.env.DATABASE_URL = dbUrl
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma