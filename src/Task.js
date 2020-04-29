import React from "react";
import "./Tasks.css";
import Button from "./Button";

const Task = ({ removeTask, tasks }) => {
  return (
    <div className="taskDisplay">
      <table className="table is-striped is-bordered">
        <tbody>
          {tasks.map((task) => (
            <tr className="taskCell" key={task.title}>
              <td className="taskTitle">{task.title}</td>
              <td>
                <Button
                  classes="deleteButton"
                  text="❌"
                  clickFunction={() => removeTask(task.title)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
