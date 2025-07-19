import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h1>Welcome to Ink Vision</h1>
        <p>Your CV, Your Story, Your Future.</p>
        <button className='hero-button'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
