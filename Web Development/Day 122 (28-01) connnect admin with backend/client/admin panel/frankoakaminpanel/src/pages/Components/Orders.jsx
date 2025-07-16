import React, { useEffect, useState } from 'react'
import ViewOrdersModal from '../../Modals/ViewOrdersModal';
import axios from 'axios';

export default function Orders() {
    const [openModal, setOpenModal] = useState(false);
    let [order, setOrders] = useState([])
    let [modelData,setModelData]=useState('')
    let [imageStaticPath, setImageStaticPath] = useState(null)
    let apiBasePath = import.meta.env.VITE_APIBASEPATH

    let viewOrder = () => {
        axios.get(`${apiBasePath}admin/order/view-order`)
            .then((res) => res.data)
            .then((finalRes) => {
                setOrders(finalRes.data)
                // console.log(finalRes.data)
                setImageStaticPath(finalRes.staticPath)
            })
    }

    useEffect(() => {
        viewOrder()
    }, [])

    let viewDetails=(item)=>{
        setModelData(item)
        setOpenModal(true)
    }
    return (
        <div>
            
            <div className='py-3 px-4'>
                Home /  <span className='text-blue-700 font-semibold'>Orders</span>
            </div> <hr />
            <div className='p-3'>
                <div className='border-[1px] border-gray-300 rounded-[10px]'>
                    <div className='p-2 text-[20px] font-semibold bg-gray-200 rounded-[10px_10px_0px_0px] border-[1px] border-b-gray-400'>
                        Orders
                    </div>
                    <table className='w-[100%]'>
                        <thead className='w-[100%]'>
                            <tr className='font-semibold text-gray-700 text-[15px]'>
                                <th className='py-2 text-start ps-5'>
                                    <button className='bg-violet-600 text-white py-1 px-2 rounded'>
                                        Delete
                                    </button>
                                </th>
                                <th className='py-2 text-start ps-5'>S. No.</th>
                                <th className='py-2 text-start ps-5'>ORDER ID</th>
                                <th className='py-2 text-start ps-5 row-span-2'>NAME</th>
                                <th className='py-2 text-start ps-5'>QUANTITY</th>
                                <th className='py-2 text-start ps-5'>PRICE</th>
                                <th className='py-2 text-start ps-5'>DATE</th>
                                <th className='py-2 text-start ps-5'>STATUS</th>
                                <th className='py-2 text-start ps-5'>VIEW</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.length > 0 ?
                                order.map((item, index) => {
                                    return (
                                        <tr key={index} className='border-b-gray-300  border-[1px]' >
                                            <ViewOrdersModal order={modelData} imageStaticPath={imageStaticPath} openModal={openModal} setOpenModal={setOpenModal} />
                                            <td className='py-2  ps-5'>
                                                <input type="checkbox" className='w-4 h-4 ms-4' name='orders' />
                                            </td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{index+1}</td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{item._id}</td>

                                            <td className='py-2 text-start ps-5 text-gray-500'>{item.shippingDetails.orderFirstName}</td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{item.orderQty}</td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>Rs {item.orderAmount}</td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{item.createdAt.split("T")[0]}</td>
                                            <td className='py-2 text-start ps-5 text-gray-500'>{item.orderStatus}...</td>
                                            <td className='py-2 text-start ps-5'>
                                                <button className='py-1 px-3 border-[0.5px] rounded-xl hover:bg-violet-600 hover:text-white duration-300' onClick={() => viewDetails(item)}>View</button>
                                            </td>
                                        </tr>
                                    )
                                })


                                :
                                "No Orders Yet...!"
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    )
}
