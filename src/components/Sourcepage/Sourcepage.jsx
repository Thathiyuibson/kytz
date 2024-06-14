import React from 'react'
import './Sourcepage.css'
import img1 from '../../images/Rectangle 42.svg';

const Sourcepage = () => {
  return (
    <div className='sourcepage'>
      <img src= {img1} alt='background' />
      <div className='according'>
        <h2>According to www.sustainablewebdesign.org</h2>
      </div>
      <div className='centered-resource'>
        <div className='centered-resource1'>
          <h1>
            The internet currently <br/ > produces approximately <span className='color-text'>3.7% of global carbon emissions.</span>
          </h1>
        </div>
        <div className='vertical-line'></div>
        <div className='centered-resource2'>
          <h1>
          If the Internet was a <br/ > country, it would be the <span className='color-text'>4th largest polluter.</span>
          </h1>
        </div>
      </div>
      <div className='report'>
        <h1>Report 2024</h1>
      </div>
      <div className='viewsource'>
        <h1>View source</h1>
      </div>
    </div>
  )
}

export default Sourcepage
