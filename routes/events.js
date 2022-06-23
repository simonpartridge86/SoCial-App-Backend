import express from "express";

const router = express.Router();

import {
    getEvents,
    createEvent,
    changeAttendance
} from "../models/events.js"

router.get("/", async function (req,res) {
    const result = await getEvents();
    res.json({success:true, payload:result});
})

router.post("/", async function (req,res) {
    const newEvent = req.body;
    const result = await createEvent(newEvent);
    res.json({success:true, payload:result})
})

router.patch("/:id", async function (req, res) {
    let eventId = req.params.id;
    console.log(eventId);
    console.log(req.body);
    let result = await changeAttendance(eventId, req.body);
    res.json({success:true, payload:result});
});

export default router;