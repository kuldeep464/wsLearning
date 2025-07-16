
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function ViewCategoryModal({ ModalFunction, items, imageStaticPath }) {

  let { openModal, setOpenModal } = ModalFunction
  let apiBasePath = import.meta.env.VITE_APIBASEPATH
  console.log(items)


  return (
    <>

      <Modal show={openModal} className="" onClose={() => setOpenModal(false)}>
        <Modal.Header className=''>Product Image's & Price</Modal.Header>
        <Modal.Body className="h-[500px]">
          <div className="flex gap-5 justify-between">
            <div className="w-[20%] p-3 border-[1px] border-gray-300 rounded-lg">
              <img src={apiBasePath + imageStaticPath.productImagePath + items.productImage} className="w-[500px] h-full" alt="" />
            </div>
            <div className="w-[50%] p-3 border-[1px] border-gray-300 rounded-lg grid grid-cols-3 gap-3">
              {items.productGallery.length > 0 ?
                items.productGallery.map((items, index) => {
                  return (
                    <div key={index}>
                      <img src={apiBasePath + imageStaticPath.productGalleryPath + items} className="w-[150px] h-[120px]" alt="" />
                    </div>

                  )
                })

                :
                ''

              }
            </div>
            <div className="w-[30%] p-3 border-[1px] border-gray-300 rounded-lg">
              <div>
                <h2 className="text-[20px] text-center font-semibold mb-4">Product Details</h2>
                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">Price :</h3>
                  <span>
                    ₹ {items.productPrice}
                  </span>
                </div>

                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">MRP :</h3>
                  <span>
                    ₹ {items.productMRP}
                  </span>
                </div>

                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">Description :</h3>
                  <span>
                  {items.productDescription}
                  </span>
                </div>

                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">Short Description :</h3>
                  <span>
                    {items.productShortDescription}
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
                  {items.sizeName.map((items, index) => {
                    return (
                      <span key={index}>
                        {items.sizeName}
                      </span>
                    )
                  })}

                </div>

                <div className="flex items-center gap-5 py-2">
                  <h3 className="font-semibold">Color :</h3>
                  {items.colorName.map((items, index) => {
                    return (
                      <span key={index}>
                        {items.colorName}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>
    </>
  );
}
