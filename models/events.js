// import events from "../libs/events.js";
import { pool, query } from "../database/index.js"
// list all events
export async function getEvents() {
  const currentDate = new Date();
  const currentDateFormatted = currentDate.toDateString();
  // const sqlString = `SELECT * FROM events WHERE Date >= '$1'::date ORDER BY date ASC, start_time ASC;` 
  const res = await pool.query (`SELECT * FROM events WHERE Date >= $1::date ORDER BY date ASC, start_time ASC;`, [currentDateFormatted]);
  let newRes = res.rows;
  console.log(newRes)
  return newRes;
}

// post new events
export async function createEvent(newEvent) {
  const currentDate = new Date();
  const currentDateFormatted = currentDate.toDateString();
await pool.query(`INSERT INTO events (type, author, description, date, 
    start_time, end_time, social_link, location, attendance, status)VALUES 
    ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`,[newEvent.type, newEvent.author, newEvent.description, newEvent.date, 
    newEvent.start_time, newEvent.end_time, newEvent.social_link, newEvent.location, 
    newEvent.attendance, newEvent.status]);

    const res = await pool.query (`SELECT * FROM events WHERE Date >= $1::date ORDER BY date ASC, start_time ASC;`, [currentDateFormatted])
    console.log(res.rows);
    return res.rows;
}

//PATCH request to change attendance count and respond with up to date events list
export async function changeAttendance(id, body) {
  const currentDate = new Date();
  const currentDateFormatted = currentDate.toDateString();
    //console.log(body)
    if (body.change === true) {
        await pool.query (`UPDATE events
        SET attendance = attendance + 1
        WHERE events_id = $1;`,
      [id]
      );
    }
    if (body.change === false) {
        await pool.query (`UPDATE events
        SET attendance = attendance - 1
        WHERE events_id = $1;`,
      [id]
      );
    }
    const result = await pool.query(`SELECT * FROM events WHERE Date >= $1::date ORDER BY date ASC, start_time ASC;`, [currentDateFormatted])
    console.log(result.rows);
    return result.rows;
  }


