import React from 'react'
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      <div className='bg-[#db6788] text-center font-playWrite text-white font-bold'>
          <p>404</p>
      </div>
      <div className='flex flex-col items-center justify-center font-playWrite space-y-4'>
        <h1 className='font-bold text-4xl'>Page Not Found</h1>
        <p className='text-gray-600'>Sorry, we couldn't find the page</p>
        <div className='space-x-4 flex justify-center items-center'>
          <Link to={'/'}><button className='px-3 py-2 flex items-center bg-blue-700 text-white font-bold outline rounded-md'><IoHome />Go to dashboard</button></Link>
        </div>
      </div>
    </div>
  )
}
