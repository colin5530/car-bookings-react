import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { VehicleDataProvider } from './context/VehicleData';
import { FilterProvider } from './context/Filters';

ReactDOM.render(
  <React.StrictMode>
    <VehicleDataProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </VehicleDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
