import { PrismaClient } from "@prisma/client";
import { getDigimonByName } from "../repositories/digimon.repository";

export async function getDigimonByNameService(
  name: string,
  prisma: PrismaClient
) {
  try {
    return getDigimonByName(name, prisma);
  } catch (error) {
    throw error;
  }
}
