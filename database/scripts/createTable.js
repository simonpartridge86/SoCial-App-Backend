import {pool} from "../index.js";


const sqlString = `CREATE TABLE IF NOT EXISTS events (events_id INT
     PRIMARY KEY GENERATED ALWAYS AS IDENTITY, type TEXT, author TEXT,
     description TEXT, date DATE, start_time TEXT, end_time TEXT, 
     social_link TEXT, attendance INT)`;

async function createTable() {
    await pool.query(sqlString);
    console.log("table created");  
};

createTable();