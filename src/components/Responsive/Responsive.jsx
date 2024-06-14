import React from 'react'
import './Responsive.css'
import img1 from '../../images/responsive.svg';

const Responsive = () => {
  return (
    <div className='responsive'>
      <div className='responsive-img'>
        < img src= {img1} alt='responsive' />
      </div>
      <div className='dashed-line'></div>
      <div className='responsive-txt'>
        <h1>
        No matter what device you use <br/ >
        to visit the website, it will always be <span className='black-txt'>sustainable & responsive</span>
        </h1>
      </div>
    </div>
  )
}

export default Responsive
