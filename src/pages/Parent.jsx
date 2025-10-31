import React, { useRef, useState } from 'react'
import Child from './Child'
import NewChild from './NewChild'

const Parent = (props) => {
    const { children } = props;
    const [input, setinput] = useState("");
    const [firstName, setfirstName] = useState("")
    const newInput = useRef(null);
    console.log(newInput?.current?.value);
    // ref //////////reference 
    const handleChange = () => {
        console.log(newInput)
        setfirstName(newInput.current.value)
    }


    return (
        <div>
            <h1>ParentComponent</h1>
            <input type="text" onChange={(e) => setinput(e.target.value)} />
            <br />
            <br />
            <input type="text" ref={newInput} onChange={handleChange} />

            {/* {firstName} */}
            {/* {children} */}
            <NewChild/>
        </div>
    )
}

export default Parent