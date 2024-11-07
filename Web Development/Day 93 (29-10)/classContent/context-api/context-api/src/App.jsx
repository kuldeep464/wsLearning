
import { useContext } from 'react'
import './App.css'
import Header from './Header'
import { Counter } from './Context/CounterContext'

function App() {
  
let {counterValue,setCounterValue }=useContext(Counter)

  let decrement=()=>{

      if(counterValue>1){
        setCounterValue(counterValue-1)
      }
      else{
        setCounterValue('')
      }
   
  }

  return (
    <>
    <Header/>
       

      <button onClick={decrement} > Count - </button>
        my Product
      <button onClick={()=>setCounterValue(counterValue+1)} > Count + </button>
    </>
  )
}

export default App
