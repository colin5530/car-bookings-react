import React, { useContext, useEffect, useState } from 'react';
import { processVehicleData } from '../utils';

const RawDataContext = React.createContext();
const VehicleDataContext = React.createContext();

const VehicleDataProvider = ({ children }) => {
  const [ rawData, setRawData ] = useState([]);
  const [ vehicleData, setVehicleData ] = useState([]);

  useEffect(() => {
    fetch('http://www.cartrawler.com/ctabe/cars.json')
      .then(response => response.json())
      .then(data => {
        setRawData(data[0]);
        setVehicleData(processVehicleData(data[0]?.VehAvailRSCore?.VehVendorAvails))
        
        // renderCarApp(data[0]);
        console.log('initial data load');
        
      });
  }, []);

  return (
    <RawDataContext.Provider value={{rawData, setRawData}}>
      <VehicleDataContext.Provider value={{vehicleData, setVehicleData}}>
        {children}
      </VehicleDataContext.Provider>
    </RawDataContext.Provider>
  )
}

const useVehicleData = () => {
  const context = useContext(VehicleDataContext);
  if (context === undefined) throw new Error('useVehicleData must be used within a VehicleDataProvider');
  return context.vehicleData;
}

const useRawData = () => {
  const context = useContext(RawDataContext);
  if (context === undefined) throw new Error('useRawData must be used within a VehicleDataProvider');
  return context.rawData;
}

export {
  VehicleDataProvider,
  useVehicleData,
  useRawData,
}