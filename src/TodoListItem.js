import React from 'react'

export default function TodoListItem(props) {
  return (
        <li style={{ listStyleType: "none" }}>
            <input
              type="checkbox"
              id={props.todo.id}
              name={props.todo.title}
              value={props.todo.title}
            />
            <label for={props.todo.id}>{props.todo.title}</label>
          </li>
  )
}
