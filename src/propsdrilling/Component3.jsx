import React, { useContext } from 'react'
import { ThemeContext } from './Component1';

const Component3 = ({ setinput }) => {
    const obj = useContext(ThemeContext);
    return (
        <div>
            Component3 age
            <h2>{obj?.obj?.age}</h2>
            <button onClick={() => setinput("gurudas")}>ChangeName</button>
        </div>
    )
}

export default Component3

// props drilling is technique that props are sending to so many child components in tree

// context api
// redux tollkit 