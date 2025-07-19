import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Title />
      <Programs />
    </div>
  );
};

export default App;
