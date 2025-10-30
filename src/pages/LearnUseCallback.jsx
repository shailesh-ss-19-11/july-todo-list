import React, { useCallback, useState } from 'react'
import Child from './Child';

const LearnUseCallback = () => {
    const [count, setcount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("child component button clicked")
    },[])

    return (
        <div className='text-center'>
            <h1>Count : {count}</h1>
            <button className='btn btn-sm btn-secondary' onClick={() => setcount(count + 1)}>Counter</button>
            <Child handleClick={handleClick} />
        </div>
    )
}

export default LearnUseCallback