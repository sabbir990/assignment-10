import React from 'react'
import { Link } from 'react-router-dom'

export default function SpotCard({ id, image, spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorPerYear, email, name }) {
  return (
    <div>
      <div className="card glass">
        <figure><img src={image} alt={spotName} /></figure>
        <div className="card-body">
          <h2 className="card-title">{spotName}</h2>
          <div className='h-1 w-[50%] bg-[#f5425d]'>

          </div>
          <p>{location}</p>
          <p>Visitors Per Year : {totalVisitorPerYear}</p>
          <p>Average Cost : ${averageCost}</p>
          <p>Travel Time : {travelTime}</p>
          <p className='badge badge-success'>{seasonality}</p>
          <p></p>
          <div className="card-actions justify-end">
            <Link to={`/spotDetails/${id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
