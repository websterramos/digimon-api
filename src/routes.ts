import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
import { digimonController } from "./controllers";
import { inputValidateMiddleware } from "./middlewares/input-validation.middleware";
import { nameSchema } from "./utils/validation/name-schema";
import { levelSchema } from "./utils/validation/level-schema";

const prisma = new PrismaClient();
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("API working!");
});

router.get("/api/digimon", digimonController.getAllDigimon(prisma));

router.get(
  "/api/digimon/name/:name",
  inputValidateMiddleware(nameSchema),
  digimonController.getDigimonByName(prisma)
);

router.get(
  "/api/digimon/level/:level",
  inputValidateMiddleware(levelSchema),
  digimonController.getDigimonByLevel(prisma)
);

export { router };
