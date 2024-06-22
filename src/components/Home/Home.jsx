import React from 'react'
import Banner from './Banner'
import TouristSpots from '../Tourist spots section/TouristSpots'

export default function Home() {
  return (
    <div>
        <Banner />
        <hr />
        <section>
          <TouristSpots />
        </section>
    </div>
  )
}
