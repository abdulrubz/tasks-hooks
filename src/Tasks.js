import React, { useState, useEffect } from "react";
import "./Tasks.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

const Tasks = () => {
  const data = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(data || []);
  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title }]);
    setTitle("");
    console.log(tasks);
  };

  const removeTask = (title) => {
    setTasks(tasks.filter((task) => task.title !== title));
  };

  return (
    <div>
      <h1 className="title is-4">Get Sh!t Done</h1>

      <TaskForm addTask={addTask} setTitle={setTitle} title={title} />

      <Task tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default Tasks;
