import React from 'react';
import './Navbar.css';
import logo from '../../assets/Quadratic.png';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt='' className='logo' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>Campus</li>
        <li>About Us</li>
        <li>Testimonial</li>
        <li>Contact Us</li>
        <li>
          {' '}
          <button className='btn'>Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
