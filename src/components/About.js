// About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="Abouth2">About State Summary</h2>
      <p className="Aboutp">
        State Summary is a web application that provides information about different states in India.
        Explore temperature data, city details, and more.
      </p>
      <h3 className="Abouth3">Contact Information</h3>
      <ul>
        <li>Email: contact@statesummary.com</li>
        <li>Phone: +123 456 7890</li>
        <li>Address: 123 Main Street, Cityville</li>
      </ul>
    </div>
  );
};

export default About;
