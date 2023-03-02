import React from "react";

export default function TodoListItem({ todo, onRemoveTodo}) {
  return (
    <li style={{ listStyleType: "none" }}>
      <input type="checkbox" id={todo.id} name={todo.fields.Title} value={todo.fields.Title} />
      <label htmlFor={todo.id}>{todo.fields.Title}</label>
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );

}
