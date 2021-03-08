import React from 'react'

// Components
import Todo from './Todo'

const Todos = ({ todos, setTodos, filteredTodos, updateTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            updateTodo={updateTodo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default Todos
