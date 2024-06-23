import React, { useEffect, useState } from 'react'
import SpotCard from '../Tourist spots section/SpotCard';

export default function AllSpots() {
    const [allSpots, setAllSpots] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/allSpots').then(res => {
            return res.json()
        }).then(result => {
            console.log(result)
            setAllSpots(result)
        })
    }, [])

    const handleChangeSort = (event) => {
        event.preventDefault();

        const form = event.target;
        const sortValue = form.value;

        if (sortValue === 'A-Z') {
            const sortedItem = [...allSpots].sort((a, b) => a.spotName.localeCompare(b.spotName));
            setAllSpots(sortedItem)
        } else if (sortValue === 'Z-A') {
            const sortedItem = [...allSpots].sort((a, b) => b.spotName.localeCompare(a.spotName));
            setAllSpots(sortedItem)
        }
    }

    return (
        <div className='p-4 font-playWrite flex flex-col items-center'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-5xl font-bold'>All Spots</h1>
                <p>Your comprehensive guide to the must-visit locations across the globe. From hidden gems to iconic landmarks, this section covers it all. Discover diverse destinations, each with detailed descriptions, traveler tips, and stunning visuals to inspire your next adventure. Whether you're seeking natural wonders, cultural hotspots, or urban escapes, "All Spots" is your go-to resource for finding the perfect places to explore and enjoy.</p>
            </div><br />
            <div className='w-[40%] h-2 bg-[#0c88f5] rounded-full'>

            </div><br /><br />
            <div className='flex items-center'>
                <p>Sort Spots : </p>
                <select name="sort" onChange={handleChangeSort}>
                    <option value=""></option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-20'>
                {
                    allSpots && allSpots.map(spot => {
                        return <SpotCard key={spot._id} id={spot._id} image={spot.image} spotName={spot.spotName} averageCost={spot.averageCost} totalVisitorPerYear={spot.totalVisitorPerYear} travelTime={spot.travelTime} seasonality={spot.seasonality} />
                    })
                }
            </div>
        </div>
    )
}
