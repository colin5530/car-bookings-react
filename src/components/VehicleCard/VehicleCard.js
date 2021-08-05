import React from 'react';
import { currencyCodeSymbols } from '../../utils';
import './VehicleCard.css';

const VehicleCard = ({vehicle, onClick}) => {

  return (
    <div className='vehicle-card' onClick={() => onClick(vehicle)}>
      <div className='vehicle-title'>{vehicle.name}</div>
      <div className='vehicle-content-container'>
        <img className='vehicle-image' src={vehicle.pictureURL} alt={vehicle.name} />
        <div className='vehicle-content'>
          <div className='vehicle-details-container'>
            <div className='vehicle-details'>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Fuel Type:</span><span>{vehicle.fuelType}</span></div>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Transmission:</span><span>{vehicle.transmission}</span></div>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Doors:</span><span>{vehicle.doorCount}</span></div>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Passengers:</span><span>{vehicle.passengerQuantity}</span></div>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Baggage QTY:</span><span>{vehicle.baggageQuantity}</span></div>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Air Conditioning:</span><span>{vehicle.airConditioning}</span></div>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Drive Type:</span><span>{vehicle.driveType}</span></div>
            </div>
            <div className='vehicle-vendor-details'>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Vendor:</span><span>{vehicle.vendor.name}</span></div>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Code:</span><span>{vehicle.vendor.code}</span></div>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Vehicle Code:</span><span>{vehicle.code}</span></div>
              <div className='vehicle-attribute'><span className='vehicle-attribute-title'>Code Context:</span><span>{vehicle.codeContext}</span></div>
            </div>
          </div>
          <div className='vehicle-availability-container'>
            <div className={`vehicle-availability ${vehicle.status === 'Available' ? 'available' : 'unavailable'}`}>
              {vehicle.status}
            </div>
            <div className='vehicle-pricing'>
              <div className='vehicle-rate-price'><span className='vehicle-rate-price-title'>Rate:</span> {currencyCodeSymbols[vehicle.currencyCode]}{vehicle.rate}</div>
              <div className='vehicle-total-price'><span className='vehicle-total-price-title'>Estimated Total:</span> {currencyCodeSymbols[vehicle.currencyCode]}{vehicle.estimatedTotal}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;