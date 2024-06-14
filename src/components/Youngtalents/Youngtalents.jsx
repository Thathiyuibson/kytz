import React, { useState } from 'react';
import './Youngtalents.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Importing images
import img1 from '../../images/image1.svg';
import img2 from '../../images/image2.svg';
import img3 from '../../images/image3.svg';
import img4 from '../../images/image4.svg';
import img5 from '../../images/image5.svg';
import img6 from '../../images/image6.svg';
import img7 from '../../images/image7.svg';
import img8 from '../../images/image8.svg';
import img9 from '../../images/image9.svg';

const Youngtalents = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex(4);
  };

  const handlePrev = () => {
    setStartIndex(0);
  };

  return (
    <div className='youngtalents'>
      <div className='talents-head'>
        <h1>Providing results with 
        <span className='green-txt'> <br />young talents</span></h1>
      </div>
      <ArrowBackIcon className='left-arrow' onClick={handlePrev}/>
      <ArrowForwardIcon className='right-arrow' onClick={handleNext}/>
      <div className='images-container'>
        {images.slice(startIndex, startIndex + 4).map((image, index) => (
          <img key={index} src={image} alt={`Talent ${index + 1}`} className='talent-image'/>
        ))}
      </div>
    </div>
  );
}

export default Youngtalents;

