import React from 'react'
import { PiStarFourFill } from "react-icons/pi";

export default function Opportunities() {
  return (
    <div className='mt-52 bg-[#b88c8c] py-28 px-4 space-y-4'>
      <h1 className='font-playWrite font-bold text-3xl flex items-center space-x-4'> <PiStarFourFill /> <span>Get to know us</span></h1>
      <p className='font-rubik text-6xl font-bold mt-2'>Get the Best Travel Experience</p>
      <div className='flex items-center space-x-4'>
        <div className='p-3 bg-white rounded-full'>
          <img src="https://themexriver.com/wp/goyto/wp-content/uploads/2024/03/icon1.webp" alt="" className='w-32' />
        </div>
        <div className='font-playWrite'>
          <h1 className='font-bold text-4xl'>Best of Hotel</h1>
          <p> where we showcase the finest accommodations from around the world. Whether you're looking for luxurious resorts, charming boutique hotels, or budget-friendly stays, our curated list offers something for every traveler. Explore detailed reviews, stunning photos, and exclusive amenities to help you choose the perfect place for your next trip. Discover top-rated hotels that guarantee comfort, exceptional service, and unforgettable experiences.</p>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='p-3 bg-white rounded-full'>
          <img src="https://themexriver.com/wp/goyto/wp-content/uploads/2024/03/icon2.webp" alt="" className='w-32' />
        </div>
        <div className='font-playWrite'>
          <h1 className='font-bold text-4xl'>Friendly price</h1>
          <p>where budget-conscious travelers can find the best deals and affordable options for their journeys. We highlight destinations, accommodations, and activities that offer great value without compromising on quality. Discover tips, special offers, and recommendations to make your travel dreams come true at a fraction of the cost. Enjoy memorable experiences and save money with our expertly curated budget-friendly travel advice.</p>
        </div>
      </div>
    </div>
  )
}
