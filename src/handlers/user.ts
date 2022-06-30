import express, { NextFunction, Request, Response} from "express";
import { User, UserStore } from "../models/user";
import validate from "../utilities/validate";
import sign from "../utilities/sign";

const store = new UserStore();

const index = async (_req: Request, res: Response) => {
    try {
        const users = await store.index();
        res.json(users);
    } catch (err) {
        res.status(400)
        res.json(err);
    }
}

const show = async (req: Request, res: Response) => {
    try {
        const id: Number = parseInt(req.params.id);
        const user = await store.show(id);
        res.json(user);
    } catch (err) {
        res.status(400)
        res.json(err);
    }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: User = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password
        }
        await store.create(user);
        next();
    } catch (err) {
        res.status(400)
        res.json(err);
    }
}

const userRoutes = (app: express.Application) => {
    app.get('/users', validate, index);
    app.get('/users/:id', validate, show);
    app.post('/users', create, sign);
}

export default userRoutes;