/***
 * This is the homepage (Beranda) of the website.
 */

import React from 'react'

import BannerSection from './BannerSection'
import ServicesSection from './ServicesSection'
import GriyaPMISection from './GriyaPMISection'
import DonationSection from './DonationSection'
import TopNewsSection from './TopNewsSection'
import QuotesSection from './QuotesSection'
import PartnershipSection from './PartnershipSection'

import UseScrollToTop from '../../hooks/UseScrollToTop'

const Homepage = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  return (
    <div>
      <BannerSection className={'mb-[75px]'} />

      <ServicesSection className={'mb-[75px]'} />

      <GriyaPMISection className={'mb-[75px]'} />

      <DonationSection className={'mb-[75px]'} />

      <TopNewsSection className={'mb-[100px]'} />

      <QuotesSection className={'mb-[75px]'} />

      <PartnershipSection className={'pb-[75px]'} />
    </div>
  )
}

export default Homepage