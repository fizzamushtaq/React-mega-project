import React from 'react'
import { useDispatch } from 'react-redux'
import service from '../../appwrite/config'
import { logout } from '../../store/store'

function Logooutbtn() {


    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default Logooutbtn;
