import { useState, useEffect } from "react";
import "./TaskCard.css";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";

function TaskCard({ task, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [taskTitle, setTitle] = useState(task.title);
  const [taskDate, setDate] = useState(new Date());
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDate(task.dueDate ? new Date(task.dueDate) : new Date());
      setIsCompleted(task.completed || false);
    }
  }, [task]);

  const handleEditClick = () => {
    setIsEdit(!isEdit);
  };
  const handleFinishChange = () => {
    setIsCompleted(!isCompleted);
  };

  const handleChange = (e) => {
    setDate(new Date(e.target.value)); // Format: YYYY-MM-DD
  };

  return (
    <div>
      <h2>{task.title}</h2>
      {isEdit ? (
        <div>
          {/* <p>Edit state</p> */}
          <div className="flex-row align-right">
            <label htmlFor="custom-checkbox">Complete</label>
            <input
              type="checkbox"
              id="custom-checkbox"
              checked={isCompleted}
              onChange={handleFinishChange}
            />
          </div>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <label htmlFor="dueDate">Due Date</label>
          <div style={{ padding: "1rem" }}>
            <label htmlFor="dateInput">Select a date:</label>
            <input
              type="date"
              id="dateInput"
              value={taskDate.toISOString().split("T")[0]}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <Button
            variant="primary"
            className="d-block mx-auto my-3"
            onClick={() => {
              handleEditClick();
              onUpdate(task._id, {
                title: taskTitle,
                dueDate: taskDate,
                completed: isCompleted,
              });
            }}
          >
            Save changes
          </Button>
        </div>
      ) : (
        <div className="p-4">{/* <p>None edit state</p> */}</div>
      )}
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-inline-flex flex-row gap-2">
          <Button variant="primary" onClick={handleEditClick} size="lg">
            Edit
          </Button>
          <Button variant="danger" onClick={() => onDelete(task._id)} size="lg">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
