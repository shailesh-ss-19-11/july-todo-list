import React, { useState } from 'react'
import ChildReduxComponent1 from './ChildReduxComponent1'
import ChildReduxComponent2 from './ChildReduxComponent2'

const ParentReduxComponent = () => {

    return (
        <div>
            <h1 className='text-center'>ParentReduxComponent</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='w-100 border'>
                    <ChildReduxComponent1 />
                </div>
                <div className='w-100 border'>
                    <ChildReduxComponent2 />
                </div>
            </div>
        </div>
    )
}

export default ParentReduxComponent