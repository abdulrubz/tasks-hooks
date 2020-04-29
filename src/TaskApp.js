import React, { useState, useEffect } from "react";
import "./Tasks.css";
import TaskTable from "./TaskTable";
import TaskForm from "./TaskForm";

const TaskApp = () => {
  const data = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(data || []);
  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
      <h1 className="title is-4">Yet Another Todo App</h1>

      <TaskForm addTask={addTask} setTitle={setTitle} title={title} />

      <TaskTable tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default TaskApp;
