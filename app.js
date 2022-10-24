import express from "express";
import router from "./routes/events.js";
import cors from "cors";

export const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/events", router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
