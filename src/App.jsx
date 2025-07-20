import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      {/* <Title subTitle='Our Program' Title='What we offer' /> */}
      <Programs />
      <Reviews />
    </div>
  );
};

export default App;
