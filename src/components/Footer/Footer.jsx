import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div className='bg-[#002c73] px-4 py-24 text-white text-4xl font-bold font-playWrite text-center space-y-4 mt-28'>
        <h1>Travel Managemant(TM)-Website</h1>
        <p className='text-yellow-500'>Contacts</p>
        <div className='text-white flex items-center justify-center space-x-4'>
            <a href="#" title='facebook'><FaFacebook /></a>
            <a href="#" title='muhammadsabbirkhanalif@gmail.com'><SiGmail /></a>
            <a href="#" title='sabbir990'><FaGithub /></a>
        </div>
        <br /><br /><br /><br />
        <small className='text-sm'>© 2024 Travel Management Website, LLC. All Rights Reserved.</small>
    </div>
  )
}
