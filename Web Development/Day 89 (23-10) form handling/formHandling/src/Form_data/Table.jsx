import React, { useEffect } from 'react'

export default function Table({ userInfo }) {
    let { userData, setUserData } = userInfo

    useEffect(()=>{
        localStorage.setItem("userdata" , JSON.stringify(userData))
    }, [userData])

    function DeleteData(currentIndex){
        let filterData= userData.filter((v,i)=> i!==currentIndex)
        setUserData(filterData)
    } 

    let userlist = userData.map((items, index) => {
        console.log(items)
        return (
            <tr className=''>
                <td className='p-2'>{index + 1}</td>
                <td className='p-2'>{items.uname}</td>
                <td className='p-2'>{items.uemail}</td>
                <td className='p-2'>{items.uphone}</td>
                <td className='p-2'>{items.upassword}</td>
                <td className='p-2'><button className='border-[1px] border-gray-400 px-2 rounded' onClick={()=>DeleteData(index)}>Delete</button></td>
            </tr>
        )
    })

    

    return (
        <div>
            <h2 className='text-[25px] py-3 font-bold'>User List</h2>
            <table className='w-[100%] text-left border-[1px]'>
                <thead className='bg-gray-200'>
                    <tr className=''>
                        <th className='p-2'>SR NO.</th>
                        <th className='p-2'>NAME</th>
                        <th className='p-2'>EMAIL</th>
                        <th className='p-2'>PHONE</th>
                        <th className='p-2'>PASSWORD</th>
                        <th className='p-2'>DELETE</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userData.length >= 1 ?
                             userlist
                            :
                            <tr className=''>
                                <td className='p-2' colSpan={6}>No Data Found ..</td>
                                
                            </tr>
                    }




                </tbody>
            </table>
        </div>
    )
}
