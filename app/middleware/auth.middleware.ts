import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import jwt_decode from "jwt-decode"

export const authMiddleWare = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization;
    let decoded = jwt_decode(token!);

    if (!token) {
        next(new Error('no token provided'));
    }

    try {
        if (jwt.verify(token!, process.env.SECRET_KEY!)) {
            next();
        }
    } 
    catch(e)
    {
        next(new Error('Token corrupted'));
    }

} 