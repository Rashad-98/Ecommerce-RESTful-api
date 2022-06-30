import { Pool } from "pg";
require('dotenv').config();

let client: Pool;
const {
    host,
    database,
    database_test,
    user,
    password,
    ENV
} = process.env;

if (ENV === 'test') {
        client = new Pool({
        host: host,
        database: database_test,
        user: user,
        password: password
    });    
} else {
    client = new Pool({
        host: host,
        database: database,
        user: user,
        password: password
    });
}

export default client;