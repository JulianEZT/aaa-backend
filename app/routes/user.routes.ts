import { Router } from "express";
import { getItems } from "../controllers/users.controller";
import { authMiddleWare } from "../middleware/auth.middleware";

export const userRouter = Router();

/**
 * get list
 * @swagger
 * /api/users:
 *    get:
   *        tags:
   *            - users
   *        description: trae el listado
   *        consumes:
   *        - application/json
   *        produces:
   *        - application/json
   *        security:
   *          - ApiKeyAuth: []
   *        responses:
   *            200:
   *                description: todo esta ok, trae listado
   *            400:
   *                description: bad request
   *            500:
   *                description: internal server error
   * definitions:
   *     username:
   *        type: string
   *        required:
   *        - username
   *        - password
   */
userRouter.get('/users', authMiddleWare, getItems)



