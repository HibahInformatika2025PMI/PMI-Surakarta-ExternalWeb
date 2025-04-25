/***
 * This is the homepage (Beranda) of the website.
 */

import React from 'react'

import BannerSection from './BannerSection'
import ServicesSection from './ServicesSection'
import GriyaPMISection from './GriyaPMISection'
import DonationSection from './DonationSection'
import TopNewsSection from './TopNewsSection'

const Homepage = () => {
  return (
    <div>
      <BannerSection className={'mb-[75px]'} />

      <ServicesSection className={'mb-[75px]'} />

      <GriyaPMISection className={'mb-[75px]'} />

      <DonationSection className={'mb-[75px]'} />

      <TopNewsSection className={'mb-[75px]'} />
    </div>
  )
}

export default Homepage