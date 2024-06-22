import React from 'react'
import { MdAddLocationAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddSpot() {
  const navigate = useNavigate()
  const handleAddSpotSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const spotName = form.spot_name.value;
    const countryName = form.country_name.value;
    const location = form.location.value;
    const shortDescription = form.short_description.value;
    const averageCost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travel_time.value;
    const totalVisitorPerYear = form.total_visitors_per_year.value;
    const email = form.email.value;
    const name = form.name.value;

    const spot = { image, spotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totalVisitorPerYear, email, name }

    fetch(`http://localhost:5000/spots`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(spot)
    }).then(res => {
      return res.json();
    }).then(result => {
      if (result.insertedId) {
        Swal.fire({
          title: "Done!",
          text: "You've added a spot successfully",
          icon: "success"
        });

        form.reset();
        navigate('/')
      }
    }).catch(error => {
      Swal.fire({
        title: "Oops!",
        text: "Something is wrong",
        icon: "error"
      });
    })
  }
  return (
    <div className='bg-base-200 lg:px-20 lg:py-32 p-4'>
      <div className='w-full bg-white py-10 px-4 border border-transparent rounded-lg shadow-lg font-playWrite'>
        <h1 className='text-center text-4xl'>Add Tourist Spots</h1>
        <p className='text-center mt-4'>Increases local revenue through tourism spending on accommodations, dining, shopping, and attractions.</p>
        <p className='text-7xl flex justify-center text-[#1186cf]'><MdAddLocationAlt /></p>
        <br />
        <hr />
        <br />
        <form className='font-bold flex-col lg:flex md:flex' onSubmit={handleAddSpotSubmit}>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor="image">Spot Image</label><br />
              <input type="text" name='image' placeholder='Enter spot imageURL' className='p-2 outline-none border border-[#94a1a8] rounded-md w-full' />
            </div>
            <div className='space-y-2'>
              <label htmlFor="spot-name">Tourists Spot Name</label><br />
              <input type="text" name='spot_name' placeholder='Enter tourist spots name' className='p-2 outline-none border border-[#94a1a8] rounded-md w-full' />
            </div>
            <div className='space-y-2'>
              <label htmlFor="country-name">Country name</label><br />
              <input type="text" name='country_name' placeholder='Enter country name' className='p-2 outline-none border border-[#94a1a8] rounded-md w-full' />
            </div>
            <div className='space-y-2'>
              <label htmlFor="location">Location</label><br />
              <input type="text" name='location' placeholder='Enter location' className='p-2 outline-none border border-[#94a1a8] rounded-md w-full' />
            </div>
            <div className='space-y-2'>
              <label htmlFor="short-description">Short description</label><br />
              <input type="text" name='short_description' placeholder='Enter a short description' className='p-2 outline-none border border-[#94a1a8] rounded-md w-full' />
            </div>
            <div className='space-y-2'>
              <label htmlFor="average-cost">Average cost</label><br />
              <input type="number" name='average_cost' placeholder='Enter average cost' className='p-2 outline-none border border-[#94a1a8] rounded-md w-full' />
            </div>
          </div>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor="seasonality">Seasonality</label><br />
              <select name="seasonality" className='p-2 outline-none border border-[#94a1a8] rounded-md w-full'>
                <option value="summer">Summer</option>
                <option value="rainy-season">Rainy-Season</option>
                <option value="autumn">Autumn</option>
                <option value="late-autumn">Late-autumn</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
              </select>
            </div>
            <div className='space-y-2'>
              <label htmlFor="tavel-time">Travel time</label><br />
              <select name="travel_time" className='p-2 outline-none border border-[#94a1a8] rounded-md w-full'>
                <option value="1-day">1 Day</option>
                <option value="2-day">2 Day</option>
                <option value="3-day">3 Day</option>
                <option value="4-day">4 Day</option>
                <option value="5-day">5 Day</option>
                <option value="6-day">6 Day</option>
                <option value="7-day">7 Day</option>
              </select>
            </div>
            <div className='space-y-2'>
              <label htmlFor="total-visitors">Total visitors per year</label><br />
              <input type="number" placeholder='Enter total visitors per year' name='total_visitors_per_year' className='p-2 outline-none border border-[#94a1a8] rounded-md w-full' />
            </div>
            <div className='space-y-2'>
              <label htmlFor="email">User email</label><br />
              <input type="email" name='email' placeholder='Enter your email' className='p-2 outline-none border border-[#94a1a8] rounded-md w-full' />
            </div>
            <div className='space-y-2'>
              <label htmlFor="name">Username</label><br />
              <input type="text" name='name' placeholder='Enter your name' className='p-2 outline-none border border-[#94a1a8] rounded-md w-full' />
            </div>
            <div className='col-span-2'>
              <input type="submit" value={'Add'} className='py-2 w-full font-bol cursor-pointer btn btn-outline border border-[#1186cf] hover:border-[#1186cf] hover:bg-[#1186cf]' />
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}
