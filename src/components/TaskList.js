import Task from "./Task";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="row mt-5">
      <ul className="list-group">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
