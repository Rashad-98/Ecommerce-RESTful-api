import client from "../database";

export type Order = {
    //id: Number;
    userId: Number;
    status: string;
}

export class OrderStore {
    async show (userId: Number): Promise<Order[]> {
        try {
            const conn = await client.connect();
            const sql = `SELECT * FROM orders WHERE user_id='${userId}' AND status='active'`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`cannot get order ${err}`);
        }
    }

    async idOfEachProductInTheOrder (orderId: Number): Promise<Order[]> {
        try {
            const conn = await client.connect();
            const sql = `SELECT product_id FROM products INNER JOIN order_products ON products.id=order_products.product_id WHERE order_id='${orderId}'`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows; 
        } catch (err) {
            throw new Error(`cannot get products ${err}`);
        }
    }

    async quantityOfEachProductInTheOrder (orderId: Number): Promise<Order[]> {
        try {
            const conn = await client.connect();
            const sql = `SELECT product_id, quantity FROM products INNER JOIN order_products ON products.id=order_products.product_id WHERE order_id='${orderId}'`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows; 
        } catch (err) {
            throw new Error(`cannot get products ${err}`);
        }
    }
}
