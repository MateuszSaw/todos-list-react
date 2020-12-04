import { useEffect, useState } from "react";

const getInitialTasks = () => {
  const taskFromLocalStorage = localStorage.getItem("tasks");

  return taskFromLocalStorage
  ? JSON.parse(taskFromLocalStorage)
  : [];
};

export const useTasks = () => {
const [tasks, setTasks] = useState(getInitialTasks);

 useEffect(()=> {
  localStorage.setItem("tasks", JSON.stringify(tasks));
 }, [tasks]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id){
        return { ...task, done: !task.done };
      }
      return task;
    }));
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true
    })));
  }
  const addNewTask = (newTaskContent) => {
     setTasks(tasks => [
        ...tasks,
        {
          content: newTaskContent,
          done: false,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        },
     ]);
  };

  return ({
    tasks: tasks,
    removeTask: removeTask,
    toggleTaskDone: toggleTaskDone,
    setAllDone: setAllDone,
    addNewTask: addNewTask,
  });
}