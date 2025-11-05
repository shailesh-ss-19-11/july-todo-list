import React, { useMemo, useState } from 'react'

const LearnUseMemo = () => {
    const [text, settext] = useState("")
    const [count, setCount] = useState(0)


    const total = useMemo(() => {
        // console.log("calculation running");
        let total = 0;
        for (let i = 0; i < 100000; i++) {
            total += i;
        }
        return total + count;
    },[count])


    // console.log(total);

    return (
        <div>
            <h1>usememo example</h1>
            <h4>Count : {count}</h4>
            <h4>Calculated Value : {total}</h4>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <br />
            <input type="text" value={text} onChange={(e) => settext(e.target.value)} />
        </div>
    )
}

export default LearnUseMemo