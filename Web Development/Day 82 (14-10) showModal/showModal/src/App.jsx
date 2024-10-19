import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [modalStatus, setmodalStatus] = useState(false)
  return (
    <>
      <button className='border-2 border-black py-1 px-4 rounded' onClick={()=>setmodalStatus(!modalStatus)}>{modalStatus ? 'Hide Modal' : 'Show Modal'}</button>
        <div className={`shadow-[0px_0px_10px_2px_#ccc] w-[600px] duration-700 absolute ${modalStatus ? 'top-[50%]' : 'top-[-1000px]'} left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
          <h1 className='text-[30px] relative'>Enquire Now! <span className='fixed right-0 cursor-pointer' onClick={()=>setmodalStatus(false)}>&times;</span></h1>
        </div>
    </>
  )
}

export default App
