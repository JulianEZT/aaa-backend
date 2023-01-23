import express, {Request, Response, Router} from "express";
import { userRouter } from "./user.router";
import  dotenv  from 'dotenv'
import { authMiddleWare } from "../middleware/auth.middleware";
import { getItem } from "../controllers/users.controller";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerSetup from '../doc/swagger.doc';


const apiRouter= Router();

apiRouter.use(
    userRouter
    )

dotenv.config();
const app = express();
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSetup))


app.use(cors())

/**
 * get login
 * @swagger
 * /login:
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
app.use('/login', getItem) 
app.use('/api/', authMiddleWare, apiRouter)

app.listen(3000, () => {
    console.log("listening")
})