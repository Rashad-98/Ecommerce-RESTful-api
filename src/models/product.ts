import client from "../database";

export type Product = {
    //id: Number;
    name: string;
    price: Number;
}

export class ProductStore {
    async index (): Promise<Product[]> {
        try {
            const conn = await client.connect();
            const sql = `SELECT * FROM products`;
            const result = await conn.query(sql);
            conn.release();
        return result.rows;
        } catch (err) {
            throw new Error (`cannot get products ${err}`);
        }
    }

    async show (productId: Number): Promise<Product[]> {
        try {
            const conn = await client.connect();
            const sql = `SELECT * FROM products WHERE id='${productId}'`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`cannot get product ${err}`);
        }
    }

    async create (product: Product): Promise<Product[]> {
        try {
            const productName: string = product.name;
            const productPrice: Number = product.price;
            const conn = await client.connect();
            const sql = `INSERT INTO products (name, price) VALUES ('${productName}', ${productPrice})`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`cannot add product ${err}`);
        }
    }
}