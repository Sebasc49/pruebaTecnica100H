import { createUser} from "../controllers/user.controller.js";
import express from "express";

export const usersRouter = express.Router();

usersRouter.post("/crear", createUser); // Aca esta la´ruta para poder crear un usuario