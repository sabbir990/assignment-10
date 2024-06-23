import React from 'react'

export default function MyListTable({id, spotName, seasonality, averageCost, countryName}) {
  return (
    <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Seasonality</th>
                <th>Average Cost</th>
                <th>Country Name</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <td>{spotName}</td>
                <td>{seasonality}</td>
                <td>{averageCost}</td>
                <td>{countryName}</td>
                <td>Update | Delete</td>
            </tbody>
        </table>
    </div>
  )
}
