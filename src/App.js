import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div style={{ marginLeft: "25%" }}>
      <h1>ToDo List</h1>
      <TodoList todoList={todoList} />
      <AddTodoForm onAddTodo={addTodo} />
    </div>
  );
}

export default App;
