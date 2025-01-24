"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home() {

  let [formData, setFormData] = useState(
    {
      Name: '',
      Email: '',
      Message: '',

    }
  )

  let [viewData, setViewData] = useState([])
  let [sendEnquiry, setSendEnquiry] = useState(false)


  let formSave = (event) => {
    event.preventDefault()
    if (formData._id === undefined) {
      setSendEnquiry(true)
      axios.post(`http://localhost:8100/web/home/form-data`, formData)
        .then((res) => {
          console.log(res.data)

          if (res.data.status === 0) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: res.data.msg,
              showConfirmButton: false,
              timer: 1500
            });
          }
          else {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Enquiry has been Sent",
              showConfirmButton: false,
              timer: 1500
            });
            setFormData(
              {
                Name: '',
                Email: '',
                Message: ''

              }
            )

          }

          viewDataFunction()
          setSendEnquiry(false)
        })

    }

    else {
      axios.post(`http://localhost:8100/web/home/form-data`, formData)
        .then((res) => {
          console.log(res.data)
          setFormData(
            {
              Name: '',
              Email: '',
              Message: ''

            }
          )
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Enquiry Has been Updated",
            showConfirmButton: false,
            timer: 1500
          });

          viewDataFunction()
        })
    }




  }

  let inputValues = (event) => {
    let inputName = event.target.name
    let inputValues = event.target.value
    let oldObj = { ...formData }
    oldObj[inputName] = inputValues
    setFormData(oldObj)

  }

  let viewDataFunction = () => {
    axios.get(`http://localhost:8100/web/home/view-data`)
      .then((res) => res.data)
      .then((finalRes) => {

        if (finalRes.status) {

          setViewData(finalRes.data)
        }
      })
  }

  const colors = ["bg-red-700", "bg-blue-700", "bg-green-700", "bg-yellow-700", "bg-purple-700"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    viewDataFunction()
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every 1 second

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="grid md:grid-cols-[40%_auto] lg:grid-cols-[30%_auto] gap-10">



      <form onSubmit={formSave} className=" rounded-lg m-5 bg-gray-300 shadow-xl p-3 mt-8">
        <div className="text-2xl font-semibold py-3 text-center text-violet-800 border-b-[0.5px] mb-3 border-violet-800">Enquire Now!</div>
        {/* <div>
          <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
          <input name="Name" className="shadow-lg w-full  text-gray-900 mt-2 p-3 rounded-lg focus:outline-violet-300 focus:shadow-outline"
            type="text" placeholder="" value={formData.Name} onChange={inputValues} required />
        </div> */}
        <div className="relative mt-8">
          <input
            value={formData.Name}
            onChange={inputValues}
            required
            name="Name"
            type="text"
            id="floatingInput"
            className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            placeholder=" " // Empty space ensures focus works
          />
          <label
            htmlFor="floatingInput"
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Your Name
          </label>
        </div>
        {/* <div className="mt-8 ">
          <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
          <input name="Email" className="w-full shadow-lg text-gray-900 mt-2 p-3 rounded-lg focus:outline-violet-300 focus:shadow-outline"
            type="text" value={formData.Email} onChange={inputValues} required />
        </div> */}
        <div className="relative mt-8">
          <input
            value={formData.Email}
            onChange={inputValues}
            required
            name="Email"
            type="email"
            id="floatingInput"
            className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            placeholder=" " // Empty space ensures focus works
          />
          <label
            htmlFor="floatingInput"
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Your Email
          </label>
        </div>
        {/* <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
          <textarea name="Message" value={formData.Message} onChange={inputValues} required
            className=" w-full h-32 shadow-lg text-gray-900 mt-2 p-3 rounded-lg focus:outline-violet-300 focus:shadow-outline" />
        </div> */}
        <div className="relative mt-8">
          <textarea
            value={formData.Message}
            onChange={inputValues}
            required
            name="Message"
            type="text"
            id="floatingInput"
            className="h-32 peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            placeholder=" " // Empty space ensures focus works
          />
          <label
            htmlFor="floatingInput"
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Your Message
          </label>
        </div>
        <div className="mt-8">
          {/* <button
            className=" hover:bg-violet-700 duration-500 uppercase text-sm font-bold tracking-wide bg-red-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">

            {formData._id == undefined ? "Send Enquiry" : "Update Enquiry"}


          </button> */}

          <button className={`${colors[colorIndex]} text-[18px] flex justify-center items-center gap-3 hover:scale-110 text-white px-6 py-3 rounded-md font-bold transition-all w-full duration-500`}>
            {formData._id == undefined ? "Send Enquiry" : "Update Enquiry"}
            {sendEnquiry &&

              <div role="status">
                <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            }

          </button>
        </div>
      </form>

      <div className="my-6 mx-3">
        <table className="w-full divide-y divide-gray-200 border-[0.1px]">
          <thead className="bg-gray-50 text-slate-800">
            <tr className="divide-x divide-gray-200">
              <th className="px-4 py-2">Sr.No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white text-slate-800">
            {viewData.length >= 1 ?

              viewData.map((items, index) => {
                return (
                  <TableBody key={index} items={items} index={index} viewDataFunction={viewDataFunction} formData={formData} setFormData={setFormData} />

                )

              })



              :

              <tr>
                <td rowSpan={5} className="px-4 py-2">
                  No Data Found...
                </td>
              </tr>

            }


          </tbody>
        </table>
      </div>


    </div>
  );
}


function TableBody({ items, index, viewDataFunction, formData, setFormData }) {

  let deleteRow = (delId) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8100/web/home/delete-data/${delId}`)
          .then((res) => res.data)
          .then((finalRes) => {
            viewDataFunction()
          })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

  let editRow = (editId) => {
    axios.get(`http://localhost:8100/web/home/edit/${editId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setFormData(finalRes.data)
        console.log(finalRes.data)
      })
  }

  // let shortMsg=items.Message

  return (
    <tr className="divide-x divide-gray-200">
      <td className="px-4 py-2">{index + 1}</td>
      <td className="px-4 py-2">{items.Name}</td>
      <td className="px-4 py-2">{items.Email}</td>
      <td className="px-4 py-2" title={items.Message}> {items.Message.slice(0, 10).concat("...")}  </td>
      <td className="px-4 py-2 flex gap-2 items-center">
        <button onClick={() => editRow(items._id)} className="text-green-500 cursor-pointer hover:underline">Edit</button>
        <span>/</span>
        <button className="text-red-500 cursor-pointer hover:underline" onClick={() => deleteRow(items._id)}>Delete</button>
      </td>
    </tr>
  )
}
