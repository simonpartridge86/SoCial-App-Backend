import {query} from "../index.js";


const sqlString = `CREATE TABLE IF NOT EXISTS events (events_id INT
     PRIMARY KEY GENERATED ALWAYS AS IDENTITY, type TEXT,
     description TEXT, date TEXT, start_time TEXT, end_time TEXT, 
     social_link TEXT, location TEXT, attendance INT, status BOOLEAN)`;

async function createTable() {
    const res = await query(sqlString);
    console.log("table created");  
};

createTable();