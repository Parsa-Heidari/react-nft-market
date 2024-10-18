import React from 'react'

import Banner from '../components/Banner'
import New from '../components/New'
import TopSellers from '../components/TopSellers'
import ExploreSection from '../components/ExploreSection'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
  return (
    <div className='mt-20'>
      <Banner />
      <New />
      <TopSellers />
      <ExploreSection />
      <HowItWorks />
    </div>
  )
}

export default Home
