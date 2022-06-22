// import events from "../libs/events.js";
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

    await pool.query(`INSERT INTO events(type, description, date, 
        start_time, end_time, social_link, location, attendance, status)VALUES 
        ($1,$2,$3,$4,$5,$6,$7,$8,$9);`,[newEvent.type, newEvent.description, newEvent.date, 
        newEvent.start_time, newEvent.end_time, newEvent.social_link, newEvent.location, 
        newEvent.attendance, newEvent.status]);

        const res = await pool.query (`SELECT * FROM events`)
        console.log(res.rows);
        return res.rows;
}

