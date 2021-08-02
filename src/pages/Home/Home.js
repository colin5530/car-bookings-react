import React from 'react';
import Legend from '../../components/Legend';
import FilterBar from '../../components/FilterBar';
import Sorting from '../../components/Sorting';
import VehicleCard from '../../components/VehicleCard';
import { useVehicleData } from '../../context/VehicleData';

const Home = () => {
  const vehicleData = useVehicleData();
  
  const handleVehicleClick = (vehicle) => {
    console.log('click!', vehicle);
  }

  const vehicleCards = vehicleData
    .map(vehicle => (
        <VehicleCard vehicle={vehicle} key={vehicle.id} onClick={handleVehicleClick}/>
    ));

  return (
    <>
      <Legend />
      <div id='back-btn'></div>
      <FilterBar />
      <Sorting />
      <div id="content">
        {vehicleCards}
      </div>
    </>
  );
}

export default Home;