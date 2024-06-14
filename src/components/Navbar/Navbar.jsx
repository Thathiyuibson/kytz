import React, { useState } from 'react';
import './Navbar.css';
import img1 from '../../images/kytz.svg';
import img2 from '../../images/Group 1.svg';
import img6 from '../../images/socialmediaicons.svg';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClickMenu = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img className='kytz-logo' src={img1} alt='kytz logo' />
      </div>
      <div className='menu' onClick={handleClickMenu}>
        <h2>Menu</h2>
        <img src={img2} alt='lines' />
      </div>
      {showDropdown && (
        <div className='dropdown-content'>
          <p>Home</p>
          <p>Sustainable Development</p>
          <p>Branding</p>
          <p>Brand Story</p>
          <p>Contact</p>
          <div className='horizontal-line1'></div>
          <p>Follow Us on</p>
          <div className='social-icons'>
            <img src={img6} alt='socialicon'/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

