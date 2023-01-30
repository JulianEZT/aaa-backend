import express, {Request, Response} from "express";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken"


export const getItems = (req: Request, res: Response) => {
    res.send({ list: [1,2,3] })
} 


export const getItem = (req: Request, res: Response) => {
    let username = 'a';
    let password = '1';

    let userQuery = req.query.username
    let passwordQuery = req.query.password

    var userLogin: User= {};

    if(userQuery === username && passwordQuery === password) {

        userLogin.username = userQuery;
        userLogin.password = passwordQuery;
        
        const token: string = jwt.sign(userLogin, process.env.SECRET_KEY!, { expiresIn: '900s' })
        res.status(200).json(token)

    }else{
        if(userQuery === username && passwordQuery != password){
            res.status(400).send('Contraseña incorrecta');
            return;
        }else{
            res.status(400).send('usuario o contraseña incorrectos');
            return;
        } 
    }
}    

const createItem = async (req: Request, res: Response) => {
    try{
        const { name, age, email } =  req.body
        
    }catch (e) {
        console.log(e)
    }
}    

const updateItem = (req: Request, res: Response) => {
    
}    

const deleteItem = (req: Request, res: Response) => {
    
}
