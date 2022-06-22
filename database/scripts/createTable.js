import {query} from "../index.js";


const sqlString = `CREATE TABLE IF NOT EXISTS events (events_id INT
     PRIMARY KEY GENERATED ALWAYS AS IDENTITY, title TEXT,
     description TEXT, date TEXT, start_time INT, end_time INT, 
     social_link TEXT, location TEXT, attending_count TEXT, status BOOLEAN)`;

async function createTable() {
    const res = await query(sqlString);
    console.log("table created");  
};

createTable();