import React from "react";

const Navbar = ({ setIsAddTaskVisible, addTask, deleteTask }) => {
  const handleAddTask = () => {
    setIsAddTaskVisible(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top navbar-light bg-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <form className="d-flex align-items-center">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "250px" }}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>

        <div className="ms-auto d-flex align-items-center">
          <button
            className="btn btn-outline-primary me-2"
            type="button"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
