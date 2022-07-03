import { pool } from "../database/index.js"

// Handles get request that passes all future events to the front end. This request is run by useEffect on loading of the APP.
export async function getEvents() {
  const currentDate = new Date();
  const currentDateFormatted = currentDate.toDateString();
  const res = await pool.query (
    `SELECT * FROM events 
    WHERE Date >= $1::date 
    ORDER BY date ASC, start_time ASC;`, 
    [currentDateFormatted]
  );
  const allFutureEvents = res.rows;
  console.log(allFutureEvents);
  return allFutureEvents;
};

// Handles post request that creates a new event in the database. Responds with all future events to the front end. 
export async function createEvent(newEvent) {
  await pool.query(
    `INSERT INTO events (type, author, description, date, 
    start_time, end_time, social_link, attendance)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8);`,
    [newEvent.type, newEvent.author, newEvent.description, newEvent.date, 
    newEvent.start_time, newEvent.end_time, newEvent.social_link, newEvent.attendance]
  );
  return getEvents();
};

// Handles patch request that updates the attendance counter (on the selected event by id). Responds with all future events to the front end. 
export async function changeAttendance(id, body) {
  if (body.change === true) {
      await pool.query (`UPDATE events
      SET attendance = attendance + 1
      WHERE events_id = $1;`,
    [id]
    );
  };
  if (body.change === false) {
      await pool.query (`UPDATE events
      SET attendance = attendance - 1
      WHERE events_id = $1;`,
    [id]
    );
  };
  return getEvents();
};


