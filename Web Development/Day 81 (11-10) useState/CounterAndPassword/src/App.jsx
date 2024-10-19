import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(1)
  let [passwordStatus, setpasswordStatus] = useState(false)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
      <br/>
      <input type={passwordStatus ? 'text' : 'password'} />
      <button onClick={()=>setpasswordStatus(!passwordStatus)}>{passwordStatus ? 'hide' : 'show'}</button>
    </>
  )
}

export default App
