import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './todo/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center>
        <h1>TODO APP</h1>
        <Todo/>
      </center>
    </>
  )
}

export default App
