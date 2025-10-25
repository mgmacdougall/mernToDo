import React from "react";
import { useState } from "react";
import "./TaskCard.css";

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
          <p>Edit state</p>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          {/* <input
            type="text"
            value={task.completed}
            className="w-full mb-2 p-2 border rounded"
          /> */}

          <button
            onClick={() => {
              handleEditClick();
              onUpdate(task._id, { title: taskTitle });
            }}
          >
            Save changes
          </button>
        </div>
      ) : (
        <div className="p-4">
          <p>None edit state</p>
        </div>
      )}
      <div className="button-group">
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
