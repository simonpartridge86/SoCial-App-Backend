import pg from 'pg';
export const pool = new pg.Pool({ 
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: {rejectUnauthorised: false}
})

const response = await pool.query('SELECT NOW()')

export function query(text, param, callback) {
    return pool.query (text, param, callback);
}