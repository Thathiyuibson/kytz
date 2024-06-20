import React from 'react';
import './SustainableWebsites.css';
import img4 from '../../images/power.svg';
import img5 from '../../images/cloud.svg';
import img6 from '../../images/rocket.svg';

const SustainableWebsites = () => {
  const featureData = [
    {
      img: img4,
      alt: 'power',
      heading: 'Higher Speed & performance',
      description: 'Experience unparalleled website speed and flawless performance, ensuring your visitors enjoy a seamless, premium browsing experience that keeps them engaged and coming back for more.',
    },
    {
      img: img5,
      alt: 'cloud',
      heading: 'Reduced Carbon emissions',
      description: 'Showcase your commitment to sustainability by significantly lowering your website\'s carbon footprint, positioning your brand as a leader in environmental responsibility and innovation.',
    },
    {
      img: img6,
      alt: 'rocket',
      heading: 'Improved Conversion rates',
      description: 'Optimize your website for superior user experience, leading to higher conversion rates and maximizing your business\'s revenue potential through enhanced customer satisfaction and trust.',
    },
  ];

  return (
    <div className="sustainablewebsites">
      <div className="bussiness">
        <h1>How sustainable websites enhance your business's success</h1>
        <div className="horizontal-dashed-line"></div>
      </div>
      <div className="wrapper2">
        {featureData.map(({ img, alt, heading, description }, index) => (
          <div key={index} className={`lcwd-${index + 1}`}>
            <div className={alt}>
              <img src={img} alt={alt} />
            </div>
            <div className={`${alt}-head`}>
              <h1>{heading}</h1>
            </div>
            <div className={`${alt}-para`}>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainableWebsites;