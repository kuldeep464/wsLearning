import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function ViewCategory() {
    const [openModal, setOpenModal] = useState(false);
    let ModalOpen = { openModal, setOpenModal }
    let apiBasePath = import.meta.env.VITE_APIBASEPATH
    let [categoryData, setCategoryData] = useState([])
    let [allIds, setAllIds] = useState([])
    let [imageStaticPath, setImageStaticPath] = useState('')

    function showData() {
        axios.get(`${apiBasePath}admin/subCategory/view`)
            .then((res) => res.data)
            .then((finalRes) => {
                setCategoryData(finalRes.data)
                setImageStaticPath(finalRes.staticImagePath)
            })
    }

    function singleDelete(id) {
        axios.delete(`${apiBasePath}admin/subCategory/singleDelete/${id}`)
            .then((res) => res.data)
            .then((finalRes) => {
                Swal.fire({
                    title: "Good job!",
                    text: finalRes.msg,
                    icon: "success"
                });
                showData()
            })
    }

    function getMultiDelete(event) {
        if (event.target.checked) {
            if (!allIds.includes(event.target.value)) {
                setAllIds([...allIds, event.target.value])
            }
        }
        else {
            let filter = allIds.filter((id) => id != event.target.value)
            setAllIds(filter)
        }
    }

    function multiDelete() {
        if (allIds.length > 0) {
            let obj = {
                allIds
            }
            axios.post(`${apiBasePath}admin/subCategory/multiDelete`, obj)
                .then((res) => res.data)
                .then((finalRes) => {
                    Swal.fire({
                        title: "Good job!",
                        text: finalRes.msg,
                        icon: "success"
                    });
                    showData()
                })

        }
    }

    useEffect(() => {
        showData()
    }, [])
    return (
        <div>

            <div className='py-3 px-4'>
                Home / Color / <span className='text-blue-700 font-semibold'>View Sub Category</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        View Sub Category
                    </div>
                    <table className='w-[100%]'>
                        <thead className='w-[100%]'>
                            <tr className='font-semibold text-gray-700 text-[15px]'>
                                <th className='py-2 text-start ps-5'>
                                    <button onClick={multiDelete} className={`${(allIds.length > 0) && 'bg-red-500 text-white p-1 rounded-lg text-[14px]'}`}>DELETE</button>
                                </th>
                                <th className='py-2 text-start ps-5'>S.NO.</th>
                                <th className='py-2 text-start ps-5'>CATEGORY NAME</th>
                                <th className='py-2 text-start ps-5'>PARENT CATEGORY NAME</th>
                                <th className='py-2 text-start ps-5'>IMAGE</th>
                                <th className='py-2 text-start ps-5'>DESCRIPTION</th>
                                <th className='py-2 text-start ps-5'>ACTION</th>
                                <th className='py-2 text-start ps-5'>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>

                            {categoryData.length > 0 ?
                                categoryData.map((items, index) => {
                                    // console.log(items)
                                    return (
                                        <tr className='border-b-gray-300  border-[1px]' key={index}>
                                            <td className='py-2 text-start ps-5'>
                                                <input type="checkbox" onChange={getMultiDelete} className='w-4 h-4' name='deletecheck' value={items._id} />
                                            </td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{index + 1}</td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{items.subCategoryName}</td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>
                                                {items.parentCategoryName ? items.parentCategoryName.catName : '-' }
                                                
                                                </td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>
                                                <img src={`${apiBasePath + imageStaticPath + items.subCategoryImage}`} className='w-[70px] h-[70px] rounded-lg' alt="" />
                                            </td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>
                                                <p title={items.subCategoryDescription}>{items.subCategoryDescription}</p>
                                            </td>
                                            <td className='py-2 text-start ps-5 flex pt-7 items-center gap-2'>
                                                <button onClick={() => singleDelete(items._id)}>
                                                    <svg fill="red" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path></svg>
                                                </button>
                                                <span className='text-gray-500'> |</span>
                                                <Link to={`/home/sub-category/add-sub-category/${items._id}`}>
                                                    <button>
                                                        <svg fill="gold" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"></path></svg>
                                                    </button>
                                                </Link>
                                            </td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{items.status ? 'Active' : 'Deactive'}</td>
                                        </tr>
                                    )
                                })
                                :
                                <tr className='border-b-gray-300  border-[1px]'>
                                    <td colSpan={8} className='py-2 text-start ps-5'>No Data Found</td>
                                </tr>

                            }




                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
