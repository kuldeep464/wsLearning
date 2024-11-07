import  {  createContext, useState } from 'react'


 export const Counter=createContext()

export default function CounterContext({children}) {

    const [counterValue,setCounterValue ]=useState(null)

  return (
   <>
    <Counter.Provider  value={{counterValue,setCounterValue}} >
            {children}
    </Counter.Provider>
   </>
  )
}
