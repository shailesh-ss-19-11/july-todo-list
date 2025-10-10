import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './todo/Todo'
import Pagination from './Pagination'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center>
        <h1>TODO APP</h1>
        <Todo/>
        {/* <Pagination/> */}
      </center>
    </>
  )
}

export default App
