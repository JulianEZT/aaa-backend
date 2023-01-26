import { param, validationResult } from 'express-validator'
import { NextFunction, Request, Response } from "express";


export const validateResult = (req: Request, res: Response, next: NextFunction) => {

    try {

        validationResult(req).throw();
        next();

    } catch (err) {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(403).json({ errors: errors.mapped()});
        }

    }

}


