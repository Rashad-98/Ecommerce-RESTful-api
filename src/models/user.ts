import client from "../database";
import bcrypt from 'bcrypt';

export type User = {
    //id: Number;
    firstname: string;
    lastname: string;
    password: string;
}

export class UserStore {
    async index (): Promise<User[]> {
        try {
             const conn = await client.connect();
             const sql = 'SELECT * FROM users';
             const result =  await conn.query(sql);
             conn.release();
             return result.rows;
        } catch (err) {
             throw new Error(`cannot get users ${err}`);
         }
    }

    async show (userId: Number): Promise<User[]> {
        try{
            const conn = await client.connect();
            const sql = `SELECT * FROM users WHERE id=${userId}`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`cannot get user ${err}`);
        }
    }

    async create (user: User): Promise<User[]> {
        const firstname: string = user.firstname;
        const lastname: string = user.lastname;
        const password: string = user.password;
        try {
            const pepper = process.env.pepper as string;
            const saltRounds = process.env.saltRounds as string;
            const hash = bcrypt.hashSync(password + pepper, parseInt(saltRounds));
            const conn = await client.connect();
            const sql = 'INSERT INTO users (firstname, lastname, password) VALUES ($1, $2, $3)';
            const values = [firstname, lastname, hash];
            const result = await conn.query(sql, values);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`cannot create user ${err}`);
        }
    }
}