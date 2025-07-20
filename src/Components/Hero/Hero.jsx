import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h1>Welcome to Ink Vision</h1>
        <h2> Your CV, Your Story, Your Future. </h2>
        <p>
          We craft tailored, job-winning CVs that highlight your strengths, tell
          your story, and help you land interviews. <br /> Whether you're
          starting out or stepping up, we turn your experience into impact. Let
          your next opportunity start here.
        </p>
        <button className='hero-button'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
