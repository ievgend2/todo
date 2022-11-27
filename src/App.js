import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const [newTodo, setNewTodo] = useState();

  return (
    <div style={{ marginLeft: "25%" }}>
      <h1>ToDo List</h1>
      <TodoList />
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
    </div>
  );
}

export default App;
