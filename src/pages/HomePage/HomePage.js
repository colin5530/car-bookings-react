import React from 'react';
import { useHistory } from 'react-router-dom';
import Legend from '../../components/Legend';
import FilterBar from '../../components/FilterBar';
import Sorting from '../../components/Sorting';
import VehicleCard from '../../components/VehicleCard';
import { useVehicleData } from '../../context/VehicleData';

const HomePage = () => {
  const vehicleData = useVehicleData();
  const history = useHistory();
  
  const handleVehicleClick = (vehicle) => {
    history.push(`/profile/${vehicle.id}`);
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

export default HomePage;