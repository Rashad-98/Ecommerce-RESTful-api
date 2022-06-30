import express, {Request, Response} from "express";
import { Order, OrderStore } from "../models/order";
import validate from "../utilities/validate";

const store = new OrderStore();

const show = async (req: Request, res: Response) => {
    try {
        const id: Number = parseInt(req.params.user_id);
        const order = await store.show(id);
        res.json(order);
    } catch (err) {
        res.status(400)
        res.json(err);
    }
}

const idOfEachProductInTheOrder = async (req: Request, res: Response) => {
    try {
        const id: Number = parseInt(req.params.id);
        const idsOfProducts = await store.idOfEachProductInTheOrder(id);
        res.json(idsOfProducts);
    } catch (err) {
        res.status(400)
        res.json(err);
    }
}

const quantityOfEachProductInTheOrder = async (req: Request, res: Response) => {
    try {
        const id: Number = parseInt(req.params.id);
        const quantityOfProducts = await store.quantityOfEachProductInTheOrder(id);
        res.json(quantityOfProducts);
    } catch (err) {
        res.status(400)
        res.json(err);
    }
}

const orderRoutes = (app: express.Application) =>{
    app.get('/orders/:user_id', validate, show)
    app.get('/orders/products-in-order/:id', validate, idOfEachProductInTheOrder);
    app.get('/orders/products-in-order-quantity/:id', validate, quantityOfEachProductInTheOrder);
}

export default orderRoutes;