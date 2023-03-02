import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import style from "./TodoListItem.module.css";

const TodoContainer = () => {
  const [todoList, setTodoList] = React.useState([true]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTodoList(result.records || []);
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    const data = {
      fields: {
        Title: newTodo.title,
        // Description: newTodo.description,
        // "Due Date": newTodo.dueDate,
      },
    };
    addListItem(data);
  }

  const removeTodo = (id) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          const newTodoList = todoList.filter((todo) => todo.id !== id);
          setTodoList(newTodoList);
        } else {
          throw new Error("Cant Delete the ToDo");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const addListItem = (todoItemData) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoItemData),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setTodoList([...todoList, result]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={style.Background}>
      <h1>ToDo List </h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
};

export default TodoContainer;
