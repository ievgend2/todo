import React from "react";

export default function TodoListItem({ todo, onRemoveTodo}) {
  return (
    <li style={{ listStyleType: "none" }}>
      <input type="checkbox" id={todo.id} name={todo.title} value={todo.title} />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
}
