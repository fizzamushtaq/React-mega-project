import React from 'react'
import { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protection({childern, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader ] = useState(true)
    const authStatus = useSelector(state => state.authStatus)

    useEffect(()=> {
        // this condition use to navigate the user to login when authentication become true : complex method/ logic 
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
    }, [ navigate, authentication, authStatus])
      
    // easy methid for understand the logic:

    // if (authStatus = true) {
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
        
    // }
    return loader ? <h1>loading...</h1> : <>{childern}</>
}


