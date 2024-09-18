import React from 'react'
import { container, logooutbtn,Logo } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() { 
    const authStatus = useSelector((state)=> state.auth.status)
    const navigate = useNavigate()
    const navitems = [
        {
            name: "home",
            slug: "/",
            active: true
        },{
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        }, 
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    return (
   <div>
    <h1>he is nice </h1>
   </div>
    )
}

export default Header
