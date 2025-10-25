import React from "react";
import { useState } from "react";
import "./TaskCard.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function TaskCard({ task, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [taskTitle, setTitle] = useState(task.title);

  const handleEditClick = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <h2>{task.title}</h2>
      {isEdit ? (
        <div>
          {/* <p>Edit state</p> */}
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <Button
            variant="primary"
            onClick={() => {
              handleEditClick();
              onUpdate(task._id, { title: taskTitle });
            }}
          >
            Save changes
          </Button>
        </div>
      ) : (
        <div className="p-4">{/* <p>None edit state</p> */}</div>
      )}
      <ButtonGroup aria-label="Basic example" className="me-2">
        <Button variant="primary" onClick={handleEditClick}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(task._id)}>
          Delete
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default TaskCard;
