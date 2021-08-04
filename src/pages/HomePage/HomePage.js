import React from 'react';
import { useHistory } from 'react-router-dom';
import Legend from '../../components/Legend';
import FilterBar from '../../components/FilterBar';
import Sorting from '../../components/Sorting';
import VehicleCard from '../../components/VehicleCard';
import { useVehicleData } from '../../context/VehicleData';
import { useFilters } from '../../context/Filters';
import './HomePage.css';

const HomePage = () => {
  const vehicleData = useVehicleData();
  const filters = useFilters();
  const history = useHistory();
  
  const handleVehicleClick = (vehicle) => {
    history.push(`/profile/${vehicle.id}`);
  }

  const checkFilters = (vehicle) => {
    return filters.reduce((pass, filter) => {
      if (vehicle[filter.column] !== filter.value) {
        return false;
      }
      return pass;
    }, true);
  }

  const filteredVehicles = vehicleData.filter(checkFilters);

  return (
    <>
      <Legend />
      <FilterBar />
      <Sorting />
      <div id="content">
        {filteredVehicles.length > 0
          ? filteredVehicles.map(vehicle => (<VehicleCard vehicle={vehicle} key={vehicle.id} onClick={handleVehicleClick}/>))
          : (
            <div className='no-cars-message'>
              <div>There are no cars available matching your settings.</div>
              <div>Try changing the filters</div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default HomePage;