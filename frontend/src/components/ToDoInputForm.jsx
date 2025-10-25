import { useState } from "react";
function ToDoInputForm({ handleToDoSubmit }) {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleToDoSubmit({ title, completed }); // ✅ pass the data directly
    setTitle("");
    setCompleted(false);
  };

  return (
    <div>
      <h2>Enter a new todo</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
        <label htmlFor="complete">Completed</label>
        <select
          id="complete"
          value={completed}
          onChange={(e) => setCompleted(e.target.value === "true")}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value={false}>False</option>
          <option value={true}>True</option>
        </select>
        <button type="submit">Save To Do</button>
      </form>
    </div>
  );
}
export default ToDoInputForm;
