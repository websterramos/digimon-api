import express from "express";
import "./config/env";
import { router } from "./routes";

const server = express();
server.use(express.json());
server.use(router);

export { server };
