import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useVehicleData } from '../../context/VehicleData';
import { currencyCodeSymbols } from '../../utils';
import './ProfilePage.css';

const ProfilePage = () => {
  const params = useParams();
  const vehicleData = useVehicleData();
  const vehicle = vehicleData.find(vehicle => vehicle.id === params.id);

  // redirect to home page if no vehicle selected
  if (!vehicle) return <Redirect to='/' />;

  return (
    <div>
      <Link to='/'>
        <button className='back-button'>Back</button>
      </Link>
    <div className='profile-page'>
      <img src={vehicle.pictureURL} alt='car' className='profile-image' />
      <div className='profile-name'>{vehicle.name}</div>
      <div className='profile-details'>
        <div className='profile-attribute'><span className='profile-attribute-title'>Fuel Type:</span><span>{vehicle.fuelType}</span></div>
        <div className='profile-attribute'><span className='profile-attribute-title'>Transmission:</span><span>{vehicle.transmission}</span></div>
        <div className='profile-attribute'><span className='profile-attribute-title'>Doors:</span><span>{vehicle.doorCount}</span></div>
        <div className='profile-attribute'><span className='profile-attribute-title'>Passengers:</span><span>{vehicle.passengerQuantity}</span></div>
        <div className='profile-attribute'><span className='profile-attribute-title'>Baggage QTY:</span><span>{vehicle.baggageQuantity}</span></div>
        <div className='profile-attribute'><span className='profile-attribute-title'>Air Conditioning:</span><span>{vehicle.airConditioning}</span></div>
        <div className='profile-attribute'><span className='profile-attribute-title'>Drive Type:</span><span>{vehicle.driveType}</span></div>
        <div className='profile-attribute'><span className='profile-attribute-title'>Vendor:</span><span>{vehicle.vendor.name}</span></div>
        <div className='profile-attribute'><span className='profile-attribute-title'>Code:</span><span>{vehicle.vendor.code}</span></div>
        <div className='profile-attribute'><span className='profile-attribute-title'>Code:</span><span>{vehicle.code}</span></div>
        <div className='profile-attribute'><span className='profile-attribute-title'>Code Context:</span><span>{vehicle.codeContext}</span></div>
      </div>
      <div className='profile-footer'>
        <div className={`profile-availability ${vehicle.status === 'Available' ? 'available' : 'unavailable'}`}>
          {vehicle.status}
        </div>
        <div className='profile-pricing'>
          <div className='profile-rate-price'><span className='profile-rate-price-title'>Rate:</span> {currencyCodeSymbols[vehicle.currencyCode]}{vehicle.rate}</div>
          <div className='profile-total-price'><span className='profile-total-price-title'>Estimated Total:</span> {currencyCodeSymbols[vehicle.currencyCode]}{vehicle.estimatedTotal}</div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default ProfilePage;