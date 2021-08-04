import React, { useState } from 'react';
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
  const [sortColumn, setSortColumn] = useState('estimatedTotal');
  const [sortDirection, setSortDirection] = useState('ASC');
  
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

  const sortVehicles = (a, b) => {
    return parseFloat(a[sortColumn]) - parseFloat(b[sortColumn])
  }

  const getVehicleCards = () => {
    // Filter vehicles
    const filteredVehicles = vehicleData.filter(checkFilters);

    // if no vehicles remain, show message
    if (filteredVehicles.length < 1) {
      return (
        <div className='no-cars-message'>
          <div>There are no cars available matching your settings.</div>
          <div>Try changing the filters</div>
        </div>
      );
    }

    // Sort vehicles
    const sortedVehicles = filteredVehicles.sort(sortVehicles);

    // Set sort direction
    if (sortDirection === 'DESC') {
      sortedVehicles.reverse();
    }

    // return VehicleCards
    return sortedVehicles.map(vehicle => {
      return (
        <VehicleCard vehicle={vehicle} key={vehicle.id} onClick={handleVehicleClick}/>
      )
    });
  }

  return (
    <>
      <Legend />
      <FilterBar />
      <Sorting updateSortDirection={setSortDirection} updateSortColumn={setSortColumn} />
      <div id="content">
        {getVehicleCards()}
      </div>
    </>
  );
}

export default HomePage;