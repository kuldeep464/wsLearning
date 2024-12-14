import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { LoginContext } from './MainContext'

export default function Auth() {
    let {userinfo,setUserInfo}=useContext(LoginContext)
    let navigate=useNavigate()
    useEffect(()=>{
        if(userinfo==null){
            navigate('/login')
        }
    },[userinfo])
  return (
    <div>
        <Outlet />
    </div>
  )
}
