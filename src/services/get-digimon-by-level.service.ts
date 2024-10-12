import { PrismaClient } from "@prisma/client";
import { getDigimonByLevel } from "../repositories/digimon.repository";

export async function getDigimonByLevelService(
  level: string,
  prisma: PrismaClient
) {
  try {
    return getDigimonByLevel(level, prisma);
  } catch (error) {
    throw error;
  }
}
