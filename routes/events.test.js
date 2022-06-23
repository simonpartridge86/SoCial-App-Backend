import request from "supertest";
import { app } from "../app.js";
import { pool } from "../database/index.js";

//Write tests for all CRUD routes
describe('Tests for all current CRUD routers (GET, POST, PATCH) on "/events" path', () => {

//GET
test("Runs required tests on GET request at /events path", async () => {
    const response = await request(app).get("/events");

    expect(response.status).toBe(200);

    const expectedResponseBody = {
        success: true,
        payload: expect.any(Array)
    }
    expect(response.body).toStrictEqual(expectedResponseBody);

    const expectedPayload = expect.arrayContaining([{
        events_id: expect.any(Number),
        type: expect.any(String),
        author: expect.any(String),
        description: expect.any(String),
        date: expect.any(String),
        start_time: expect.any(String),
        end_time: expect.any(String),
        social_link: expect.any(String),
        location: expect.any(String),
        attendance: expect.any(Number),
        status: expect.any(Boolean),
    }]);
    expect(response.body.payload).toStrictEqual(expectedPayload);
})
//POST
test("Runs required tests on POST request at /events path", async () => {
    const postObject = {
        type: "Course Chat",
        author: "Simon",
        description: "Test event",
        date: "2022-06-30",
        start_time: "10:00",
        end_time: "10:30",
        social_link: "",
        location: "",
        attendance: 0,
        status: false,
    };
    const response = await request(app).post("/events").send(postObject);

    expect(response.status).toBe(200);

    const expectedResponseBody = {
        success: true,
        payload: expect.any(Array)
    }

    expect(response.body).toStrictEqual(expectedResponseBody);

    const expectedPayload = expect.arrayContaining([{
        events_id: expect.any(Number),
        type: expect.any(String),
        author: expect.any(String),
        description: expect.any(String),
        date: expect.any(String),
        start_time: expect.any(String),
        end_time: expect.any(String),
        social_link: expect.any(String),
        location: expect.any(String),
        attendance: expect.any(Number),
        status: expect.any(Boolean),
    }]);
    expect(response.body.payload).toStrictEqual(expectedPayload);
})
//PATCH 
test("Runs required tests on PATCH request at /events/:id path", async () => {
    const response = await request(app).patch("/events/4").send({ change: true });

    expect(response.status).toBe(200);

    const expectedResponseBody = {
        success: true,
        payload: expect.any(Array)
    }
    //console.log(response.body)
    expect(response.body).toStrictEqual(expectedResponseBody);

    const expectedPayload = expect.arrayContaining([{
        events_id: 4,
        type: "Course Chat",
        author: "Simon",
        description: "Test event",
        date: "2022-06-29T23:00:00.000Z",
        start_time: "10:00",
        end_time: "10:30",
        social_link: "",
        location: "",
        attendance: 1,
        status: false,
    }]);
    expect(response.body.payload).toStrictEqual(expectedPayload);
})

afterAll( async () => {
    await pool.end();
})

})