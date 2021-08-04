import React from 'react';
import Filter from '../Filter';
import './FilterBar.css';

const FilterBar = () => {

  return (
    <div className='filter-bar-container'>
      <Filter column='doorCount' label='Doors' />
      <Filter column='passengerQuantity' label='Passengers' />
      <Filter column='fuelType' label='Fuel Type' />
      <Filter column='transmission' label='Transmission' />
      <Filter column='name' label='Name' />
    </div>
  );
}

export default FilterBar;