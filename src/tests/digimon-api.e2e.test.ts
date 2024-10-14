import request from "supertest";
import express from "express";
import { router } from "../routes";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
app.use(router);

const prisma = new PrismaClient();

describe("Digimon API E2E Tests", () => {
  beforeAll(async () => {
    await prisma.digimon.createMany({
      data: [
        {
          name: "Agumon",
          img: "https://digimon.shadowsmith.com/img/agumon.jpg",
          level: "Rookie",
        },
        {
          name: "Gabumon",
          img: "https://digimon.shadowsmith.com/img/gabumon.jpg",
          level: "Rookie",
        },
        {
          name: "Greymon",
          img: "https://digimon.shadowsmith.com/img/greymon.jpg",
          level: "Champion",
        },
      ],
    });
  });

  afterAll(async () => {
    await prisma.digimon.deleteMany({});
    await prisma.$disconnect();
  });

  it("should return all digimon", async () => {
    const response = await request(app).get("/api/digimon");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
  });

  it("should return a digimon by name", async () => {
    const response = await request(app).get("/api/digimon/name/Agumon");
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Agumon");
  });

  it("should return not found for a non-existing digimon", async () => {
    const response = await request(app).get("/api/digimon/name/Pikachu");
    expect(response.status).toBe(404);
  });

  it("should return validation error for a not-string parameter", async () => {
    const response = await request(app).get("/api/digimon/name/1010");
    expect(response.status).toBe(422);
  });

  it("should return validation error for null parameter", async () => {
    const response = await request(app).get("/api/digimon/name/");
    expect(response.status).toBe(422);
  });

  it("should return a string with all digimon of the queried level", async () => {
    const response = await request(app).get("/api/digimon/level/Rookie");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });

  it("should return validation error for a string that is not a level", async () => {
    const response = await request(app).get("/api/digimon/level/Noob");
    expect(response.status).toBe(422);
  });

  it("should return validation error for null parameter", async () => {
    const response = await request(app).get("/api/digimon/level/");
    expect(response.status).toBe(422);
  });
});
