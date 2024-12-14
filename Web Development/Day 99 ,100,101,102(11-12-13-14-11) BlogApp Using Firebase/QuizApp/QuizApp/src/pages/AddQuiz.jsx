import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../FirebaseConfig';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function AddQuiz() {
    const db = getDatabase(app);

    let handleSave=(event)=>{
        event.preventDefault()
        let obj={
            'question':event.target.EnterQuestion.value,
            'option1':event.target.option1.value,
            'option2':event.target.option2.value,
            'option3': event.target.option3.value,
            'option4':event.target.option4.value,
            'correctAns':event.target.correctAnswer.value
        }

        set(ref(db, 'Quiz/' + new Date().getTime()),obj );

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Quiz submission successful",
            showConfirmButton: false,
            timer: 1500
          });

        event.target.reset()
        
    }


  return (
    <div>
        <div className='max-w-[500px] mx-auto border-black border-[1px] mt-10 py-3 rounded-lg'>
            <div className='text-center py-5 text-[30px] font-semibold'>Add Quiz</div>
            <form action="" className='mx-auto w-[80%]' onSubmit={handleSave}>
                <textarea name="EnterQuestion" id="" className='border-black border-[1px] w-[100%] p-2 h-[100px] mb-4' placeholder='Write Your Question...'></textarea>
                <input type="text" placeholder='option-1' className='border-black border-[1px] w-[100%] p-1 my-2' name='option1' />
                <input type="text" placeholder='option-2' className='border-black border-[1px] w-[100%] p-1 my-2' name='option2' />
                <input type="text" placeholder='option-3' className='border-black border-[1px] w-[100%] p-1 my-2' name='option3' />
                <input type="text" placeholder='option-4' className='border-black border-[1px] w-[100%] p-1 my-2' name='option4' />
                <input type="text" placeholder='correct answer' className='border-black border-[1px] w-[100%] p-1 my-2' name='correctAnswer' />
                <div>
                    <button  className=' w-[100%] p-2 my-2 bg-red-600 text-white font-semibold rounded-md'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
