import React from 'react'

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  filter,
  setFilter,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Date.now(),
      },
    ])

    setInputText('')
  }

  const filterHandler = (e) => {
    setFilter(e.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={filterHandler}
          value={filter}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
