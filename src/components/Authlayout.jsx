import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protection({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status); // Assuming auth status is stored here

    useEffect(() => {
        if (authStatus === null || authStatus === undefined) {
            // Wait until authStatus is defined
            return;
        }
        if (authentication && !authStatus) {
            navigate("/login");
        } else if (!authentication && authStatus) {
            navigate("/");
        } else {
            setLoader(false);
        }
    }, [navigate, authentication, authStatus]);

    return loader ? <h1>Loading...</h1> : <>{children}</>;
}

