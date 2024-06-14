import React, { useState } from 'react';
import './FeaturedWebsites.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img1 from '../../images/wordpress.svg';
import img2 from '../../images/Artham Mockup.svg';
import img3 from '../../images/sustainble.svg';
import img4 from '../../images/RFL Mockup.svg';

const FeaturedWebsites = () => {
  const [isCard2Visible, setIsCard2Visible] = useState(false);

  const handleArrowClick = () => {
    setIsCard2Visible(!isCard2Visible);
  };

  return (
    <div className='featuredwebsites'>
      <div className='websites-heading'>
        <h1>Featured Websites</h1>
      </div>
      <div className='gsst-btn'>
        <button>Get your sustainable site today
          <ArrowOutwardIcon className='arrow-icons' />
        </button>
      </div>
      <div className={`main-card ${isCard2Visible ? 'show-card-2' : ''}`}>
        <div className='card-1'>
          <div className='wordpress'>
            <img src={img1} alt='wordpress' />
          </div>
          <div className='client'>
            <h1>Client: Artham beauty</h1>
          </div>
          <div className='card1-title'>
            <h1>Designed and delivered a modern website</h1>
          </div>
          <div className='key-points'>
            <h2>SEO optimized</h2>
            <h2>End to End design and development</h2>
          </div>
          <div className='visit-btn'>
            <button>Visit Site</button>
            <ArrowOutwardIcon className='icon' />
          </div>
          <div className='Arthammockup'>
            <img src={img2} alt='artham' />
          </div>
        </div>
        <div className='card-2'>
          <div className='sustainable'>
            <img src={img3} alt='sustainable' />
          </div>
          <div className='client2'>
            <h1>Client: RFL Valves</h1>
          </div>
          <div className='card2-title'>
            <h1>Low carbon site for RFL Valves</h1>
          </div>
          <div className='key-points2'>
            <h2>SEO optimized</h2>
            <h2>End to End design and development</h2>
          </div>
          <div className='visit-btn2'>
            <button>Visit Site</button>
            <ArrowOutwardIcon className='icon2' />
          </div>
          <div className='Rflmockup'>
            <img src={img4} alt='rfl' />
          </div>
        </div>
      </div>
      <ArrowBackIcon className='arrow-left' onClick={handleArrowClick} />
      <ArrowForwardIcon className='arrow-right' onClick={handleArrowClick} />
    </div>
  );
}

export default FeaturedWebsites;
