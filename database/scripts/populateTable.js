import { query } from "../index.js";
import events from "../../libs/events.js";

async function populateTable() {
for (let i = 0; i<events.length; i++) {
    const res = await query(`INSERT INTO events(title, description, date, 
        start_time, end_time, social_link, location, attending_count, status)VALUES 
        ($1,$2,$3,$4,$5,$6,$7,$8,$9);`,[events[i].title, events[i].description, events[i].date, 
        events[i].start_time, events[i].end_time, events[i].social_link, events[i].location, 
        events[i].attending_count, events[i].status]);

    console.log(`populated with ${events[i].title}`);
}
}

populateTable();