import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ToDoInputForm.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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
    <div className="form-container">
      <h2>Enter a new todo</h2>
      <Form onSubmit={handleFormSubmit}>
        <Row>
          <label htmlFor="title">Title:</label>
          <Col>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </Col>
        </Row>
        <Row>
          <label htmlFor="complete">Completed</label>
          <Col>
            <select
              id="complete"
              value={completed}
              onChange={(e) => setCompleted(e.target.value === "true")}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value={false}>False</option>
              <option value={true}>True</option>
            </select>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-end" size="sm">
            <Button id="form-submit" type="submit">
              Save To Do
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default ToDoInputForm;
