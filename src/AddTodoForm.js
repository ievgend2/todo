import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from './TodoListItem.module.css'


export default function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState("");
  const { onAddTodo } = props;

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}  className={style.TextBig}>
        <InputWithLabel
          todoTitle={todoTitle}
          isFocused
          className={style.FormInput}
         
          handleTitleChange={handleTitleChange}
        >Title: </InputWithLabel>
        <button type="submit" className={style.FormButton}>Add</button>
      </form>
    </div>
  );
}
