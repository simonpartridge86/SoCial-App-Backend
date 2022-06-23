import { query } from "../index.js";
import events from "../../libs/events.js";

async function populateTable() {
for (let i = 0; i<events.length; i++) {
    const res = await query(`INSERT INTO events(type, author, description, date, 
        start_time, end_time, social_link, location, attendance, status)VALUES 
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`,[events[i].type, events[i].author, events[i].description, 
        events[i].date, events[i].start_time, events[i].end_time, events[i].social_link, events[i].location, 
        events[i].attendance, events[i].status]);

    console.log(`populated with ${events[i].type} hoested by ${events[i].author}`);
}
}

populateTable();