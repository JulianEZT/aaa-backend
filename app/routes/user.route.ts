import { Router } from "express";
import { getItem, getItems } from "../controllers/users.controller";

export const userRouter = Router();

userRouter.get('/users', getItems)
