import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';

const validate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth = req.headers.authorization as string;
        const token = auth.split(' ')[1];
        jsonwebtoken.verify(token, process.env.token_secret as string);
        // jsonwebtoken.verify(token, 'I_still_love_cheese');
        next();
    } catch (err) {
        throw new Error(`${err}`);
    }
}

export default validate;