import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <div className='d-flex gap-4 bg-dark p-2'>
            <Link className='p-2' to="home">Home</Link>
            <Link className='p-2' to="about">About</Link>
            <Link className='p-2' to="todo">Task Manager</Link>
        </div>
    )
}

export default Header