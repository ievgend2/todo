import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

export default function AddTodoForm({ onAddTodo }) {
  AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
  };

  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    if (todoTitle.trim().length === 0) alert("ToDo can't be blank!");
    else onAddTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo} className={style.TextBig}>
        <InputWithLabel
          todoTitle={todoTitle}
          isFocused
          className={style.FormInput}
          handleTitleChange={handleTitleChange}
        ></InputWithLabel>
        <button type="submit" className={style.FormButton}>
          Add
        </button>
      </form>
    </div>
  );
}
