import React from 'react';
import './Sorting.css';

const Sorting = ({ updateSortDirection, updateSortColumn }) => {

  const handleSortChange = (e) => {
    updateSortColumn(e.target.value);
  }

  const handleDirectionChange = (e) => {
    updateSortDirection(e.target.value);
  }

  return (
    <div>
      Sort:{' '}
      <select onChange={handleSortChange}>
        <option value='estimatedTotal'>Price</option>
        <option value='doorCount'>Doors</option>
        <option value='baggageQuantity'>Baggage</option>
      </select>
      Direction:{' '}
      <select onChange={handleDirectionChange}>
        <option value='ASC'>ASC</option>
        <option value='DESC'>DESC</option>
      </select>

    </div>
  );
}

export default Sorting;