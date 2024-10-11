import { PrismaClient } from "@prisma/client";
import { getAllDigimon } from "../repositories/digimon.repository";

export async function getAllDigimonService(prisma: PrismaClient) {
  try {
    return getAllDigimon(prisma);
  } catch (error) {
    throw error;
  }
}
