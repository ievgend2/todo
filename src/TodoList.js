import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const todoList = [
    { id: 1, title: "Create React App." },
    { id: 2, title: "Install Yarn." },
    { id: 3, title: "Yarn Start." },
    { id: 4, title: "Open the src/App.js file." },
    { id: 5, title: "Remove the existing JSX from the component." },
    { id: 6, title: "Create a level-one heading that says 'Todo List'." },
    { id: 7, title: "Create an unordered list (<ul>)." },
    {
      id: 8,
      title:
        "Above the App() function, create an empty Array and store it in a variable named todoList",
    },
    { id: 9, title: "Inside the Array, create at least 3 Objects." },
    {
      id: 10,
      title: "Inside your unordered list, insert a JavaScript expression.",
    },
    {
      id: 11,
      title: "Inside the JavaScript expression, map over your todoList array.",
    },
    {
      id: 12,
      title:
        "For each Object in the Array, return a list item (<li>) with 'id' and 'title'.",
    },
  ];

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem
          key={todo.id}
          todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}
