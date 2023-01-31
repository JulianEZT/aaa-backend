import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import jwt_decode from "jwt-decode"
import { User } from "../models/user.model";

export const userTokenMiddleWare = (req: Request, res: Response, next: NextFunction) => {

    let username = 'a';
    let password = '1';

    const token = req.headers.authorization;
    let decoded: User = jwt_decode(token!);

    if (decoded.username !== username || decoded.password !== password) {
        next(new Error('the request user does not correspond to the token.'));
    }else{
        next();
    }

} 