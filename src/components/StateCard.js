import React from 'react';

const StateCard = ({ state, onStateClick }) => {
  const { name, temperature } = state;

  // Calculate color based on temperature
  const redComponent = Math.min(255, Math.round((temperature / 50) * 255));
  const blueComponent = Math.min(255, Math.round(((50 - Math.abs(temperature - 25)) / 25) * 100));
  const lightBlueComponent = Math.min(255, Math.round(((25 - temperature) / 25) * 100));

  const temperatureColor = `rgba(${redComponent}, ${lightBlueComponent}, ${blueComponent}, 0.7)`;

  return (
    <div className="state-card" style={{ backgroundColor: temperatureColor }} onClick={() => onStateClick(state)}>
      <h3>{name}</h3>
    </div>
  );
};

export default StateCard;
