import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router'

const Header = () => {
    const navigate = useNavigate();
    const localdata = JSON.parse(localStorage.getItem("userinfo"))
    const count = useSelector((state) => state.counterReducer.count);
    return (
        <div className='d-flex justify-content-between bg-dark p-2'>
            <div className='d-flex gap-3'>
                <Link className='p-2' to="/home">Home</Link>
                <Link className='p-2' to="/about">About</Link>
                <Link className='p-2' to="/todo">Task Manager</Link>
                <Link className='p-2' to="/users">Users</Link>
            </div>
            <div>
                <h1 className='text-light'>Count : {count}</h1>
                {!localdata ? <><Link to="/login" className='btn btn-sm btn-primary mx-1'>Login</Link>
                    <Link to="/signup" className='btn btn-sm btn-primary mx-1'>SignUp</Link></> :
                    <button className='btn btn-sm btn-primary mx-1' onClick={() => { navigate("/login"); localStorage.clear() }}>Logout</button>
                }
            </div>
        </div>
    )
}

export default Header