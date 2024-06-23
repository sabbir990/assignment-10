import React from 'react'
import { IoEnterOutline } from "react-icons/io5";
import { PiStarFourFill } from "react-icons/pi";

export default function SubscribeNow() {
  return (
    <div className='mt-52 font-playWrite font-bold text-center flex flex-col items-center space-y-6'>
        <h1 className='text-3xl flex items-center justify-center'><PiStarFourFill /> Subscribe Now</h1>
        <h1 className='text-5xl'>Subscribe for latest update <br /> about travelling</h1><br /><br />
        <div className='p-3 border-2 rounded-full border-[#f5560c] w-auto flex items-center'>
            <input type="text" placeholder='Enter your email address' className='outline-none'/>
            <button className='flex items-center bg-[#f5560c] text-white px-4 py-3 rounded-full'><span>Subscribe</span> <IoEnterOutline /></button>
        </div>
    </div>
  )
}
