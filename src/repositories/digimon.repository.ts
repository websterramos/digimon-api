import { PrismaClient, Digimon } from "@prisma/client";

export async function getAllDigimon(prisma: PrismaClient) {
  return prisma.digimon.findMany();
}
