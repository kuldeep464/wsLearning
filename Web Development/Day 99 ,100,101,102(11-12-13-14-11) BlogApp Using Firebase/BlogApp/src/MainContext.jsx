import React, { createContext, useEffect, useState } from 'react'

export let LoginContext=createContext()

export default function MainContext({children}) {
  let [userinfo,setUserInfo]=useState(JSON.parse(localStorage.getItem('userData')) ?? null)

  useEffect(()=>{
    localStorage.setItem('userData',JSON.stringify(userinfo))
  },[userinfo])

  return (
    <LoginContext.Provider value={{userinfo,setUserInfo}}>
      {children}
    </LoginContext.Provider>
  )
}
