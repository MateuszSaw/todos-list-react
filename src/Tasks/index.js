import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone}) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
      key={task.id}
        className = {`tasksItem${task.done && hideDone ? " tasksItem--hidden" : ""}`}
      >
        <button
          className="taskList__button taskList__button--done"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" :""}
        </button>
        <p className ={`tasksItem__paragraph${task.done ? " tasks__content--done" :""}`}>
          {task.id} - {task.content}
        </p>
        <button
          className="taskList__button taskList__button--delete"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
)

export default Tasks