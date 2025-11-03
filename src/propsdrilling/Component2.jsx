import React, { useContext } from 'react'
import Component3 from './Component3'
import { ThemeContext } from './Component1';

const Component2 = ({setinput}) => {
    const obj = useContext(ThemeContext);
    console.log(obj);
    return (
        <div>
            <h1>Component2</h1>
            <h2>{obj?.obj?.name}</h2>
            <Component3 setinput={setinput}/>
            {/* from component 1 --{name} */}
        </div>
    )
}

export default Component2