import React from 'react';
import './Announcement.css';
import img1 from '../../images/Group.svg';

const Announcement = () => {
  return (
    <div className='announcement'>
        <div className='green-text'>
            <h2>Building sustainable brand presence</h2>
        </div>
        <div className='kytify'>
            <h1>Kytify Everything</h1>
        </div>
        <div className='para'>
            <p>Elevate your online presence with our web development, UI/UX design, and digital marketing services.</p>
        </div>
        <div className='sustainable-btn'>
            <button>Get sustainable site today</button>
        </div>
        <div className='socket'>
            <img src= {img1} alt='green-socket' />
        </div>
    </div>
  )
}

export default Announcement
