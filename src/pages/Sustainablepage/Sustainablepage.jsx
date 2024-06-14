import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import FeaturedWebsites from '../../components/FeaturedWebsites/FeaturedWebsites'
import Ecograder from '../../components/Ecograder/Ecograder'
import Footer from '../../components/Footer/Footer'
import SustainableAnnouncement from '../../components/SustainableAnnouncement/SustainableAnnouncement'
import Sourcepage from '../../components/Sourcepage/Sourcepage'
import Responsive from '../../components/Responsive/Responsive'
import StepsWeFollow from '../../components/StepsWeFollow/StepsWeFollow'

const Sustainablepage = () => {
  return (
    <div>
        <Navbar/>
        <SustainableAnnouncement/>
        <Sourcepage/>
        <Responsive />
        <StepsWeFollow/>
        <FeaturedWebsites/>
        <Ecograder/>
        <Footer/>
    </div>
  )
}

export default Sustainablepage
