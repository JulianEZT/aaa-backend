import express, { Request, Response, Router } from "express";
import { userRouter } from "../routes/user.routes";
import { loginRouter } from "../routes/login.routes";
import dotenv from 'dotenv'
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerSetup from '../doc/swagger.doc';

export class Server {

    app: express.Application;
    apiRouter: any;

    constructor() {
        this.app = express();
        dotenv.config();
        this.app.use(cors());

        // controla las rutas
        this.apiRouter = Router();
        this.apiRouter.use(
            loginRouter,
            userRouter
        );

        this.routesApp();
    };

    routesApp(): void {

        // http://localhost:3000/documentation/  -> para abrir swagger
        this.app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSetup))
        this.app.use('/api/', this.apiRouter)

    }

    listen(): void {

        this.app.listen(process.env.PORT, () => {
            console.log("listening port: ", process.env.PORT)
        })
    }


}





