import {query} from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS books (book_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    author_id INT,title TEXT)`;

async function createBooksTable() {
    const res = await query(sqlString);
    console.log("books table created");  
};

createBooksTable();