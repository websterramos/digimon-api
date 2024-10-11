import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
import { digimonController } from "./controllers";

const prisma = new PrismaClient();
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("API working!");
});

router.get("/api/digimon", digimonController.getAllDigimon(prisma));

router.get(
  "/api/digimon/name/:name",
  digimonController.getDigimonByName(prisma)
);

export { router };
