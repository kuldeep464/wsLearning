import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'

function App() {
  const [result, setresult] = useState([])

  let apiDAta = () => {
    let apiUrl = `https://wscubetech.co/ecommerce-api/products.php`

    axios.get(apiUrl)
      .then((apiRes) => apiRes.data)
      .then((finalRes) => {
        setresult(finalRes.data)
      })
  }

  useEffect(() => {
    apiDAta()
  }, [])

  return (
    <>
      <header className=' py-4 border-b-[0.1px] border-gray-300'>
        <div className='max-w-[1400px] mx-auto'>
          <div className=' flex flex-col md:flex-row gap-[80px] items-center'>
            <figure>
              <img src="https://product-listings.vercel.app/static/media/myntra.23d804112ff164fbba64.png" alt="myntraLogo" className='w-[50px]' />
            </figure>
            <div>
              <ul className='flex sm:flex-row flex-col gap-7 font-semibold'>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>HOME & LIVING</li>
                <li>BEAUTY</li>
                <li>Studio <sup>NEW</sup></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className='max-w-[1400px] mx-auto p-2'>
        <div>
          <div>
            <h3 className='py-4'>Home / clothing / <b>Men T-shirts</b></h3>
            <h4 className='pb-4'><b>Men T-shirts -</b> 126446 items</h4>
            <div className='pb-4 grid grid-cols-[40%_auto] md:grid-cols-[25%_auto] items-center relative'>
              <div className='flex flex-col md:flex-row justify-between'>
                <b>FILTERS</b>
                <a href="" className='text-red-500 font-bold'>Clear All</a>
              </div>
              <div className='absolute top-[100%] md:right-0 md:top-0'>
                <select name="" id="" className='border-[1px] border-black p-1 w-[200px]'>
                  <option value=" Sort by : Recommended" > Sort by : Recommended</option>
                  <option value="">Name : A to Z</option>
                  <option value="">Name : Z to A</option>
                  <option value="">Price : Low to High</option>
                  <option value="">Price : High to Low</option>
                  <option value="">Discounted Price : Low to High</option>
                  <option value="">Discounted Price : High to Low</option>
                  <option value="">Rating : Low to High</option>
                  <option value="">Rating : High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' p-2 mt-8'>
        <div className='grid grid-cols-[18%_auto] gap-[30px]'>
          <aside className=' w-[100%]'>
            <div className='border-[0.1px] border-black rounded p-2 h-[250px] overflow-y-scroll'>
              <h2 className='font-bold py-2'>CATEGORIES : </h2>
              <ul>
                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

              </ul>
            </div>

            <div className='border-[0.1px] border-black rounded p-2 h-[250px] overflow-y-scroll'>
              <h2 className='font-bold py-2'>Brand : </h2>
              <ul>
                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

                <li className='py-1'>
                  <input type="checkbox" />
                  <label htmlFor=""> Beauty</label>
                </li>

              </ul>
            </div>

            <div className='border-[0.1px] border-black rounded p-2'>
              <h2 className='font-bold py-2'>Price : </h2>
              <form action="">
                <div className='py-1'>
                  <input type="radio" name="price" id='rs10-250' />
                  <label htmlFor="rs10-250"> Rs.10 to Rs. 250</label>
                </div>

                <div className='py-1'>
                  <input type="radio" name="price" id='rs250-500' />
                  <label htmlFor="rs250-500"> Rs.250 to Rs. 500</label>
                </div>

                <div className='py-1'>
                  <input type="radio" name="price" id='rs500-1000' />
                  <label htmlFor="rs500-1000"> Rs.500 to Rs. 1000</label>
                </div>

                <div className='py-1'>
                  <input type="radio" name="price" id='rs1000above' />
                  <label htmlFor="rs1000above"> Rs.1000 to Above</label>
                </div>
              </form>
            </div>

            <div className='border-[0.1px] border-black rounded p-2'>
              <h2 className='font-bold py-2'>Discount Range : </h2>
              <form action="">
                <div className='py-1'>
                  <input type="radio" name="Discount" id='per5' />
                  <label htmlFor="per5"> 5% and above</label>
                </div>

                <div className='py-1'>
                  <input type="radio" name="Discount" id='per10' />
                  <label htmlFor="per10"> 10% and above</label>
                </div>

                <div className='py-1'>
                  <input type="radio" name="Discount" id='per15' />
                  <label htmlFor="per15"> 15% and above</label>
                </div>

                <div className='py-1'>
                  <input type="radio" name="Discount" id='per20' />
                  <label htmlFor="per20"> 20% and above</label>
                </div>
              </form>
            </div>

            <div className='border-[0.1px] border-black rounded p-2'>
              <h2 className='font-bold py-2'>Rating : </h2>
              <form action="">
                <div className='py-1 flex gap-[5px]'>
                  <input type="radio" name="Rating" id='star4' />
                  <label htmlFor="star4" className='flex gap-[5px] items-center'> 4 <FaStar className='text-[14px]' /> & Above</label>
                </div>

                <div className='py-1 flex gap-[5px]'>
                  <input type="radio" name="Rating" id='star3' />
                  <label htmlFor="star3" className='flex gap-[5px] items-center'> 3 <FaStar className='text-[14px]' /> & Above</label>
                </div>

                <div className='py-1 flex gap-[5px]'>
                  <input type="radio" name="Rating" id='star2' />
                  <label htmlFor="star2" className='flex gap-[5px] items-center'> 2 <FaStar className='text-[14px]' /> & Above</label>
                </div>

                <div className='py-1 flex gap-[5px]'>
                  <input type="radio" name="Rating" id='star1' />
                  <label htmlFor="star1" className='flex gap-[5px] items-center'> 1 <FaStar className='text-[14px]' /> & Above</label>
                </div>
              </form>
            </div>
          </aside>
          <div className='border-2 border-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px]'>


            {
              result.length >= 1

                ?
                result.map((items, index) => {
                  return (
                    <ProductItems key={index} finaldata={items} />
                  )
                })


                :



                <>
                  <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                </>


            }


          </div>
        </div>
      </section>

      <footer className='py-7'>
        <div className='max-w-[1400px] mx-auto p-2'>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            <div>
              <h3 className='uppercase font-semibold text-[15px] tracking-[-1px] py-3'>online shopping</h3>
              <ul>
                <li className='capitalize p-2'>men</li>
                <li className='capitalize p-2'>women</li>
                <li className='capitalize p-2'>kids</li>
                <li className='capitalize p-2'>home & living</li>
                <li className='capitalize p-2'>beauty</li>
                <li className='capitalize p-2'>gift cards</li>
                <li className='capitalize p-2'>myntra insider</li>
              </ul>

              <h3 className='uppercase font-semibold text-[15px] tracking-[-1px] py-3 mt-3'>useful links</h3>
              <ul>
                <li className='capitalize p-2'>blog</li>
                <li className='capitalize p-2'>carreer</li>
                <li className='capitalize p-2'>site map</li>
                <li className='capitalize p-2'>coorporate information</li>
                <li className='capitalize p-2'>whitehat</li>
                <li className='capitalize p-2'>clear trip</li>
              </ul>
            </div>

            <div>
              <h3 className='uppercase font-semibold text-[15px] tracking-[-1px] py-3'>customer policies</h3>
              <ul>
                <li className='capitalize p-2'>contact us</li>
                <li className='capitalize p-2'>FAQ</li>
                <li className='capitalize p-2'>T&C</li>
                <li className='capitalize p-2'>terms of use</li>
                <li className='capitalize p-2'>track orders</li>
                <li className='capitalize p-2'>shipping </li>
                <li className='capitalize p-2'>cancellation</li>
                <li className='capitalize p-2'>returns</li>
                <li className='capitalize p-2'>privacy policy </li>
                <li className='capitalize p-2'>grievance officer</li>
              </ul>
            </div>

            <div>
              <h3 className='uppercase font-semibold text-[15px] tracking-[-1px] py-3'>EXPERIENCE MYNTRA APP ON MOBILE</h3>
              <div className='grid grid-cols-2 items-center'>
                <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" className='h-[50px]' alt="" />
                <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" className='h-[50px]' alt="" />
              </div>
            </div>

            <div>
              <div className='flex gap-[10px] items-center py-8'>
                <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" className='h-[50px]' />
                <p><b>100% ORIGINAL </b> guarantee for all products at myntra.com</p>
              </div>

              <div className='flex gap-[10px] items-center'>
                <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt="" className='h-[50px]' />
                <p><b>Return within 14days </b>  of receiving your order</p>
              </div>
            </div>
          </div>

          <div className='py-7'>
            <h2 className='uppercase font-semibold text-[14px] tracking-[-1px] py-3'>popular searches</h2>

            <p>Dishant Patel | Men | Sports Shoes | Adidas | Arrow | Fila | Online Shopping | Nike | Pepe Jeans | Puma | United Colors Of Benetton | Fastrack | Shorts | Being Human | Skirts | Woodland | Supra | Dresses | Men Shopping | Women Shopping | Blazers | Sherwani | Online Shopping | Men Olive Green & Cream Coloured | St Rahul Raina | Saurabh Sharma | Clothing | Jewellery | T Shirts | Shoes | Bags | Watches | Caps | Shirts | Backpacks | Puma Tshirts | Woodland Shoes | Titan Watches | Fastrack Watches | Wrangler Shirts | Adidas Tshirts | Nike Shoes | Roadster Shirts | Casual Shoes | Running Shoes | Nike Sports Shoes | Jeans | Being Human shirts | Converse Shoes | Cricket Shoes</p>
          </div>

          <div className='grid grid-cols-1 text-center md:grid-cols-3'>
            <p>In case of any concern, <span className='text-blue-600'>Contact Us</span></p>
            <p>
              © 2024 www.myntra.com. All rights reserved.</p>
            <p>A Flipkart company</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

function ProductItems({ finaldata }) {
  console.log(finaldata)
  let { image, description, price, stock, name } = finaldata
  return (
    <div className='m-2 border-[0.1px] border-gray-300 rounded-[10px]'>
      <img src={image} className='h-[250px] w-[100%]' alt="" />
      <div className='p-2'>
        <h3 className='text-[20px] font-semibold py-1'>{name}</h3>
        <p className='py-1 h-[50px]  text-ellipsis overflow-hidden'>{description}</p>
        <div className='flex gap-[10px] items-center'>
          <span>Rs. {price}</span>
          <span className='text-[14px]'> Rs. {price}</span>
          <span className='text-[12px] text-red-500'>({stock})</span>
        </div>
      </div>
    </div>
  )
}