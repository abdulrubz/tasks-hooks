import React from "react";
import "./Tasks.css";

const Task = (props) => {
  return (
    <div className="taskDisplay">
      <table className="table is-striped is-bordered">
        <tbody>
          {props.tasks.map((task) => (
            <tr className="taskCell" key={task.title}>
              <td className="taskTitle">{task.title}</td>
              <td>
                <button
                  className="deleteButton"
                  onClick={() => props.removeTask(task.title)}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
