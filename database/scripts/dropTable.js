import {query} from "../index.js";

const sqlString = `DROP TABLE IF EXISTS events;`;

async function dropTable() {
    const res = await query(sqlString);
    console.log(res.command, "dropped table");
}


dropTable();