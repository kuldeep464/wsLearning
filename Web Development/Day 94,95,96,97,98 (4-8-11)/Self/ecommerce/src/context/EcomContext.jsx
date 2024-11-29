import React, { createContext, useEffect, useState } from 'react'


export const main_context=createContext()

export default function EcomContext({children}) {
    let [wishData,setWishData]=useState(JSON.parse(localStorage.getItem("wishStore")) ?? [])
    let [cartData,setCartData]=useState(JSON.parse(localStorage.getItem("cartStore")) ?? [])

    useEffect(()=>{
      localStorage.setItem("wishStore", JSON.stringify(wishData))
    },[wishData])

    useEffect(()=>{
      localStorage.setItem("cartStore",JSON.stringify(cartData))
    },[cartData])

  return (
    <main_context.Provider value={{wishData,setWishData,cartData,setCartData}}>
        {children}
    </main_context.Provider>
  )
}
