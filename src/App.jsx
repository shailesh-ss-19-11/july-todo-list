import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './todo/Todo'
import Pagination from './Pagination'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Users from './users/Users'
import Page404 from './components/Page404'
import UserInfo from './users/UserInfo'
import Dashboard from './pages/dashboard/Dashboard'
import ProtectedRoute from './auth/ProtectedRoute'
import AddUser from './users/AddUser'
import './app.css';
import EditUser from './users/EditUser'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/todo' element={<ProtectedRoute> <Todo /></ProtectedRoute>} />
        <Route path='/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path='/users/:userid' element={<UserInfo />} />
        <Route path='/users/add-user' element={<AddUser />} />
        <Route path='/users/edit-user/:id' element={<EditUser />} />
        <Route path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
      {/* <center>
        <h1>TODO APP</h1>
        <Todo />
      </center> */}
    </>
  )
}

export default App
