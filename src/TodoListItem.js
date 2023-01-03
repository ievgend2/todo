import React from "react";

export default function TodoListItem(props) {
  const { id, title } = props.todo;
  return (
    <li style={{ listStyleType: "none" }}>
      <input type="checkbox" id={id} name={title} value={title} />
      <label htmlFor={id}>{title}</label>
      <button onClick={() => props.onRemoveTodo(id)}>Remove</button>
    </li>
  );
}
