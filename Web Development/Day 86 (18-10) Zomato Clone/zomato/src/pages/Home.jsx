import React from 'react'
import HomeBanner from './homeComponents/HomeBanner'
import HomeOnlineEvents from './homeComponents/HomeOnline&Events'
import Collections from './homeComponents/Collections'
import PopularLocalities from './homeComponents/PopularLocalities'
import GetZomato from './homeComponents/GetZomato'
import Faq from './homeComponents/Faq'
import Footer from '../common/Footer'

export default function Home() {
  return (
    <div>
        <HomeBanner/>

        <HomeOnlineEvents/>

        <Collections/>

        <PopularLocalities/>

        <GetZomato/>

        <Faq/>

        <Footer/>
    </div>
  )
}
