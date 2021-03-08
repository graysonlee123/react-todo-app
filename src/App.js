import './App.css'
import React, {useState, useEffect} from 'react';

// Comonents
import Form from './components/Form'
import Todos from './components/Todos'


function App() {  
  // State
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  // Functions
  const filterHandler = (e) => {
    switch (filter) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed))
        break;
      case 'uncompleted': 
        setFilteredTodos(todos.filter(todo => !todo.completed))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos')) {
      const localTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos)
    }
  }

  const updateTodo = (id, text) => {
    setTodos(todos.map(item => {
      if ( item.id === id) {
        return {
          ...item, text,
          completed: false
        }
      }

      return item
    }))
  }

  // Effect
  useEffect(getLocalTodos, [])
  useEffect(filterHandler, [todos, filter])
  useEffect(saveLocalTodos, [todos])

  // JSX
  return (
    <div className="App">
      <header>
        ToDo List
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter}/>
      <Todos filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} updateTodo={updateTodo}/>
    </div>
  )
}

export default App
