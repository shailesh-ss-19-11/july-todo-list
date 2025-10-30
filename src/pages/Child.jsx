import React from 'react'

const Child = React.memo((props) => {
    const { handleClick } = props
    console.log("child re render")
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
})

export default Child