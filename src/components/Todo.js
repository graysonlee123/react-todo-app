import React, { useState } from 'react'

const Todo = ({ todo, todos, setTodos, updateTodo }) => {
  const [showInput, setShowInput] = useState(false)
  const [text, setText] = useState(todo.text)

  const deleteHandler = () => {
    setTodos(todos.filter((item) => todo.id !== item.id))
  }

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }

        return item
      })
    )
  }

  const handleLabelClick = (e) => {
    setShowInput(true)

    setTimeout(() => {
      const input = document.getElementById(todo.id)
      input.focus()
    }, 0)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleBlur = (e) => {
    submitChange()
  }

  const handleEnter = (e) => {
    if (e.key !== 'Enter') return
    submitChange()
  }

  const submitChange = (e) => {
    setShowInput(false)
    updateTodo(todo.id, text)
  }

  return (
    <li className="todo">
      {!showInput && (
        <label
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
          htmlFor={todo.id}
          onClick={handleLabelClick}
        >
          {todo.text}
        </label>
      )}
      {showInput && (
        <input
          type="text"
          id={todo.id}
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyUp={handleEnter}
        />
      )}
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  )
}

export default Todo
