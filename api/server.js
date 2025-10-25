import dotenv from "dotenv";
import express from "express";
dotenv.config();
import morgan from "morgan";
import cors from "cors";

import tasksRouter from "./src/routes/tasks.route.js";
import taskRouter from "./src/routes/task.route.js";
import { connectDB } from "./src/database/dbConnection.js";
import fs from "fs";
import path from "path";
const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

// Generate filename with today's date
const dateStamp = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
const logStream = fs.createWriteStream(path.join(logDir, `${dateStamp}.log`), {
  flags: "a",
});

const PORT = process.env.SERVER_PORT || 4040;
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("combined", { stream: logStream }));

connectDB();

app.use("/tasks", tasksRouter);
app.use("/task", taskRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
