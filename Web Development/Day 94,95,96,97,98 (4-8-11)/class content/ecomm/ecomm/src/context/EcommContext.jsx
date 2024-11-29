
import { createContext, useState } from "react"


 export const main_context=createContext()

export default function EcommContext({children}) {
    const [wishData,setWishData]=useState([])
    const [cartData,setCartData]=useState([])
  return (
    <main_context.Provider value={{wishData,setWishData,cartData,setCartData}} >
            {children}
    </main_context.Provider>
  )
}
