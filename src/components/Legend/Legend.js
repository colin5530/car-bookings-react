import React, { useEffect, useState } from 'react';
import { useRawData } from '../../context/VehicleData';
import './Legend.css';

const Legend = () => {
  const [ legendData, setLegendData ] = useState({
    pickupDate: '',
    pickupLocation: '',
    returnDate: '',
    returnLocation: '',
  });
  const rawData = useRawData();

  useEffect(() => {
    if (Object.values(legendData).every(val => val === '') && rawData.VehAvailRSCore) {
      setLegendData({
        pickupDate: new Date(rawData.VehAvailRSCore.VehRentalCore['@PickUpDateTime']).toUTCString(),
        pickupLocation: rawData.VehAvailRSCore.VehRentalCore.PickUpLocation['@Name'],
        returnDate: new Date(rawData.VehAvailRSCore.VehRentalCore['@ReturnDateTime']).toUTCString(),
        returnLocation: rawData.VehAvailRSCore.VehRentalCore.ReturnLocation['@Name']
      })
    }
  }, [legendData, rawData]);

  return (
    <div id='legend' className='legend-container'>
      <div className='legend-content'>
        <div className='legend-title'>Legend</div>
        <div className='legend-pickup'>
          <div className='legend-event-title'>Pick Up</div>
          <div className='legend-datetime'>
            <span className='legend-event-attribute-title'>Date: </span>
            <span id='pickup-date'>{legendData.pickupDate}</span>
          </div>
          <div className='legend-location'>
            <span className='legend-event-attribute-title'>Location: </span>
            <span id='pickup-location'>{legendData.pickupLocation}</span>
          </div>
        </div>
        <div className='legend-return'>
          <div className='legend-event-title'>Return</div>
          <div className='legend-datetime'>
            <span className='legend-event-attribute-title'>Date: </span>
            <span id='return-date'>{legendData.returnDate}</span>
          </div>
          <div className='legend-location'>
            <span className='legend-event-attribute-title'>Location: </span>
            <span id='return-location'>{legendData.returnLocation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legend;