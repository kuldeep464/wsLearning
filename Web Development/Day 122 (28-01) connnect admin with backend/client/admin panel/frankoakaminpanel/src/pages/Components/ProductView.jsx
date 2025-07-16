import React, { useEffect, useState } from 'react'
import { ViewCategoryModal } from '../../Modals/ViewCategoryModal'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function ProductItems() {
    const [openModal, setOpenModal] = useState(false);
    let ModalOpen = { openModal, setOpenModal }
    let apiBasePath = import.meta.env.VITE_APIBASEPATH
    let [imageStaticPath, setImageStaticPath] = useState(null)
    let [galleryImageStaticPath, setgalleryImageStaticPath] = useState([])
    let [productData, setProductData] = useState([])
    let noImageFound = 'data:image/png;base64,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'

    function showData() {
        axios.get(`${apiBasePath}admin/product/view`)
            .then((res) => res.data)
            .then((finalRes) => {
                setProductData(finalRes.data)
                setImageStaticPath(finalRes.staticImagePath)
                setgalleryImageStaticPath(finalRes.staticImagePath)
            })
    }

    useEffect(() => {

        showData()
    }, [])


    function singleDelete(id) {
        axios.delete(`${apiBasePath}admin/product/singleDelete/${id}`)
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

    let [allIds, setAllIds] = useState([])


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
            axios.post(`${apiBasePath}admin/product/multiDelete`, obj)
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

    return (
        <div>

            <div className='py-3 px-4'>
                Home / Product / <span className='text-blue-700 font-semibold'>Product Items</span>
            </div> <hr />

            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Product Items
                    </div>
                    <table className='w-[100%]'>
                        <thead className='w-[100%]'>
                            <tr className='font-semibold text-gray-700 text-[15px]'>
                                <th className='py-2 text-start ps-5'>
                                    <button onClick={multiDelete} className={`${(allIds.length > 0) && 'bg-red-500 text-white p-1 rounded-lg text-[14px]'}`}>DELETE</button>
                                </th>
                                <th className='py-2 text-start ps-5'>S.NO.</th>
                                <th className='py-2 text-start ps-5'>PRODUCT NAME</th>
                                <th className='py-2 text-start ps-5'>DESCRIPTION</th>
                                <th className='py-2 text-start ps-5'>SHORT DESCRIPTION</th>
                                <th className='py-2 text-start ps-5'>THUMBNAILS</th>
                                <th className='py-2 text-start ps-5'>ACTION</th>
                                <th className='py-2 text-start ps-5'>STATUS</th>
                                <th className='py-2 text-start ps-5'>FEATURED</th>
                            </tr>
                        </thead>
                        <tbody>

                            {productData.length > 0 ?
                                productData.map((items, index) => {
                                    return (
                                        <tr className='border-b-gray-300  border-[1px]' key={index}>

                                            <ViewCategoryModal ModalFunction={ModalOpen} items={items} imageStaticPath={imageStaticPath} />


                                            <td className='py-2 text-start ps-5'>
                                                <input onChange={getMultiDelete} value={items._id} type="checkbox" className='w-4 h-4' name='deletecheck' />
                                            </td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{index + 1}</td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{items.productName ? items.productName : '-'}</td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>
                                                <p>{items.productDescription ? items.productDescription : '-'}</p>
                                                <button className='text-blue-500 font-semibold' onClick={() => setOpenModal(true)}>Read More</button>
                                            </td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>
                                                <p>{items.productShortDescription ? items.productShortDescription : '-'}</p>
                                                <button className='text-blue-500 font-semibold' onClick={() => setOpenModal(true)}>Read More</button>
                                            </td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>
                                                <img src={apiBasePath + imageStaticPath.productImagePath + items.productImage} className='w-[70px] h-[70px] rounded-lg' alt="" />
                                            </td>

                                            <td className='py-2 text-start ps-5 flex pt-7 items-center gap-2'>
                                                <button onClick={() => singleDelete(items._id)}>
                                                    <svg fill="red" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path></svg>
                                                </button>
                                                <span className='text-gray-500'> |</span>
                                                <Link to={`/home/product/product-details/${items._id}`}>
                                                    <button>
                                                        <svg fill="gold" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"></path></svg>
                                                    </button>
                                                </Link>
                                            </td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{items.productStatus ? "Active" : "Deactive"}</td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{items.featuredProductCheckBox=='1' ? 'True' : 'False'}</td>

                                        </tr>
                                    )
                                })


                                :

                                <tr className='border-b-gray-300  border-[1px]'>
                                    <td className='py-2 text-start ps-5' colSpan={8}> No Data Found </td>
                                </tr>

                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
