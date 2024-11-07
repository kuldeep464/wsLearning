import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let Num1=useRef()
  let Num2=useRef()
  let Output=useRef()

  function sumNumbers(){
    let totalsum= Number(Num1.current.value)+ Number(Num2.current.value)
    Output.current.value=totalsum
  }

  return (
    <>
      Num1:-<input type="text" ref={Num1} /><br />
      Num2:-<input type="text" ref={Num2} /><br />
      <button onClick={sumNumbers}>Add</button><br />
      Output:-<input type="text" ref={Output} />
    </>
  )
}

export default App
