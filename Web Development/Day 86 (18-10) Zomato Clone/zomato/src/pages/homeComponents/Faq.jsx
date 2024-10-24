import React, { useState } from 'react'
import { questions } from './Data/faqQuestions'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Faq() {
  let [currentId, setCurrentId] = useState(questions[0].id)
  return (
    <section className='py-8 p-5'>
      <div className=' max-w-[1100px] mx-auto'>
        <h1 className='text-[30px] font-semibold tracking-wide py-6'>Explore options near me</h1>

        <div>

          {
            questions.map((items, index) => {
              
              return (
                <div className='border-[1px] border-gray-400 rounded-[10px] p-4 mb-4 ' onClick={()=>setCurrentId(items.id===currentId ? !items.id : items.id)}>
                  <h2 className='text-[20px] rounded py-2 relative'  >{items.question}  <span className='absolute right-2 duration-500'> {items.id === currentId ? <IoIosArrowUp/>  : <IoIosArrowDown /> } </span></h2>
                  <p className= {`text-gray-600 ${items.id === currentId ? 'p-3' : 'max-h-0 overflow-y-hidden'} duration-300 `}>{items.answer}</p>
                </div>
              )
            })
          }


        </div>
      </div>
    </section>
  )
}
