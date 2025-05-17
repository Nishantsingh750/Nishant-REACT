import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Nishant redux tool kit and flex is unidirectional data flow</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
