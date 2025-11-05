import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeByValue, decrement, increment } from '../reduxSlices/CounterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counterReducer.count);

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const changeByVal = ()=>{
        dispatch(changeByValue(100))
    }

    return (
        <div className='text-center'>
            <h1 className=''>{count}</h1>
            <button className='btn btn-sm btn-primary mx-2' onClick={handleIncrement}>+</button>
            <button className='btn btn-sm btn-danger mx-2' onClick={handleDecrement}>-</button>
            <button className='btn btn-sm btn-danger mx-2' onClick={changeByVal}>ChangeByValue</button>
        </div>
    )
}

export default Counter