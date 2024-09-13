import { useState } from "react";

const NewTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please enter a task!");
      return;
    }
    addTask(task);
    setTask("");
  };

  return (
    <div className="row mt-5">
      <ul className="list-group">
        <li className="list-group-item">
          <form onSubmit={handleAddTask} className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default NewTask;
