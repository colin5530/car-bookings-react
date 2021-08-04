import React from 'react';
import { useVehicleData } from '../../context/VehicleData';
import { useUpdateFilters } from '../../context/Filters';

const Filter = ({ column, label }) => {
  const vehicleData = useVehicleData();
  const updateFilters = useUpdateFilters();


  const getFilterOptions = () => {
    return [...new Set(vehicleData.map(vehicle => vehicle[column]))];
  }

  const handleFilterChange = (e) => {
    updateFilters({column, value: e.target.value});
  }

  return (
    <div className='filter-container'>
      {label}
      <select onChange={handleFilterChange}>
        <option value='ALL' key={`filter-option-ALL`} default>ALL</option>
        {getFilterOptions().map(option => (
          <option value={option} key={`filter-option-${option}`}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;