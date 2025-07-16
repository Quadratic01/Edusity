import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Welcome to Quadratic Hub</h1>
        <p>Your journey to knowledge starts here.</p>
        <button className='hero-button'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
