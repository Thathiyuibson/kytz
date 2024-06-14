import React from 'react'
import './StepsWeFollow.css'
import img1 from '../../images/computer.svg';
import img2 from '../../images/setting.svg';

const StepsWeFollow = () => {
  return (
    <div className='stepswefollow'>
        <div className='wefollow'>
            <h1>We Follow <br/ > Sustainability In Every Step</h1>
        </div>
        <div className='card-holder'>
            <div className='card-holder1'>
                < img src= {img1} alt='computer' />
                <div className='computer-title'>
                    <h1>Eco-Friendly <br/ > UI/UX Designs
                    </h1>
                </div>
                <div className='computer-para'>
                    <p>We prioritize simplicity and efficiency in our
                    designs to minimize resource consumption.</p>
                </div>
            </div>
            <div className='card-holder2'>
                < img src= {img2} alt='setting' />
                <div className='setting-title'>
                    <h1>Efficient Coding <br/ > Practices
                    </h1>
                </div>
                <div className='setting-para'>
                    <p>We use clean, optimized code to lower server load and energy consumption, enhancing performance and sustainability.</p>
                </div>
            </div>
            <div className='card-holder2'>
                < img src= {img2} alt='setting' />
                <div className='setting-title'>
                    <h1>Efficient Coding <br/ > Practices
                    </h1>
                </div>
                <div className='setting-para'>
                    <p>We use clean, optimized code to lower server load and energy consumption, enhancing performance and sustainability.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StepsWeFollow
