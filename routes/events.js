import express from "express";

const router = express.Router();

import {
    getEvents,
    createEvent
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

export default router;