import React, { useState } from 'react'
import TodoList from "../TodoList/TodoList"
import "./AddInput.css"

import { v4 as v4uuid } from "uuid"

function AddInput({
  setTodos, todos
}) {
  const [todo, setTodo] = useState("")

  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: v4uuid(),
        task: todo,
        completed: false
      }
    ]
    
    setTodos(updatedTodos);
    setTodo("")
  }

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button
        className="add-btn"
        onClick={addTodo}
      >
        Add
      </button>

    </div>
  )
}

export default AddInput