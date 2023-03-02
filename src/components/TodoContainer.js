import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import style from "./TodoListItem.module.css";

const TodoContainer = () => {
  const [todoList, setTodoList] = React.useState([true]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [order, setOrder] = React.useState("asc");

  React.useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=${order}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTodoList(
          result.records.sort(function (a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
          }) || []
        );
        setIsLoading(false);
      });
  }, [order]);

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    const data = {
      fields: {
        Title: newTodo.title,
      },
    };
    addListItem(data);
  }

  const handleOrderChange = (e) => {
    if (e.target.checked) setOrder("desc");
    else setOrder("asc");
  };

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

      <div className={`${style.TextBig} ${style.Margin}`}>
        <span>Order:</span>
        <label className={style.Switch}>
          <input type="checkbox" onChange={handleOrderChange} />
          <span className={`${style.Slider} ${style.Round}`}></span>
        </label>
      </div>
    </div>
  );
};

export default TodoContainer;
