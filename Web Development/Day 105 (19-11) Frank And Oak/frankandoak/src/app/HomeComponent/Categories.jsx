import React from 'react'

export default function Categories() {
  return (
    <div className='py-10 px-4'>
        <div>
            <h1 className='text-[32px]'>Our best categories at their best prices ever</h1>
        </div>
        <div className='pt-10 grid gap-4 grid-cols-6'>
            <div>
                <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-1_0ab39a40-c090-4b19-9fa9-ec3c0f2f73eb_900x.jpg?v=1731441344" alt="" />
               
                <p>Womens Sweaters starting at $30</p>
            </div>
            <div>
                <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area_26d1d9eb-1fc4-4a06-a938-0d6ae9d1476b_900x.jpg?v=1731441349" alt="" />
                <p>Men Sweaters starting at $35</p>
            </div>
            <div>
                <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-3_ba12d056-a5e0-4fe5-9a2b-e8161fdf1518_900x.jpg?v=1731441405" alt="" />
                <p>Womens Jackets starting at $45</p>
            </div>
            <div>
                <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_01d60f38-6e9d-4748-a912-390a953c56cd_900x.jpg?v=1731441409" alt="" />
                <p>Mens Jackets starting at $45</p>
            </div>
            <div>
                <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-4_f9ee92d9-77e0-4b7b-99e4-3299f8572c66_900x.jpg?v=1731441354" alt="" />
                <p>Womens Accessories starting at $6</p>
            </div>
            <div>
                <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-5_b7d6227f-aeb2-4dfb-b45a-be5fa9684944_900x.jpg?v=1731441413" alt="" />
                <p>Mens Accessories starting at $6</p>
            </div>
        </div>
    </div>
  )
}
