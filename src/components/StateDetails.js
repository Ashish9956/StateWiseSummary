import React from 'react';
import CityCharts from './CityCharts';

const StateDetails = ({ state, onClose }) => {
  const { name, cities } = state;

  return (
    <div className="state-details">
      <button onClick={onClose}>Close</button>
      <h2>{name}</h2>
      <CityCharts cities={cities} />
    </div>
  );
};

export default StateDetails;
