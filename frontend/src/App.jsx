import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import ToDoInputForm from "./components/ToDoInputForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tasks!", error);
      });
  }, []);

  const updateTodo = async (id, updatedTask) => {
    console.log("Updating task:", id, updatedTask);
    await axios.put(`http://localhost:5000/task/${id}`, {
      title: updatedTask.title,
      completed: updatedTask.completed,
      dueDate: updatedTask.dueDate,
    });
    const updatedTasks = tasks.map((task) =>
      task._id === id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/task/${id}`);
    const filteredTasks = tasks.filter((task) => task._id !== id);
    setTasks(filteredTasks);
  };

  const createTodo = async (newTask) => {
    const response = await axios.post("http://localhost:5000/task", newTask);
    setTasks([...tasks, response.data]);
  };

  const handleSubmit = (newtodo) => {
    console.log(newtodo);
    createTodo(newtodo);
  };

  return (
    <>
      <ToDoInputForm handleToDoSubmit={handleSubmit} />
      <div className="app-container">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </>
  );
}

export default App;
