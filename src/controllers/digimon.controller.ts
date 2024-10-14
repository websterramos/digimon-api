import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getAllDigimonService } from "../services/get-all-digimon.service";
import { getDigimonByNameService } from "../services/get-digimon-by-name.service";
import { getDigimonByLevelService } from "../services/get-digimon-by-level.service";
import { errorHandler } from "../utils/error-handler";

export function getAllDigimon(prisma: PrismaClient) {
  return async function (req: Request, res: Response) {
    try {
      const allDigimon = await getAllDigimonService(prisma);
      res.status(200).json(allDigimon);
    } catch (error) {
      const response = errorHandler(error);
      res.status(response.status).json(response.error);
    }
  };
}

export function getDigimonByName(prisma: PrismaClient) {
  return async function (req: Request, res: Response) {
    try {
      const { name } = req.params;
      const digimon = await getDigimonByNameService(name, prisma);

      if (!digimon) {
        res.status(404).json({ message: "Digimon not found" });
        return;
      }

      res.status(200).json(digimon);
    } catch (error) {
      const response = errorHandler(error);
      res.status(response.status).json(response.error);
    }
  };
}

export function getDigimonByLevel(prisma: PrismaClient) {
  return async function (req: Request, res: Response) {
    try {
      const { level } = req.params;
      const levelValid = isValidLevel(level);

      if (!levelValid) {
        res.status(422).json({ message: "Level does not exist" });
        return;
      }

      const digimon = await getDigimonByLevelService(level, prisma);

      res.status(200).json(digimon);
    } catch (error) {
      const response = errorHandler(error);
      res.status(response.status).json(response.error);
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
