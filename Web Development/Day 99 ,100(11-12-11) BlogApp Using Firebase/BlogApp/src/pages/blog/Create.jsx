import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../../FirebaseConfig';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const database = getDatabase(app);

export default function Create() {
    let navigate=useNavigate()

    let submitForm = (event)=>{
        event.preventDefault();
        let heading=event.target.heading.value
        let description=event.target.description.value
        let blogID=Date.now()
        let currentDAte=new Date()
        let obj={
            heading,
            description,
            blgDate:currentDAte.getDate()+'/'+(currentDAte.getMonth()+1)+'/'+currentDAte.getFullYear()
        }

        set(ref(database,'BlogDAta/'+blogID),obj)

        event.target.reset()

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your blog    has been saved",
            showConfirmButton: false,
            timer: 1500
          });

        setTimeout(() => {
            navigate('/')
        }, 1500);

        
    }


    return (
        <div>
            <div className="w-full  text-2xl mx-auto px-2  md:max-w-[1400px] ">
                <div className="lg:mx-auto rounded-lg p-4 px-2  my-8 shadow-2xl border-[0.1px] border-gray-200 border-solid" >
                    <form onSubmit={submitForm}>
                        <label htmlFor="heading" className="block my-4 md:text-lg text-sm font-medium text-gray-900">Heading</label><input type="text" name="heading" rows="4" className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." /><label htmlFor="desciption" className="block my-4 text-sm md:text-lg font-medium text-gray-900">Desciption</label>
                        <textarea name="description" className="block min-h-[300px] mt-4 p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        <div className="text-center"><button type="submit" className="transform  w-[40%] rounded-md mt-10  bg-[black] text-white py-2 font-bold duration-300 hover:bg-[#4B0082] ">Add Blog</button></div>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    )
}
