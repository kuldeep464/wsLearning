import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [allToDo, setAllToDo] = useState(JSON.parse(localStorage.getItem("TODOLIST")) ?? [])
  let handleToDo = (event) => {
    let userinput = event.target.userData.value
    let oldData = [...allToDo, userinput]
    setAllToDo(oldData)
    event.preventDefault()
    event.target.reset()

  }

  useEffect(() => {
      localStorage.setItem("TODOLIST" , JSON.stringify(allToDo))
  }, [allToDo])

  let delItems = (index)=>{
    let oldData = [...allToDo]
    oldData.splice(index,1)
    setAllToDo(oldData)
  }



  return (
    <>
      <h1 className='text-[30px] font-bold text-center py-5 bg-purple-400'>To-Do-List</h1>

      <form action="" className='max-w-[700px] mx-auto flex items-center' onSubmit={handleToDo}>
        <input type="text" className='border-[1px] border-black my-3 p-[2px_15px] grow rounded' name='userData' />
        <button className='border-[1px] border-black ml-5 p-[2px_15px] rounded bg-orange-400 text-white font-bold'>Save</button>
      </form>

      <div className='max-w-[700px] mx-auto'>
        <ul>
          {
            allToDo.length >= 1

              ?

              allToDo.map((items, index) => {
                return (
                  <li className='bg-purple-400 p-[5px_15px] relative font-medium'>
                      {index+1}   {items} <span className='text-[18px] absolute right-[10px] cursor-pointer' onClick={()=>delItems(index)}>&times;</span>
                  </li>
                )
              })
              :

              <li className='bg-purple-400 p-[5px_15px] relative font-medium'>
                No Data Available
              </li>
          }

        </ul>
      </div>
    </>
  )
}

export default App
