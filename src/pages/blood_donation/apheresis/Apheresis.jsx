/***
 * This is the page for the apheresis (Apheresis) of blood donation.
 */

import React from 'react'

import ApheresisTypeSection from './ApheresisTypeSection'
import ApheresisDescriptionSection from './ApheresisDescriptionSection'

import { AboutApheresis, ApheresisRequirementsData, ApheresisProceduresData } from '../../../assets/dummy_text/ApheresisData'
import PMIApheresis1 from '../../../assets/images/pmi_apheresis1.jpg'

import BannerLayout from '../../../components/shared/BannerLayout'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

const Apheresis = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  return (
    <div>
      <BannerLayout
        image={PMIApheresis1}
        imageDescription='Donor Darah Apheresis PMI Kota Surakarta'
        title='Donor Darah Apheresis'
        className='mb-[75px]'
      >
        <AboutApheresis />
      </BannerLayout>

      <ApheresisTypeSection className={'mb-[75px]'} />

      <ApheresisDescriptionSection className={'mb-[75px]'} />

      <div className='flex flex-col lg:flex-row gap-10 px-[160px] pb-[75px]'>
        <ApheresisRequirementsData title='Syarat & Prosedur Donor Darah Apheresis' />
        <ApheresisProceduresData title='Prosedur Donor Darah Apheresis' />
      </div>
    </div>
  )
}

export default Apheresis