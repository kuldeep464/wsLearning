
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function ViewCategoryModal({ ModalFunction }) {

  let { openModal, setOpenModal } = ModalFunction


  return (
    <>

      <Modal show={openModal} className="" onClose={() => setOpenModal(false)}>
        <Modal.Header className=''>Product Image's & Price</Modal.Header>
        <Modal.Body className="h-[500px]">
          <div className="flex gap-5 justify-between">
            <div className="w-[20%] p-3 border-[1px] border-gray-300 rounded-lg">
              <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/902af913-69be-4024-b22c-cd573b7dd13b1613028902744-Roadster-Men-Tshirts-9521613028900435-1.jpg" className="w-[500px]" alt="" />
            </div>
            <div className="w-[50%] p-3 border-[1px] border-gray-300 rounded-lg grid grid-cols-3 gap-3">
              <div>
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/5d8249b2-cbfa-42a3-9b8a-9406fcb8af0c1613028902710-Roadster-Men-Tshirts-9521613028900435-3.jpg" className="w-[150px]" alt="" />
              </div>
              <div>
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/bf9e30b3-5b8e-4cf1-811b-81ea64d45ed81613028902692-Roadster-Men-Tshirts-9521613028900435-4.jpg" className="w-[150px]" alt="" />
              </div>
              <div>
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/77451543-64cb-4294-8f82-24ac1d78dcf01613028902666-Roadster-Men-Tshirts-9521613028900435-5.jpg" className="w-[150px]" alt="" />
              </div>
              <div>
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/7f8383cc-07f5-4714-b451-fba7d49776921613028902727-Roadster-Men-Tshirts-9521613028900435-2.jpg" className="w-[150px]" alt="" />
              </div>
            </div>
            <div className="w-[30%] p-3 border-[1px] border-gray-300 rounded-lg">
              <div>
                <h2 className="text-[20px] text-center font-semibold mb-4">Product Details</h2>
                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">Price :</h3>
                  <span>
                  ₹ 1500
                  </span>
                </div>

                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">MRP :</h3>
                  <span>
                  ₹ 3000
                  </span>
                </div>

                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">Manage Stock :</h3>
                  <span>
                  In Stock
                  </span>
                </div>

                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">Brand Name :</h3>
                  <span>
                  Lev's
                  </span>
                </div>

                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">Size :</h3>
                  <span>
                    Xl
                  </span>
                </div>

                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">Color :</h3>
                  <span>
                    Red
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>
    </>
  );
}
