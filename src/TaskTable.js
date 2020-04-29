import React from "react";
import "./Tasks.css";
import Button from "./Button";
import Task from "./Task";

const TaskTable = ({ removeTask, tasks }) => {
  return (
    <div className="taskDisplay">
      <table className="table is-striped is-bordered">
        <tbody>
          {tasks.map((task) => (
            <Task task={task} removeTask={removeTask} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
