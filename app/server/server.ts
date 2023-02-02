import express, { json, Request, Response, Router } from "express";
import { userRouter } from "../routes/user.routes";
import { loginRouter } from "../routes/login.routes";
import dotenv from 'dotenv'
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerSetup from '../doc/swagger.doc';
import DatabaseConnection from "../../config/bdConnection";
import OracleDB from "oracledb";



export class Server {

    app: express.Application;
    apiRouter: any;
    public dbConnect = new DatabaseConnection;

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
        this.connectToDB();
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
    
    async connectToDB(): Promise<void>  {
        await this.dbConnect.connectWithDB().then(async (connection: any) => {
           await connection.execute("select DESCRIPCION from PORTAL.FN_NACIONALIDAD", [], {outFormat: OracleDB.OUT_FORMAT_OBJECT},  (err: any, res: any) => {
            
                if (err) {
                    console.error(err.message);
                }else{
                    console.log('res', res.rows);
                }
            });
            this.dbConnect.doRelease(connection);
        }).catch(error => {
            console.log(error);
        });
    }


}





