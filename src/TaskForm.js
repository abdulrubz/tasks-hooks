import React from "react";
import "./Tasks.css";
import Button from "./Button";

const TaskForm = ({ setTitle, title, addTask }) => {
  return (
    <div className="taskForm">
      <form onSubmit={addTask}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              value={title}
              placeholder="Add a task"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="control">
            <Button classes="button is-info" text="Add Task" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
