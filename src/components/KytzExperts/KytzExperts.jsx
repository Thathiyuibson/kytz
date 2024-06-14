import React, { useState } from 'react';
import './KytzExperts.css';
import img1 from '../../images/flowerrectangle.svg';
import img2 from '../../images/petal1.svg';
import img3 from '../../images/petal2.svg';

const KytzExperts = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className='kytz-experts'>
      <div className='expertise' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='expertise-head'>
          <h1>We are experts in</h1>
          <p>creating a sustainable green eco system through technology and green brandings</p>
        </div>
        <div className='animated'>
          <h1 style={{ animation: isHovered ? 'textRise 1s ease-in-out forwards' : 'none'}}>Branding</h1>
          <h1 style={{ animation: isHovered ? 'textRise 1s ease-in-out 0.2s forwards' : 'none'}}>Website design</h1>
          <h1 style={{ animation: isHovered ? 'textRise 1s ease-in-out 0.2s forwards' : 'none'}}>E-commerce development</h1>
        </div>
        <div className={`flower-rec ${isHovered ? 'animate-flower-rec' : ''}`}>
          <img src={img1} alt='flower-rectangle' />
        </div>
        <div className={`flower-petal1 ${isHovered ? 'animate-flower-petal1' : ''}`}>
          <img src={img2} alt='petal1' />
        </div>
        <div className={`flower-petal2 ${isHovered ? 'animate-flower-petal2' : ''}`}>
          <img src={img3} alt='petal3' />
        </div>
      </div>
      <div className='grid-box'>
        <div className='grid-1'>
          <h1>05+</h1>
          <p>Years in the field</p>
        </div>
        <div className='vertical-line'></div>
        <div className='grid-2'>
          <h1>15+</h1>
          <p>Team Size</p>
        </div>
        <div className='vertical-line'></div>
        <div className='grid-3'>
          <h1>35+</h1>
          <p>Projects Completed</p>
        </div>
        <div className='vertical-line'></div>
        <div className='grid-4'>
          <h1>10+</h1>
          <p>Global Client</p>
        </div>
      </div>
    </div>
  )
}

export default KytzExperts;
