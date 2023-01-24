import { Router } from "express";
import { getItem } from "../controllers/users.controller";

export const loginRouter = Router();


/**
 * get login
 * @swagger
 * /api/login:
 *    get:
   *        tags:
   *            - Login
   *        description: Hace el login del usuario, todos los campos son requeridos
   *        consumes:
   *        - application/json
   *        produces:
   *        - application/json
   *        parameters:
   *        - in: query
   *          name: username
   *          required: true
   *          schema:
   *            $ref: '#/definitions/username'
   *        - in: query
   *          name: password
   *          required: true
   *          schema:
   *            $ref: '#/definitions/username'
   *        responses:
   *            200:
   *                description: Responde el token
   *            400:
   *                description: Usuario o contraseña invalidos
   *            500:
   *                description: Error en el servidor
   * definitions:
   *     username:
   *        type: string
   *        required:
   *        - username
   *        - password
   */
loginRouter.get('/login', getItem)