import dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';
const Pool = pg.Pool;

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST, 
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    database: process.env.POSTGRES_DATABASE,
});

export default pool;