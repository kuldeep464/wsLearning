import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function SliderDetails() {
    let noPreviewImage = 'data:image/jpeg;base64,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'

    let [sliderFormValue, setSliderFormValue] = useState({
        sliderName: '',
        sliderHeading: '',
        sliderSubHeading: '',
        status: 1
    })
    let [sliderImage, setSliderImage] = useState(noPreviewImage)
    let apiBasePath = import.meta.env.VITE_APIBASEPATH

    let { id } = useParams()
    const sliderimage = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSliderImage(URL.createObjectURL(file));
        }
    };

    let navigate = useNavigate()

    let addSlider = () => {
        event.preventDefault();
        let formValue = new FormData(event.target)
        if (id == undefined) {
            axios.post(`${apiBasePath}admin/slider/add`, formValue)
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
                            navigate("/home/slider/slider-view")
                        }, 1500);
                    }
                    else {
                        Swal.fire({
                            title: "Oops!",
                            text: "Slider Already Exists",
                            icon: "error"
                        });
                    }
                })
        }
        else {
            axios.put(`${apiBasePath}admin/slider/update/${id}`, formValue)
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
                            navigate("/home/slider/slider-view")
                        }, 1500);

                    }
                    else {
                        Swal.fire({
                            title: "Oops!",
                            text: "Slider Name Already Exists",
                            icon: "error"
                        });
                    }
                })
        }
    }

    let sliderSetValueGetValue = (event) => {
        let inputName = event.target.name
        let inputValue = event.target.value
        let oldData = { ...sliderFormValue }
        oldData[inputName] = inputValue
        if (inputName == 'status') {
            oldData[inputName] = Number(inputValue)
        }
        setSliderFormValue(oldData)
    }

    useEffect(() => {
        if (id) {
            axios.get(`${apiBasePath}admin/slider/edit/${id}`)
                .then((res) => res.data)
                .then((finalRes) => {
                    setSliderFormValue({
                        sliderName: finalRes.data.sliderName,
                        sliderHeading: finalRes.data.sliderHeading,
                        sliderSubHeading: finalRes.data.sliderSubHeading,
                        status: finalRes.data.sliderStatus ? 1 : 0
                    })
                    setSliderImage(`${apiBasePath + finalRes.staticImagePath + finalRes.data.sliderImage}`)
                })

        }
        else {
            setSliderFormValue({
                sliderName: '',
                sliderHeading: '',
                sliderSubHeading: '',
                status: 1
            })
            setSliderImage(noPreviewImage)
        }
    }, [id])
    return (
        <div>
            <div className='py-3 px-4'>
                Home / Slider / <span className='text-blue-700 font-semibold'>Slider Details</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Add Slider
                    </div>
                    <div className='p-3'>
                        <form action="" onSubmit={addSlider}>
                            <div className='flex flex-col mb-4 gap-2'>
                                <label htmlFor="" className='font-semibold'>Slider Name</label>
                                <input type="text" name='sliderName' value={sliderFormValue.sliderName} onChange={sliderSetValueGetValue} className='border-[1px] border-gray-300 p-2 rounded-lg' placeholder=' Slider Name' />
                            </div>
                            <div className='flex flex-col mb-4 gap-2'>
                                <label htmlFor="" className='font-semibold'>Heading</label>
                                <input type="text" name='sliderHeading' value={sliderFormValue.sliderHeading} onChange={sliderSetValueGetValue} className='border-[1px] border-gray-300 p-2 rounded-lg' placeholder=' Heading' />
                            </div>
                            <div className='flex flex-col mb-4 gap-2'>
                                <label htmlFor="" className='font-semibold'>Sub Heading</label>
                                <input type="text" name='sliderSubHeading' value={sliderFormValue.sliderSubHeading} onChange={sliderSetValueGetValue} className='border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Sub Heading' />
                            </div>
                            <div className='py-5 grid items-center gap-6 grid-cols-2'>
                                <div className='py-5 flex flex-col gap-2'>
                                    <label htmlFor="" className='font-semibold'>Slider Image</label>
                                    <input type="file" name="sliderFileImage" onChange={sliderimage} className=" w-full border border-gray-200 shadow-sm rounded-lg text-sm  file:bg-gray-50 file:border-0 file:me-4  file:py-3 file:px-4 " multiple="" />
                                </div>
                                {sliderImage && (
                                    <img
                                        src={sliderImage}
                                        alt="Preview"
                                        className=" w-[100px] h-[100px] object-cover rounded-lg shadow-lg"
                                    />
                                )}
                            </div>


                            <div>
                                <p className='font-semibold mb-2' htmlFor="">Status :</p>
                                <div className='flex items-center gap-6'>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name='status' checked={sliderFormValue.status == 1} onChange={sliderSetValueGetValue} value='1' id='active' />
                                        <label htmlFor="active">Active</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" value='0' name='status' checked={sliderFormValue.status == 0} onChange={sliderSetValueGetValue} id='deactive' />
                                        <label htmlFor="deactive">Deactive</label>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-7'>
                                <button type='submit' className='p-2 bg-purple-600 px-5 text-white font-semibold rounded-md'>
                                    {id ? 'Update Slider' : 'Add Slider'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
