import React from 'react'

export default function Form({userInfo}) {
    let {userData,setUserData} = userInfo

    
    let handleForm=(event)=>{
        let formevent=event.target
        let userObj={
            uname:formevent.uname.value,
            uemail:formevent.uemail.value,
            uphone:formevent.uphone.value,
            upassword:formevent.upassword.value
        }

        let olddata = [...userData , userObj]
        setUserData(olddata)
        event.preventDefault();
        formevent.reset()

    }
    return (
        <div className='p-3 shadow-xl'>
            <h1 className='text-[30px] font-semibold'>Create Your Account</h1>
            <form action="" className='py-4' onSubmit={handleForm}>
                <div className='py-3'>
                    <label htmlFor="">Name</label> <br />
                    <input type="text" name='uname' className='border-[1px] border-gray-600 w-[100%] p-1' required />
                </div>

                <div className='py-3'>
                    <label htmlFor="">Email</label> <br />
                    <input type="email" name='uemail' className='border-[1px] border-gray-600 w-[100%] p-1' required />
                </div>

                <div className='py-3'>
                    <label htmlFor="">Phone</label> <br />
                    <input type="text" name='uphone' className='border-[1px] border-gray-600 w-[100%] p-1' required />
                </div>

                <div className='py-3'>
                    <label htmlFor="">Password</label> <br />
                    <input type="password" name='upassword' className='border-[1px] border-gray-600 w-[100%] p-1' required />
                </div>

                <div>
                    <button className='bg-yellow-500 font-semibold p-2 w-[100%] my-4 rounded-[5px]'>Sign Up</button>
                </div>

            </form>
        </div>
    )
}
