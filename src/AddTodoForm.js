import React, { useState } from "react";

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
        <label htmlFor="todoTitle">Title</label>
        <input value={todoTitle} onChange={handleTitleChange}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
