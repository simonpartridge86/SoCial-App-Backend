import { pool } from "../index.js";
import events from "../../libs/events.js";

async function populateTable() {
for (let i = 0; i<events.length; i++) {
        await pool.query(`INSERT INTO events(type, author, description, date, 
        start_time, end_time, social_link, attendance)VALUES 
        ($1,$2,$3,$4,$5,$6,$7,$8);`,[events[i].type, events[i].author, events[i].description, 
        events[i].date, events[i].start_time, events[i].end_time, events[i].social_link, 
        events[i].attendance]);

    console.log(`populated with ${events[i].type} hosted by ${events[i].author}`);
}
}

populateTable();