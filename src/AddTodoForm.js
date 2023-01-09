import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          isFocused
          handleTitleChange={handleTitleChange}
        >Title: </InputWithLabel>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
