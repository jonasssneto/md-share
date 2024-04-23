import { Router } from "express";
import controller from "../controller/markdown";

export const routes = Router()
    .get("/", controller.getById)
    .post("/", controller.create)