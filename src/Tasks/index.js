import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone}) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
      key={task.id}
        className = {`tasksItem${task.done && hideDone ? " tasksItem--hidden" : ""}`}
      >
        <button className="taskList__button taskList__button--done">
          {task.done ? "✔" :""}
        </button>
        <p className ={`tasksItem__paragraph${task.done ? " tasks__content--done" :""}`}>
          {task.content}
        </p>
        <button className="taskList__button taskList__button--delete">
          🗑
        </button>
      </li>
    ))}
  </ul>
)

export default Tasks