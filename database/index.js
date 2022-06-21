import pg from 'pg';

export const pool = new pg.Pool({ 
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: {rejectUnauthorised: false}
});

<<<<<<< HEAD
const response = await pool.query('SELECT NOW()')
=======
export const response = await pool.query('SELECT NOW()');
>>>>>>> 6438d480210eb984b8fec4bc54ae7005909a0ab1

export function query(text, param, callback) {
    return pool.query (text, param, callback);
};