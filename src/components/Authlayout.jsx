import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protection({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)  // Assuming auth status is stored here

    useEffect(() => {
        // This condition navigates the user based on the authentication status
        if (authentication && !authStatus) {
            navigate("/login")
        } else if (!authentication && authStatus) {
            navigate("/")
        }
        setLoader(false)
    }, [navigate, authentication, authStatus])

    return loader ? <h1>Loading...</h1> : <>{children}</>;
}
