import React from 'react'

const NewChild = () => {
    console.log("re render child component")
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
    return (
        <div>NewChild</div>
    )
}

export default NewChild