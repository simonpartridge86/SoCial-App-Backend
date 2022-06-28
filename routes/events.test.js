import request from "supertest";
import { app } from "../app.js";
import { pool } from "../database/index.js";

/* PLEASE run reset table script (npm run resetTable) before executing the tests */

describe('Tests for all current CRUD routers (GET, POST, PATCH) on "/events" path', () => {

test("Runs three tests on GET request at /events path. First test checks http status code to be 200. Second/Third Test checks response body structure", async () => {
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
        attendance: expect.any(Number),
    }]);
    expect(response.body.payload).toStrictEqual(expectedPayload);
})


test("Runs three tests on POST request at /events path. First test checks http status code to be 200. Second/Third Test checks response body structure", async () => {
    const postObject = {
        type: "Course Chat",
        author: "Simon",
        description: "Test event",
        date: "2022-06-30",
        start_time: "10:00",
        end_time: "10:30",
        social_link: "",
        attendance: 0,
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
        attendance: expect.any(Number),
    }]);
    expect(response.body.payload).toStrictEqual(expectedPayload);
});


test("Runs three tests on PATCH request at /events/id path. First test checks http status code to be 200. Second/Third Test checks response body data", async () => {
    const response = await request(app).patch("/events/5").send({ change: true });

    expect(response.status).toBe(200);

    const expectedResponseBody = {
        success: true,
        payload: expect.any(Array)
    };
    expect(response.body).toStrictEqual(expectedResponseBody);

    const expectedPayload = expect.arrayContaining([{
        events_id: 5,
        type: "Course Chat",
        author: "Simon",
        description: "Test event",
        date: "2022-06-29T23:00:00.000Z",
        start_time: "10:00",
        end_time: "10:30",
        social_link: "",
        attendance: 1,
    }]);
    expect(response.body.payload).toStrictEqual(expectedPayload);
});

afterAll( async () => {
    await pool.end();
});

});