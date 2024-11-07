import React from 'react'
import HomeBannerData from '../Components/HomeBannerData'
import HomeDairyBreadEggs from '../Components/HomeDairyBreadEggs'

export default function Home() {
  return (
    <div className='max-w-[1280px] mx-auto px-3'>
        <HomeBannerData/>
        <HomeDairyBreadEggs/>
    </div>
  )
}
