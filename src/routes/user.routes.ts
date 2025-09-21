import express from "express";
import { UserController } from "../controller/userController.js";

export const userRoutes = express.Router();


userRoutes.get("/user", UserController.getAll);
userRoutes.post("/user", UserController.save);
userRoutes.get("/user/:id", UserController.getbyId);
