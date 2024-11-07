import React, { useContext } from 'react'
import { Counter } from './Context/CounterContext'

export default function Header() {

  let {counterValue,setCounterValue}=useContext(Counter)

  
  return (
    <div>
      <h1> Header  {counterValue}  </h1>
    </div>
  )
}

{/* <span> {counterValue==0 ? "" : counterValue } </span> */}
