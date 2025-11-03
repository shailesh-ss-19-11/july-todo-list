import React, { createContext, useState } from 'react'
import Component2 from './Component2'



export const ThemeContext = createContext(null);


const Component1 = () => {

    const [input, setinput] = useState("shravan");

    const obj = {
        name: "shailesh",
        age: 34
    }

    function changeInputValue(inputname) {

    }

    return (
        <div>
            <h1>Component1</h1>
            <h2>{input}</h2>
            <ThemeContext value={{ obj, changeInputValue }}>
                <Component2 setinput={setinput} />
            </ThemeContext>
        </div>
    )
}

export default Component1