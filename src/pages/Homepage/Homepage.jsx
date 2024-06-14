import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import AboutKytz from '../../components/AboutKytz/AboutKytz'
import KytzExperts from '../../components/KytzExperts/KytzExperts'
import Footer from '../../components/Footer/Footer'
import Ecograder from '../../components/Ecograder/Ecograder'
import FeaturedBranding from '../../components/FeaturedBrandings/FeaturedBranding'
import Youngtalents from '../../components/Youngtalents/Youngtalents'
import FeaturedWebsites from '../../components/FeaturedWebsites/FeaturedWebsites'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <AboutKytz/>
      <KytzExperts/>
      <FeaturedBranding/>
      <FeaturedWebsites/>
      <Youngtalents/>
      <Ecograder/>
      <Footer/>
    </div>
  )
}

export default Homepage
