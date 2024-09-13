import { useState } from "react";
import Navbar from "../components/Navbar";
import NewTask from "../components/NewTask";
import TaskList from "../components/TaskList";

const HomePage = () => {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  
  const addTask = () => {
    console.log("Add Task");
  };

  return (
    <div className="container text-center">
      <h1 className="mt-5">Task Manager</h1>
      <p className="lead">Welcome to Task Manager</p>
      <Navbar setIsAddTaskVisible={setIsAddTaskVisible} />
      <TaskList
        tasks={[
          { id: 1, title: "Task 1", description: "Description 1" },
          { id: 2, title: "Task 2", description: "Description 2" },
        ]}
      />
      isAddTaskVisible && <NewTask addTask={addTask} />
    </div>
  );
};

export default HomePage;
