import express from "express";
import { Task } from "../models/todo.model.js";
import {
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/task.controller.js";
import { create } from "domain";
const router = express.Router();

router.get("/:id", getTaskById);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
export default router;
