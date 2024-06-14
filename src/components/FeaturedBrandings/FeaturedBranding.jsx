import React, { useState, useEffect } from 'react';
import './FeaturedBranding.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import img1 from '../../images/trisekt.svg';
import img2 from '../../images/girl.svg';
import img3 from '../../images/blueball.svg';
import img4 from '../../images/Component 5.svg';
import img5 from '../../images/strong.svg';
import img6 from '../../images/stronghold.svg';
import img7 from '../../images/venzobox.svg';
import img8 from '../../images/menuapple.svg';
import img9 from '../../images/venzophn.svg';

const FeaturedBranding = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false)
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [currentImage3, setCurrentImage3] = useState(0);

  const images1 = [img1, img2, img3];
  const images2 = [img4, img5, img6];
  const images3 = [img7, img8, img9];

  useEffect(() => {
    let interval1;
    if (hovered1) {
      interval1 = setInterval(() => {
        setCurrentImage1((prevImage) => (prevImage + 1) % images1.length);
      }, 1000); 
    } else {
      clearInterval(interval1);
    }
    return () => clearInterval(interval1);
  }, [hovered1, images1.length]);

  useEffect(() => {
    let interval2;
    if (hovered2) {
      interval2 = setInterval(() => {
        setCurrentImage2((prevImage) => (prevImage + 1) % images2.length);
      }, 1000); 
    } else {
      clearInterval(interval2);
    }
    return () => clearInterval(interval2);
  }, [hovered2, images2.length]);

  useEffect(() => {
    let interval3;
    if (hovered3) {
      interval3 = setInterval(() => {
        setCurrentImage3((prevImage) => (prevImage + 1) % images3.length);
      }, 1000); 
    } else {
      clearInterval(interval3);
    }
    return () => clearInterval(interval3);
  }, [hovered3, images3.length]);

  return (
    <div className='featuredbranding'>
      <div className='branding-head'>
        <h1>Featured Brandings</h1>
      </div>
      <div className='gybi-btn'>
        <button>Get your brand identity today</button>
        <ArrowOutwardIcon className='icon-arrow'/>
      </div>
      
      <div 
        className='mainbox-1' 
        onMouseEnter={() => setHovered1(true)} 
        onMouseLeave={() => setHovered1(false)}
      >
        <div className={`subbox-1 ${hovered1 ? 'hovered' : ''}`}>
          <h1>An educational <br/ > Brand identity</h1>
          <div className='branding'>
            <h3>Branding</h3>
          </div>
          <div className='weeks2'>
            <h3>2 Weeks</h3>
          </div>
        </div>
        <div className='subbox-2'>
          <img src={images1[currentImage1]} alt="Slideshow" />
        </div>
      </div>

      <div 
        className='mainbox-2' 
        onMouseEnter={() => setHovered2(true)} 
        onMouseLeave={() => setHovered2(false)}
      >
        <div className={`subbox-3 ${hovered2 ? 'hovered' : ''}`}>
          <h1>Cyber Security <br/ >Branding</h1>
        </div>
        <div className='subbox-4'>
          <img src={images2[currentImage2]} alt="Slideshow" />
        </div>
      </div>

      <div 
        className='mainbox-3' 
        onMouseEnter={() => setHovered3(true)} 
        onMouseLeave={() => setHovered3(false)}
      >
        <div className={`subbox-5 ${hovered3 ? 'hovered' : ''}`}>
          <h1>Tech Company <br/ >Brand identity</h1>
        </div>
        <div className='subbox-6'>
          <img src={images3[currentImage3]} alt="Slideshow" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedBranding;

