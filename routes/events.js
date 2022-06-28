import express from "express";

const router = express.Router();

import {
    getEvents,
    createEvent,
    changeAttendance
} from "../models/events.js"

// Handles get request that passes all future events to the front end. This request is run by useEffect on loading of the APP.

router.get("/", async function (req,res) {
    const result = await getEvents();
    res.json({success:true, payload:result});
})

// Handles post request that creates a new event in the database. Responds with all future events to the front end. 

router.post("/", async function (req,res) {
    const newEvent = req.body;
    const result = await createEvent(newEvent);
    res.json({success:true, payload:result})
})

// Handles patch request that updates the attendance counter (on the selected event by id). Responds with all future events to the front end. 

router.patch("/:id", async function (req, res) {
    const eventId = req.params.id;
    const attendanceUpdate = req.body;
    // console.log(eventId);
    // console.log(req.body);
    const result = await changeAttendance(eventId, attendanceUpdate);
    res.json({success:true, payload:result});
});

export default router;