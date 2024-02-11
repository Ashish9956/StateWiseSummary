import React from 'react';
import StateCard from './StateCard';

const StateGrid = ({ states, onStateClick }) => {
  return (
    <div className="state-grid">
      {states.map((state, index) => (
        <StateCard key={index} state={state} onStateClick={onStateClick} />
      ))}
    </div>
  );
};

export default StateGrid;
