import React, { useState } from 'react'
import TodoList from './TodoList'



const App = () => {
  const [todos, setTodos] = useState(['todo 1', 'todo 2'])
  return (
    <>
    <TodoList todos={todos} />
    <input type='text'/>
    <button>Add Todo</button>
    <div>0 left to do</div>
    {/* {console.log(todos.lenght)} */}
    </>
  )
}

export default App

