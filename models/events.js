import events from "../libs/events.js";
import { pool, query } from "../database/index.js"
// list all events
export async function getEvents() {
    const sqlString = `SELECT * FROM events` 
    const res = await pool.query (sqlString);
    let newRes = res.rows;
    console.log(newRes)
    return newRes;
}

// post new events
export async function createEvent(newEvent) {

    await pool.query(`INSERT INTO events(title, description, date, 
        start_time, end_time, social_link, location, attending_count, status)VALUES 
        ($1,$2,$3,$4,$5,$6,$7,$8,$9);`,[events.title, events.description, events.date, 
        events.start_time, events.end_time, events.social_link, events.location, 
        events.attending_count, events.status]);

        const res = await pool.query (`SELECT * FROM events`)
        console.log(res.rows);
        return res.rows;
}

