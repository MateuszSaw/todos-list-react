import React, { useRef, useState } from "react";
import { StyledForm, StyledInput, Button } from "./styled"

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const trimTask = newTaskContent.trim();
  const inputRef = useRef(null);

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (trimTask === ""){
      return
    }
    addNewTask(trimTask);
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button
        onClick={focusOnInput}
      >
        Dodaj zadanie
      </Button>
    </StyledForm>
  )
};


export default Form;