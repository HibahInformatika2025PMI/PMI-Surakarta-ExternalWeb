/***
 * This is the page for the PMR (Palang Merah Remaja) of volunteers
 */

import React from 'react'

import FirstSection from './FirstSection'

import { AboutPMR2 } from '../../../assets/text/PMRData'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

import PageTitle from '../../../themes/typography/PageTitle'

const PMR = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();
  
  return (
    <div className='px-[30px] md:px-[60px] lg:px-[100px] xl:px-[160px] py-[48px] w-full flex flex-col'>
      <PageTitle className={'mb-8'}>Palang Merah Remaja</PageTitle>
      <FirstSection className={'mb-6'}/>
      <AboutPMR2 className={'mb-4'} />
    </div>
  )
}

export default PMR