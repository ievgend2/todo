import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import style from './TodoListItem.module.css'


function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((results) => setTodoList(results.records));
    setIsLoading(false);
    // .then((results) => console.log(results.records))
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Fragment>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                  <div className={style.Background}>
                    <h1>ToDo List:</h1>
                    <AddTodoForm onAddTodo={addTodo} />
                    <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                  </div>
              )}
            </React.Fragment>
          }
        />
        <Route
          exact
          path="/new"
          element={
            <React.Fragment>
              <h1>New ToDo</h1>
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
