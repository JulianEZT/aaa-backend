import { check } from 'express-validator'
import {NextFunction, Request, Response} from "express";
import { validateResult } from '../helpers/validate.helper';


export const validateLogin = [
    check('username')
    .exists()
    .not()
    .isEmpty(),
    check('password')
    .exists()
    .not()
    .isEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next)
    }
]