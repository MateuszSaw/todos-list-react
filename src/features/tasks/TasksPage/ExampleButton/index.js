import React from "react";
import Button from "../../Button";
import { fetchExampleTasks, selectExampleTasksLoading } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectExampleTasksLoading);

  return(
  <Button
    onClick={() => dispatch(fetchExampleTasks())}
    disabled= {loading}
  >
    {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
  </Button>
  );
};