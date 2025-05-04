/***
 * This is the page for the Pratama Clinic (Klinik Pratama) of health services
 */

import React from 'react'

import ClinicFacilitySection from './ClinicFacilitySection'
import ClinicServicesSection from './ClinicServicesSection'

import PratamaClinicImage from '../../../assets/images/pmi_poliklinik.jpg'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

import { GradientColor, PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import { AboutPratamaClinic } from '../../../assets/text/PratamaClinicData'


const PratamaClinic = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  return (
    <section>
      <AboutPratamaClinic
        title='Klinik Pratama PMI Surakarta'
        className='px-[50px] md:px-[100px] xl:px-[160px] py-[48px]'
        style={{ color: PrimaryColor.white, background: GradientColor.gradient1 }}
      />

      <img
        src={PratamaClinicImage}
        alt='Klinik Pratama PMI Surakarta'
        className='w-full h-[500px] object-cover object-[50%_60%]'
      />

      <ClinicFacilitySection
        className='px-[50px] md:px-[100px] xl:px-[160px] py-[75px]'
        style={{ backgroundColor: PrimaryColor.white }}
      />

      <ClinicServicesSection
        className='px-[50px] md:px-[100px] xl:px-[160px] py-[75px]'
      />
    </section>
  )
}

export default PratamaClinic