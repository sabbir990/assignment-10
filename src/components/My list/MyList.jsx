import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Auth Provider/AuthProvider';
import { MdDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa";

export default function MyList() {
    const { user } = useContext(AuthContext)
    const [mySpots, setMySpots] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/spots/${user.email}`).then(res => {
            return res.json()
        }).then(result => {
            setMySpots(result)
        })
    })
    return (
        <div className='p-4 font-playWrite flex flex-col items-center space-y-4'>
            <div className='text-center space-y-4'>
                <h1 className='font-bold text-4xl'>My Spot List</h1>
                <p>This feature allows you to curate and save a list of spots you wish to visit or have enjoyed in the past. Easily add new places, organize your selections, and access detailed information and recommendations for each location. Whether you're planning future adventures or reminiscing about past trips, "My Spot List" helps you keep track of all your must-see destinations in one convenient place.</p>
            </div>
            <div className='w-[40%] h-2 bg-[#0a68ff] rounded-full'>

            </div>
            <div>
                <table className='border space-x-4'>
                    <thead className='border bg-[#9ca3ad]'>
                        <th className='border text-center'>Name</th>
                        <th className='border text-center'>Seasonality</th>
                        <th className='border text-center'>Average Cost</th>
                        <th className='border text-center'>Country Name</th>
                        <th className='border text-center'>Actions</th>
                    </thead>
                    {
                        mySpots && mySpots.map(spot => {
                            return (
                                <tbody className='border'>
                                    <td className='border text-center'>{spot.spotName}</td>
                                    <td className='border text-center'>{spot.seasonality}</td>
                                    <td className='border text-center'>{spot.averageCost}</td>
                                    <td className='border text-center'>{spot.countryName}</td>
                                    <td className='border text-center'><button className='p-4' title='Update'><FaPen /></button> | <button className='p-4 text-xl' title='Delete'><MdDeleteForever /></button></td>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}
