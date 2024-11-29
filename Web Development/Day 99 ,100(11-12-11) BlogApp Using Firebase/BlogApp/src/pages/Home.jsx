import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../FirebaseConfig';

export default function Home() {
    let [blogList,setBlogList]=useState([])
    const db = getDatabase(app);
    let getBlogs=()=>{
       const blogData=ref(db,'BlogDAta/')
       onValue(blogData,(data)=>{
        let allBlogsObj=data.val()
        let blogs=[]
         for(let blogKey in allBlogsObj){
            blogs.push(allBlogsObj[blogKey])
         }
         setBlogList(blogs)
       })

    }

    useEffect(()=>{
        getBlogs()
    },[])


    return (
        <div>
            <div className="w-full my-16   mx-auto  md:max-w-[1400px]">
                <div className="grid py-10 sm:ml-6 px-6 sm:px-4 md:grid-cols-2 lg:grid-cols-3">

                    {
                        blogList.length>=1 ?
                        blogList.map((items,index)=>{
                            return(
                                <div className="md:max-w-[380px] text-sm  text-wrap rounded-sm text-justify min-h-[300px] mb-10 flex justify-around flex-col  p-4 shadow-lg ">
                                <h1 className="text-xl capitalize  font-bold">{items.heading} </h1>
                                <p>{items.description}</p>
                                <h1>{items.blgDate}</h1>
                            </div> 
                            )
                        })
                        :
                        'No Data Found'
                    }

                </div>
                <div className="flex justify-center items-center"><button className="transform btn-color px-10 font-extrabold rounded-lg text-white py-2">Load more</button></div>
            </div>
        </div>
    )
}
