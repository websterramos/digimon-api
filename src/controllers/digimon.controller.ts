import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getAllDigimonService } from "../services/get-all-digimon.service";
import { getDigimonByNameService } from "../services/get-digimon-by-name.service";
import { getDigimonByLevelService } from "../services/get-digimon-by-level.service";

export function getAllDigimon(prisma: PrismaClient) {
  return async function (req: Request, res: Response): Promise<any> {
    try {
      const allDigimon = await getAllDigimonService(prisma);
      return res.status(200).json(allDigimon);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}

export function getDigimonByName(prisma: PrismaClient) {
  return async function (req: Request, res: Response): Promise<any> {
    try {
      const { name } = req.params;
      const digimon = await getDigimonByNameService(name, prisma);

      if (!digimon)
        return res.status(404).json({ message: "Digimon not found" });

      return res.status(200).json(digimon);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}

export function getDigimonByLevel(prisma: PrismaClient) {
  return async function (req: Request, res: Response): Promise<any> {
    try {
      const { level } = req.params;
      const levelValid = isValidLevel(level);

      if (!levelValid)
        return res.status(422).json({ message: "Level does not exist" });

      const digimon = await getDigimonByLevelService(level, prisma);

      return res.status(200).json(digimon);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}

function isValidLevel(input: string): boolean {
  const validLevels = [
    "Fresh",
    "In Training",
    "Rookie",
    "Champion",
    "Mega",
    "Ultimate",
  ];
  return validLevels.includes(input);
}
