import events from "../libs/events.js";

// list all events
export function getEvents() {
    return events;
}

// post new events
export function createEvent(newEvent) {
    events.push(newEvent);
    return events[events.length - 1]
}

