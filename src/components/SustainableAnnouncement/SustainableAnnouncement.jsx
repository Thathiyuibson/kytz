import React, { useState, useEffect } from 'react';
import './SustainableAnnouncement.css';
import img1 from '../../images/Group 3.svg';

const SustainableAnnouncement = () => {
  const texts = ['Sustainable Future', 'Lovely Future', 'Greener Future'];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className='sustainable-announcement'>
      <div className='centered-div'>
        <div className='green-letters'>
            <h2>Saving our planet by creating</h2>
        </div>
        <div className='changing-letters'>
            <h1>{texts[currentText]}</h1>
            <img src={img1} alt='green' />
        </div>
        <div className='sustainable-para'>
            <p>Our commitment to eco-friendly practices ensures that your digital presence supports global sustainability efforts.</p>
        </div>
      </div>
    </div>
  );
};

export default SustainableAnnouncement;
