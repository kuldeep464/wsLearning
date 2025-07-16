import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function SizeDetails() {
    let [sizeFormValue, setSizeFormValue] = useState({
        sizeName: '',
        status: 1
    })
    let apiBasePath = import.meta.env.VITE_APIBASEPATH

    let navigate = useNavigate()
    let { id } = useParams()
    let addSize = () => {
        event.preventDefault();
        let obj = {
            sizeName: event.target.sizeName.value,
            status: event.target.status.value
        }

        if (id == undefined) {
            axios.post(`${apiBasePath}admin/size/add`, obj)

                .then((res) => {
                    console.log(res.data)
                    if (res.data.status) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: res.data.msg,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(() => {
                            navigate("/home/size/view-size")
                        }, 1500);
                    }
                    else {
                        Swal.fire({
                            title: "Oops!",
                            text: "Size Name Already Exists",
                            icon: "error"
                        });
                    }
                })
        }
        else {
            axios.put(`${apiBasePath}admin/size/update/${id}`, obj)

                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: finalRes.msg,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(() => {
                            navigate("/home/size/view-size")
                        }, 1500);
                    }
                    else {
                        Swal.fire({
                            title: "Oops!",
                            text: "Size Name Already Exists",
                            icon: "error"
                        });
                    }
                })
        }

    }
    let sizegetValueSetvalue = (event) => {
        let inputName = event.target.name
        let inputValue = event.target.value
        let oldData = { ...sizeFormValue }
        oldData[inputName] = inputValue
        if (inputName == 'status') {
            oldData[inputName] = Number(inputValue)
        }
        setSizeFormValue(oldData)
    }
    useEffect(() => {
        if (id) {
            axios.get(`${apiBasePath}admin/size/edit/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    setSizeFormValue({
                        sizeName: finalRes.data.sizeName,
                        status: finalRes.data.sizeStatus ? 1 : 0
                    })
                })

        }
        else {
            setSizeFormValue({
                sizeName: '',
                status: 1
            })
        }
    }, [id])
    return (
        <div>
            <div className='py-3 px-4'>
                Home / Size / <span className='text-blue-700 font-semibold'>Add size</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className=' p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Add Size
                    </div>

                    <div className='p-3'>
                        <form action="" onSubmit={addSize}>
                            <div className='flex flex-col gap-2 mb-5'>
                                <label htmlFor="" className='font-semibold'>Size Name</label>
                                <input type="text" onChange={sizegetValueSetvalue} value={sizeFormValue.sizeName} name='sizeName' placeholder='Enter Size' className=' p-2 rounded-[10px] border-[1px] border-gray-300 w-full placeholder:capitalize' />
                            </div>
                            <div>
                                <h3 className='font-semibold pb-2'>Status :</h3>
                                <div className='flex items-center gap-5'>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" id='Active' onChange={sizegetValueSetvalue} value='1' checked={sizeFormValue.status == 1} name='status' />
                                        <label htmlFor="Active">Active</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" id='DeActive' onChange={sizegetValueSetvalue} value='0' checked={sizeFormValue.status == 0} name='status' />
                                        <label htmlFor="DeActive">Deactive</label>
                                    </div>
                                </div>
                            </div>
                            <div className='py-5'>
                                <button type='submit' className='p-2 text-white px-3 font-semibold rounded-md bg-purple-700'>
                                    {id ? 'Update Size' : 'Add Size'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
