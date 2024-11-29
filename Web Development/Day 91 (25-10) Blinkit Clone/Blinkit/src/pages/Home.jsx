import React from 'react'
import HomeBannerData from '../Components/HomeBannerData'
import HomeDairyBreadEggs from '../Components/HomeDairyBreadEggs'
import HomePaperTobacco from '../Components/HomePaperTobacco'
import HomeSnacks from '../Components/HomeSnacks'
import HomeHookah from '../Components/HomeHookah'
import HomeMouthFresher from '../Components/HomeMouthFresher'
import HomeColddrinks from '../Components/HomeColddrinks'

export default function Home() {
  return (
    <div className='max-w-[1280px] mx-auto px-3'>
        <HomeBannerData/>
        <HomeDairyBreadEggs/>
        <HomePaperTobacco/>
        <HomeSnacks/>
        <HomeHookah/>
        <HomeMouthFresher/>
        <HomeColddrinks/>
    </div>
  )
}
