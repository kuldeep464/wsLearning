import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form_data/Form'
import Table from './Form_data/Table'

function App() {
  const [userData, setUserData] = useState( JSON.parse(localStorage.getItem("userdata")) ?? [])
  let userInfo = {userData,setUserData}

 

  return (
    <>
      <div className='grid grid-cols-[25%_auto] gap-[30px] max-w-[1400px] mx-auto py-6'>
        <Form userInfo={userInfo} />
        <Table userInfo={userInfo}  />
      </div>
    </>
  )
}

export default App
