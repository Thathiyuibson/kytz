import React from 'react'
import './WebsiteDesigns.css'
import img1 from '../../images/circlebg.svg';
import img2 from '../../images/php.svg';
import img3 from '../../images/w.svg';
import img4 from '../../images/js.svg';
import img5 from '../../images/bluew.svg';
import img6 from '../../images/startbg.svg';
import img7 from '../../images/woo.svg';
import img8 from '../../images/psbg.svg';
import img9 from '../../images/figmabg.svg';
import img10 from '../../images/Aibg.svg';
import img11 from '../../images/Star 1.svg';
import img12 from '../../images/boxbg.svg';

const WebsiteDesigns = () => {
  return (
    <div className='website-designs'>
      <div className='design-head'>
        <h1>
        Providing a wide range of <span className='txt-green'>Website Design & Development</span>
        </h1>
      </div>
      <div className='design-cards'>
        <div className='design-card1'>
            <div className='design1-title'>
                <h1>Custom Website <br/ >Design & Development</h1>
            </div>
            <div className='design1-bg'>
                < img src= {img1} alt='circle' />
            </div>
            <div className='design1-sub'>
                < img className='php' src= {img2} alt='php' />
                < img className='w' src= {img3} alt='w' />
                < img className='js' src= {img4} alt='js' />
                < img className='bleuw' src= {img5} alt='bleuw' />
            </div>
        </div>
        <div className='design-card2'>
            <div className='design2-title'>
                <h1>E-Commerce Website <br/ >Design & Development</h1>
            </div>
            <div className='design2-bg'>
                < img src= {img6} alt='circle' />
            </div>
            <div className='design2-sub'>
                < img className='w' src= {img3} alt='w' />
                < img className='woo' src= {img7} alt='w' />
            </div>
        </div>
        <div className='design-card3'>
            <div className='design3-title'>
                <h1>UI/UX Design & Branding</h1>
            </div>
            <div className='design3-bg'>
                < img src= {img12} alt='circle' />
            </div>
            <div className='design3-sub'>
                < img className='ps' src= {img8} alt='ps' />
                < img className='figmabg' src= {img9} alt='figmabg' />
                < img className='Aibg' src= {img10} alt='Aibg' />
            </div>
        </div>
        <div className='design-card4'>
            <div className='design4-title'>
                <h1>Digital Marketing & SEO</h1>
            </div>
            <div className='design4-bg'>
                < img src= {img11} alt='bigstar' />
            </div>
            <div className='design4-sub'>
            < img className='w' src= {img3} alt='w' />
            < img className='bleuw' src= {img5} alt='bleuw' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteDesigns
