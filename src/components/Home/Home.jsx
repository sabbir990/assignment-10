import React from 'react'
import Banner from './Banner'
import TouristSpots from '../Tourist spots section/TouristSpots'
import Opportunities from '../Extra Sections/Opportunities'

export default function Home() {
  return (
    <div>
        <Banner />
        <hr />
        <section>
          <TouristSpots />
        </section>
        <div className='w-[40%] h-2 rounded-lg bg-[#1291e6] mx-auto mt-8'>

        </div>
        <section>
          <Opportunities />
        </section>

    </div>
  )
}
