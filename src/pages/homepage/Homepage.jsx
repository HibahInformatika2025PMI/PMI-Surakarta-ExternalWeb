import React from 'react'

import HeroSection from '../../components/homepage/HeroSection'
import ServicesSection from '../../components/homepage/ServicesSection'
import GriyaPMISection from '../../components/homepage/GriyaPMISection'
import DonationSection from '../../components/homepage/DonationSection'
import NewsSection from '../../components/homepage/NewsSection'
import QuotesSection from '../../components/homepage/QuotesSection'
import PartnerSection from '../../components/homepage/PartnerSection'
const Homepage = () => {
  return (
    <div>
      <div className="mb-[75px]">
        <HeroSection />
      </div>
      
      <div className="mb-[75px]">
        <ServicesSection />
      </div>
      
      <div className="mb-[100px]">
        <GriyaPMISection />
      </div>
      
      <div className="mb-[100px]">
        <DonationSection />
      </div>
      
      <div className="mb-[100px]">
        <NewsSection />
      </div>
      
      <div className="mb-[100px]">
        <QuotesSection />
      </div>

      <div className="pb-[100px]">
        <PartnerSection />
      </div>
    </div>
  )
}

export default Homepage