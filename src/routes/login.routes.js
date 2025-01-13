import login from "../service/loginService.js";
import express from "express";

export const loginRouter = express.Router();


loginRouter.post("/", login); 