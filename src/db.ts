import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getPrisma() {
  return prisma;
}

export function killDb() {
  prisma.$disconnect();
}
