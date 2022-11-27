import React from 'react'

export default function AddTodoForm(props) {

function handleAddTodo(event) {
  event.preventDefault()
  const todoTitle = event.target['todoTitle'].value
  console.log(todoTitle);
  event.target.reset('todoTitle')
  props.onAddTodo(todoTitle)
}

  return (
    <div>
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            <input id='todoTitle' name='title'></input>
            <button type='submit' >Add</button>
        </form>
    </div>
  )
}
