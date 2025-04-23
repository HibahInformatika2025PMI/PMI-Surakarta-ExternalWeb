/***
 * This is the homepage component.
 */

import React from 'react'
import BannerSection from './BannerSection'
import ServicesSection from './ServicesSection'
import GriyaPMISection from './GriyaPMISection'

const Homepage = () => {
  return (
    <div>
      <BannerSection className={'mb-[75px]'} />

      <ServicesSection className={'mb-[75px]'} />

      <GriyaPMISection className={'mb-[75px]'} />
    </div>
  )
}

export default Homepage