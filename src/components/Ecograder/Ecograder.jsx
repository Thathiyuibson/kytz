import React from 'react'
import './Ecograder.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Ecograder = () => {
  return (
    <div className='ecograder'>
        <div className='green-div'>
            <div className='green-head'>
                <h1>Lets build a sustainable future & technology together</h1>
            </div>
            <div className='ecograder-btn'>
                <button>Check your websites ecograder</button>
                <ArrowOutwardIcon className='arrow-icn'/>
            </div>
        </div>
    </div>
  )
}

export default Ecograder
