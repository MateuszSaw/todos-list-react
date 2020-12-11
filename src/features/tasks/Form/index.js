import { nanoid } from "@reduxjs/toolkit";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, Input, Button } from "./styled"

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent){
      return;
    }

    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>
        Dodaj zadanie
      </Button>
    </StyledForm>
  )
};


export default Form;