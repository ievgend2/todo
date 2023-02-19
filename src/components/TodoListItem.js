import React from "react";
import  style from './TodoListItem.module.css'
import PropTypes from "prop-types";


export default function TodoListItem({ todo, onRemoveTodo}) {
  TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func,
  };
  
  return (
    <li style={{ listStyleType: "none" }} className={style.Line}>
      <input type="checkbox" name={todo.fields.Title} value={todo.fields.Title} className={style.Checkbox} />
      <label className={style.TextBig} htmlFor={todo.id}>{todo.fields.Title}</label>
      <button className={style.Button} onClick={() => onRemoveTodo(todo.id)}>❌</button>
    </li>
  );

}
