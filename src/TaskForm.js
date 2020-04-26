import React from "react";
import "./Tasks.css";

const TaskForm = (props) => {
  return (
    <div className="taskForm">
      <form onSubmit={props.addTask}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              value={props.title}
              placeholder="Add a task"
              onChange={(e) => props.setTitle(e.target.value)}
            />
          </div>
          <div className="control">
            <button className="button is-info">Add Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
