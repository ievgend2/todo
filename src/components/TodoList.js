import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { todoList, onRemoveTodo } = props;

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/>
        ))}
      </ul>
    </div>
  );
}
