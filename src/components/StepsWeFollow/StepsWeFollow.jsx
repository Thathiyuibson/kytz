import React, { memo } from 'react';
import './StepsWeFollow.css';
import img1 from '../../images/computer.svg';
import img2 from '../../images/setting.svg';
import img3 from '../../images/database.svg';

const Card = memo(({ img, title, paragraph }) => (
  <>
    <div className="card-holder">
      <img src={img} alt={title.replace(/ /g, '')} />
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="card-para">
        <p>{paragraph}</p>
      </div>
    </div>
  </>
));

const StepsWeFollow = () => {
  const cardData = [
    {
      img: img1,
      title: 'Eco-Friendly UI/UX Designs',
      paragraph: 'We prioritize simplicity and efficiency in our designs to minimize resource consumption.',
    },
    {
      img: img2,
      title: 'Efficient Coding Practices',
      paragraph: 'We use clean, optimized code to lower server load and energy consumption, enhancing performance and sustainability.',
    },
    {
      img: img3,
      title: 'Green Hosting Solutions',
      paragraph: 'We partner with eco-friendly hosting providers that use renewable energy sources to power our websites.',
    },
  ];

  return (
    <div className="stepswefollow">
      <div className="wefollow">
        <h1>We Follow <br /> Sustainability In Every Step</h1>
      </div>
      <div className="horizontal-dasheed-line"></div>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} img={card.img} title={card.title} paragraph={card.paragraph} />
        ))}
      </div>
    </div>
  );
};

export default StepsWeFollow;