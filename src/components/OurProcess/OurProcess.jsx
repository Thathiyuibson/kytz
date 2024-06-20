import React from 'react'
import './OurProcess.css'
import img1 from '../../images/globebig.svg';

const OurProcess = () => {
  return (
    <div className='our-process'>
      <div className='left-div'>
        < img src= {img1} alt='bigglobe' />
        <div className='process-title'>
          <h1>Our Process</h1>
        </div>
        <div className='process-sub'>
          <h3>- User Research</h3>
          <h3>- Wireframes</h3>
          <h3>- Figma Prototypes</h3>
          <h3>- Development</h3>
          <h3>- QA & Validation</h3>
        </div>
      </div>
      <div className='right-div'>
        <div className='process-card-1'>
          <div className='wrapper-01'>
          <div className='card-01'>
            <h1>01</h1>
          </div>
          <div className='card1-title'>
            <h1>User research</h1>
          </div>
          <div className='card1-text'>
            <p>User research aims to
            understand users' expectations and goals and use that knowledge to design an intuitive, easy-to-use, and engaging website.</p>
          </div>
          </div>
        </div>
        <div className='process-card-2'>
          <div className='wrapper-02'>
          <div className='card-02'>
            <h1>02</h1>
          </div>
          <div className='card2-title'>
            <h1>Wireframes</h1>
          </div>
          <div className='card2-text'>
            <p>The wireframe will give an early picture of the entire website structure. This will help the designers get valuable feedback from the client before moving on to further stages.</p>
          </div>
          </div>
        </div>
        <div className='process-card-3'>
          <div className='wrapper-03'>
          <div className='card-03'>
            <h1>03</h1>
          </div>
          <div className='card3-title'>
            <h1>Figma Prototypes</h1>
          </div>
          <div className='card3-text'>
            <p>The wireframe will give an early picture of the entire website structure. This will help the designers get valuable feedback from the client before moving on to further stages.</p>
          </div>
          </div>
        </div>
        <div className='process-card-4'>
          <div className='wrapper-04'>
          <div className='card-04'>
            <h1>04</h1>
          </div>
          <div className='card4-title'>
            <h1>Development</h1>
          </div>
          <div className='card4-text'>
            <p>The wireframe will give an early picture of the entire website structure. This will help the designers get valuable feedback from the client before moving on to further stages.</p>
          </div>
          </div>
        </div>
        <div className='process-card-5'>
          <div className='wrapper-05'>
          <div className='card-05'>
            <h1>05</h1>
          </div>
          <div className='card5-title'>
            <h1>QA & Validation</h1>
          </div>
          <div className='card5-text'>
            <p>The wireframe will give an early picture of the entire website structure. This will help the designers get valuable feedback from the client before moving on to further stages.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProcess
