import React, { useContext, useState } from 'react';

export const FilterContext = React.createContext();

const FilterProvider = ({children}) => {
  const [ filters, setFilters ] = useState([]);

  return (
    <FilterContext.Provider value={{filters, setFilters}}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) throw new Error('useFilters must be used within a FilterProvider');
  return context.filters;
}

const useUpdateFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) throw new Error('useFilters must be used within a FilterProvider');
  return ({column, value}) => {
    const {filters, setFilters} = context;
    
    const filterIndex = filters.findIndex(filter => filter.column === column);
    // if filter doesn't already exist, add filter
    if (filterIndex === -1) {
      if (value !== 'ALL') {
        setFilters([...filters, {column, value}]);
      }
    } else {
      // if filter does already exist, change value
      const newFilters = [...filters];
      if (value === 'ALL') {
        newFilters.splice(filterIndex, 1);
      } else {
        newFilters[filterIndex] = {column, value};
      }
      
      setFilters(newFilters);
    }
  };

}

export {
  FilterProvider,
  useFilters,
  useUpdateFilters,
}