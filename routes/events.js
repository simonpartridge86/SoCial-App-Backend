import express from "express";

const router = express.Router();

import {
    getEvents,
    createEvent
} from "../models/events.js"

router.get("/", function (req,res) {
    const result = getEvents();
    res.json({success:true, payload:result});
})

router.post("/",function (req,res) {
    const newEvent = req.body;
    const result = createEvent(newEvent);
    res.json({success:true, payload:result})
})

export default router;