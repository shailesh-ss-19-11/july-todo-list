import { Suspense, useState } from 'react'
import { lazy } from 'react'

const Todo = lazy(() => import('./todo/Todo'));
const Header = lazy(() => import('./components/Header'));

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
import LearnUseCallback from './pages/LearnUseCallback'
import LearnUseMemo from './pages/LearnUseMemo'
import Parent from './pages/Parent'

import NewChild from './pages/NewChild'
import Component1 from './propsdrilling/Component1';
import Counter from './reduxCounter/Counter';


function App() {

  return (
    <>
      <Header />
      {/* <LearnUseCallback/> */}
      <Routes>
        {/* <Route path='/' element={<LearnUseCallback />} /> */}
        <Route path='/todo' element={<ProtectedRoute>
          <Suspense fallback={<h1>Loading....</h1>}>
            <Todo />
          </Suspense>
        </ProtectedRoute>} 
        />
        <Route path='/' element={<LearnUseMemo />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path='/users/:userid' element={<UserInfo />} />
        <Route path='/users/add-user' element={<AddUser />} />
        <Route path='/users/edit-user/:id' element={<EditUser />} />
        <Route path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} />
        <Route path='*' element={<Page404 />} />
      <Route path='/test-props-drilling' element={<Component1 />} />
      <Route path='/redux-counter' element={<Counter />} />
      </Routes>
      {/* <center>
        <h1>TODO APP</h1>
        <Todo />
      </center> */}
      {/* <Parent>
        <NewChild/>
      </Parent> */}
    </>
  )
}

export default App
