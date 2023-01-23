import express, {Request, Response, Router} from "express";
import { userRouter } from "./user.route";
import  dotenv  from 'dotenv'
import { authMiddleWare } from "../middleware/auth.middleware";
import { getItem } from "../controllers/users.controller";
import cors from 'cors';


const apiRouter= Router();

apiRouter.use(
    userRouter
    )

dotenv.config();
const app = express();

app.use(cors())
app.use('/login', getItem) 
app.use('/api/', authMiddleWare, apiRouter)

app.listen(3000, () => {
    console.log("listening")
})