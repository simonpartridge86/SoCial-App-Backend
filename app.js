import express from "express";
import router from "./routes/events.js";
import pg from 'pg'
import cors from 'cors'

const app = express();
const PORT = 3001;

// build a middleware
app.use(function (req,res,next) {
  next()
})

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/events",router);

//serves front end
app.get("/", (req, res) => {
  res.render("App");
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
// app.get("/", function (req, res) {
//   res.sendFile(html);
// });



