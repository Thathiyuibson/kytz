import React from 'react'
import './Footer.css'
import img1 from '../../images/footerlogo.svg';
import img2 from '../../images/carbon.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerdiv-1'>
      <div className='footer-logo'>
        < img src={img1} alt='kytz-logo' />
      </div>
      </div>
      <div className='footerdiv-2'>
        <h1>QUICK LINKS</h1>
        <h3>Home</h3>
        <h3>Company</h3>
        <h3>Website Case Studies</h3>
        <h3>Brand Case Studies</h3>
        <h3>Contact</h3>
      </div>
      <div className='footerdiv-3'>
        <h1>SOCIAL MEDIA</h1>
        <h3>LinkedIn</h3>
        <h3>Youtube</h3>
        <h3>Instagram</h3>
        <h3>X</h3>
      </div>
      <div className='footerdiv-4'>
        < img src={img2} alt='carbon' />
        <h1>Cleaner than 86% of pages tested</h1>
        <h3>100% Green website Hosted on Green server</h3>
      </div>
    </div>
  )
}

export default Footer
