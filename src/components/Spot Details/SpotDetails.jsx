import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SpotDetails() {
    const [singleSpot, setSingleSpot] = useState(null);
    const {id} = useParams()

    useState(() => {
        fetch(`http://localhost:5000/singleSpot/${id}`).then(res => {
            return res.json();
        }).then(result => {
            setSingleSpot(result);
        })
    }, [])
  return (
    <div className='font-playWrite p-4'>
        <h1 className='text-5xl font-bold'>{singleSpot}</h1>
    </div>
  )
}
