import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {

  return (
    <div style={{ marginLeft: "25%" }}>
      <h1>ToDo List</h1>
      <TodoList/>
      <AddTodoForm/>
    </div>
  );
}

export default App;
