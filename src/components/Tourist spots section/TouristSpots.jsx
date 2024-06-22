import React, { useContext, useEffect, useState } from 'react'
import SpotCard from './SpotCard'
import { FaStarOfLife } from "react-icons/fa";
import { AuthContext } from '../Auth Provider/AuthProvider';

export default function TouristSpots() {
    const {user} = useContext(AuthContext);
    const [spots, setSpots] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/spots/${user?.email}`).then(res => {
            return res.json();
        }).then(result => {
            setSpots(result)
        })
    }, [user])


    return (
        <div className='flex flex-col items-center mt-20 font-playWrite font-bold p-4'>
            <h1 className='flex items-center space-x-4 text-4xl'> <FaStarOfLife /><span>Explore Tour</span><FaStarOfLife /></h1><br />
            <p className='text-6xl'>Explore the Beautiful Places</p><br />
            <div className='w-[40%] bg-[#1c9beb] h-2'>

            </div>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                {
                    spots && spots.map(spot => {
                        return <SpotCard key={spot._id} id={spot._id} image={spot.image} spotName={spot.spotName} countryName={spot.countryName} location={spot.location} shortDescription={spot.shortDescription} averageCost={spot.averageCost} seasonality={spot.seasonality} travelTime={spot.travelTime} totalVisitorPerYear={spot.totalVisitorPerYear} email={spot.email} name={spot.name}/>
                    })
                }
            </div>
        </div>
    )
}
