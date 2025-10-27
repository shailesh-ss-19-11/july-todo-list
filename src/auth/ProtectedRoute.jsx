import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
    const localData = JSON.parse(localStorage.getItem("userinfo"))
    return (
        !localData ? <Navigate to={"/login"} /> : children
    )
}

export default ProtectedRoute