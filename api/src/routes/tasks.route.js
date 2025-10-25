import express from "express";
import { Task } from "../models/todo.model.js";

const taskRouter = express.Router();

taskRouter.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ error: "Failed to get tasks" });
  }
});

export default taskRouter;
