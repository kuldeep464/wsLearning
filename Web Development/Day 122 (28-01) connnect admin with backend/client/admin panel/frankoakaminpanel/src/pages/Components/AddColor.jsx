import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddColor() {
    let [formDataValue, setFormDataValue] = useState({
        colorName: '',
        colorCode: '',
        status: 1
    })
    let navigate = useNavigate()
    let apiBasePath = import.meta.env.VITE_APIBASEPATH
    let { id } = useParams()
    let addColor = () => {
        event.preventDefault();
        let obj = {
            colorName: event.target.colorName.value,
            colorCode: event.target.colorCode.value,
            status: event.target.status.value
        }

        if (id == undefined) {
            axios.post(`${apiBasePath}admin/color/add`, obj)

                .then((res) => {
                    if (res.data.status) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: res.data.msg,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setTimeout(() => {
                            navigate("/home/color/view-color")
                        }, 1500);
                    }
                    else {
                        Swal.fire({
                            title: "Oops!",
                            text: "Color Name Already Exists",
                            icon: "error"
                        });
                    }
                })
        }
        else{
            axios.post(`${apiBasePath}admin/color/update/${id}`, obj)

            .then((res)=>res.data)
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
                        navigate("/home/color/view-color")
                    }, 1500);
                }
                else {
                    Swal.fire({
                        title: "Oops!",
                        text: "Color Name Already Exists",
                        icon: "error"
                    });
                }
            })
        }


    }

    let getValueSetValue = (event) => {
        let inputName = event.target.name
        let inputValue = event.target.value
        let oldData = { ...formDataValue }
        oldData[inputName] = inputValue
        if (inputName == 'status') {
            oldData[inputName] = Number(inputValue)
        }
        setFormDataValue(oldData)
    }

    useEffect(() => {
        if (id) {
            axios.get(`${apiBasePath}admin/color/edit/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    setFormDataValue({
                        colorName: finalRes.data.colorName,
                        colorCode: finalRes.data.colorCode,
                        status: finalRes.data.colorStatus ? 1 : 0
                    })
                })

        }
        else {
            setFormDataValue({
                colorName: '',
                colorCode: '',
                status: 1
            })
        }
    }, [id])


    return (
        <div>
            <div className='py-3 px-4'>
                Home / Color / <span className='text-blue-700 font-semibold'>Add Color</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Add Colors
                    </div>

                    <div className='p-3'>
                        <form action="" onSubmit={addColor}>
                            <div className='flex gap-3 flex-col'>
                                <label htmlFor="" className='font-semibold'>Color Name</label>
                                <input type="text" name='colorName' onChange={getValueSetValue} value={formDataValue.colorName} placeholder='Color Name' className='border-[1px] border-gray-300 rounded-[10px] p-2 w-full' />
                            </div>

                            <div className='flex flex-col gap-3 py-7'>
                                <label htmlFor="" className='font-semibold'>Color Picker</label>

                                <div>

                                    <input type="color" name='colorCode' onChange={getValueSetValue} value={formDataValue.colorCode} className='border-[1px] border-gray-300 rounded-[10px] p-1' />
                                </div>
                            </div>

                            <div>
                                <p className='font-semibold mb-2' htmlFor="">Status :</p>
                                <div className='flex items-center gap-6'>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name='status' onChange={getValueSetValue} checked={formDataValue.status == 1} value='1' id='active' />
                                        <label htmlFor="active">Active</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name='status' onChange={getValueSetValue} checked={formDataValue.status == 0} value='0' id='deactive' />
                                        <label htmlFor="deactive">Deactive</label>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-7'>
                                <button type='submit' className='p-2 bg-purple-600 px-5 text-white font-semibold rounded-md'>
                                    {id ? 'Update Color' : 'Add Color'}
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
