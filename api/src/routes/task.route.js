import express from "express";
import { Task } from "../models/todo.model.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const foundTask = await Task.find({ _id: req.params.id });
    if (!foundTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task found", task: foundTask });
  } catch (e) {
    res.status(500).json({ message: "Error encountered" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, completed } = req.body;
    console.log(title, completed);
    const testObj = { title: title, completed: completed, dueDate: new Date() };
    const newTask = new Task(testObj);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (e) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res
      .status(200)
      .json({ message: "Task successfully deleted", task: deletedTask });
  } catch (e) {
    res.json({ message: "Error encountered in deleting the task" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, completed, dueDate } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        completed,
        dueDate,
      },
      { new: true, runValidators: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated", updatedTask });
  } catch (e) {
    res.status(500).json({ message: "Error encountered updating task" });
  }
});
export default router;
