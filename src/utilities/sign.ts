import { Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { User } from '../models/user';

const sign = (req: Request, res: Response) => {
    const user: User = req.body;
    const token = jsonwebtoken.sign(user, process.env.token_secret as string);
    res.set({'token': token});
    res.end();
}

export default sign;