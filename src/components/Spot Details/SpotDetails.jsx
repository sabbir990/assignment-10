import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaCity, FaDollarSign, FaFileInvoiceDollar, FaHotel, FaLanguage, FaRegBuilding, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { RiSpyFill } from "react-icons/ri";
import { FaBuildingShield } from "react-icons/fa6";

export default function SpotDetails() {
    const [singleSpot, setSingleSpot] = useState(null);
    const { id } = useParams()

    useState(() => {
        fetch(`http://localhost:5000/singleSpot/${id}`).then(res => {
            return res.json();
        }).then(result => {
            setSingleSpot(result);
        })
    }, [])
    return (
        <div className='font-playWrite p-4 space-y-4'>
            <div>
                <h1 className='text-5xl font-bold'>{singleSpot && singleSpot.spotName}</h1>
                <div className='h-2 w-[50%] bg-[#349beb] mt-4 rounded-lg'>

                </div>
            </div>
            <div className='w-full shadow-lg'>
                <img src={singleSpot && singleSpot.image} alt={singleSpot && singleSpot.spotName} className='w-full border border-transparent rounded-md' />
            </div>
            <div className='mt-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-4 gap-y-6 mx-auto'>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <FaRegBuilding />
                    </div>
                    <div>
                        <p className='text-gray-500'>Accomodation</p>
                        <p className='font-bold'>{singleSpot && singleSpot.spotName}</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <FaDollarSign />
                    </div>
                    <div>
                        <p className='text-gray-500'>Travel Fee</p>
                        <p className='font-bold'>{singleSpot && singleSpot.averageCost}</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <FaCity />
                    </div>
                    <div>
                        <p className='text-gray-500'>Arrival City</p>
                        <p className='font-bold'>{singleSpot && singleSpot.location}</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <TiWeatherWindyCloudy />
                    </div>
                    <div>
                        <p className='text-gray-500'>Best Season</p>
                        <p className='font-bold'>{singleSpot && singleSpot.seasonality}</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <FaCity />
                    </div>
                    <div>
                        <p className='text-gray-500'>Deprature City</p>
                        <p className='font-bold'>{singleSpot && singleSpot.countryName}</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <FaFileInvoiceDollar />
                    </div>
                    <div>
                        <p className='text-gray-500'>Fee Cancel</p>
                        <p className='font-bold'>Yes</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <RiSpyFill />
                    </div>
                    <div>
                        <p className='text-gray-500'>01 Guided</p>
                        <p className='font-bold'>Guided</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <FaHotel />
                    </div>
                    <div>
                        <p className='text-gray-500'>Hotel Transfer</p>
                        <p className='font-bold'>Available</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <FaBuildingShield />
                    </div>
                    <div>
                        <p className='text-gray-500'>Insurance</p>
                        <p className='font-bold'>Cover 60%</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <FaLanguage />
                    </div>
                    <div>
                        <p className='text-gray-500'>Language</p>
                        <p className='font-bold'>English</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <FaUserPlus />
                    </div>
                    <div>
                        <p className='text-gray-500'>Minimum Age</p>
                        <p className='font-bold'>18</p>
                    </div>
                </div>
                <div className='flex space-x-2 items-center'>
                    <div className='p-4 border border-transparent rounded-full bg-gray-300 font-bold text-[#601ad9] text-2xl'>
                        <FaUserMinus />
                    </div>
                    <div>
                        <p className='text-gray-500'>Maximum Age</p>
                        <p className='font-bold'>54</p>
                    </div>
                </div>
            </div><br /><br />
            <div className='space-y-4 mt-10'>
                <h1 className='text-4xl'>A short description about the spot</h1>
                <div className='h-2 w-[50%] bg-[#349beb] mt-4 rounded-lg'>

                </div>
                <p className='text-gray-400'>{singleSpot && singleSpot.shortDescription}</p>
            </div>
        </div>
    )
}
