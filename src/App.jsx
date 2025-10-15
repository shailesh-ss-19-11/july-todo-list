import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './todo/Todo'
import Pagination from './Pagination'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/home' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/todo' Component={Todo}/>
    </Routes>
      {/* <center>
        <h1>TODO APP</h1>
        <Todo />
      </center> */}
    </>
  )
}

export default App
