import { PrismaClient, Digimon } from "@prisma/client";

export async function getAllDigimon(prisma: PrismaClient) {
  return prisma.digimon.findMany();
}

export async function getDigimonByName(name: string, prisma: PrismaClient) {
  return prisma.digimon.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  });
}

export async function getDigimonByLevel(level: string, prisma: PrismaClient) {
  return prisma.digimon.findMany({
    where: {
      level: {
        contains: level.toLowerCase(),
        mode: "insensitive",
      },
    },
  });
}
