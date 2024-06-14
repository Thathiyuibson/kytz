import React from 'react'
import './AboutKytz.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import img1 from '../../images/Group 3.svg';
import img2 from '../../images/globe.svg';
import img3 from '../../images/points.svg';
import img4 from '../../images/power.svg';
import img5 from '../../images/cloud.svg';
import img6 from '../../images/rocket.svg';
import img7 from '../../images/meter.svg';
import img8 from '../../images/console.svg';


const AboutKytz = () => {
  return (
    <div className='about-kytz'>
        <div className='main-head'>
            <h1>What is Kytify ?</h1>
        </div>
        <div className='div-1'>
          <div className='subdiv-1'>
          <img src= {img1} alt='leaf' />
          <h1>
            Making Brands & Websites <span>Sustainble</span>
          </h1>
          </div>
          <div className='subdiv-2'>
            <div>
              <img src= {img7} alt='meter' />
            </div>
            <div className='console'>
              <img src= {img8} alt='console' />
            </div>
          </div>
          <div className='subdiv-3'>
          <img src= {img1} alt='leaf' />
          <h1>We are committed to build low carbon websites & environment by reducing carbon footprint</h1>
          </div>
          
        </div>
        <div className='div-2'>
          <div className='subdiv2-1'>
            <div className='subdiv2-head'>
              <h1>Why we craft
              only sustainable websites?
              </h1>
            </div>
            <div className='globe-img'>
              <img src= {img2} alt='globe' />
            </div>
            <div className='subdiv2-para'>
              <p>Choosing a sustainable website isn't just about reducing your carbon footprint. it's about aligning your digital presence with your values, showcasing your commitment to a greener future.</p>
            </div>
          </div>
          <div className='subdiv2-2'>
            <div className='subdiv2-heading'>
              <h1>How it benefits globally?</h1>
            </div>
            <div className='points-img'>
              <h3 className='points-img1'>Better for your brand</h3>
              < img src= {img3} alt='tick' />
              <h3 className='points-img2'>Better for environment</h3>
              < img src= {img3} alt='tick' />
              <h3 className='points-img3'>Our websites are 67% less polluting than industry average</h3>
              < img src= {img3} alt='tick' />
            </div>
          </div>
        </div>
        <div className='div-3'>
          <div className='lcwd'>
            <h1>Low Carbon Websites Delivers</h1>
          </div>
          <div className='learnmore'>
            <button>Learn more</button>
            <ArrowOutwardIcon className='arrow-icon'/> 
          </div>
          <div className='horizontal-line'></div>
          <div className='wrapper'>
          <div className='lcwd-1'>
            <div className='power'>
              <img src= {img4} alt='power' />
            </div>
            <div className='power-head'>
              <h1>Higher
              <br/> Speed & performance</h1>
            </div>
            <div className='power-para'>
              <p>Experience unparalleled website speed and flawless performance, ensuring your visitors enjoy a seamless, premium browsing experience that keeps them engaged and coming back for more.</p>
            </div>
          </div>
          <div className='lcwd-2'>
            <div className='cloud'>
              <img src= {img5} alt='cloud' />
            </div>
            <div className='cloud-head'>
              <h1>Reduced
              <br/> Carbon emissions</h1>
            </div>
            <div className='cloud-para'>
              <p>Showcase your commitment to sustainability by significantly lowering your website's carbon footprint, positioning your brand as a leader in environmental responsibility and innovation.</p>
            </div>
          </div>
          <div className='lcwd-3'>
            <div className='rocket'>
              <img src= {img6} alt='rocket' />
            </div>
            <div className='rocket-head'>
              <h1>Improved
              <br/> Conversion rates</h1>
            </div>
            <div className='rocket-para'>
              <p>Optimize your website for superior user experience, leading to higher conversion rates and maximizing your business's revenue potential through enhanced customer satisfaction and trust.</p>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default AboutKytz
