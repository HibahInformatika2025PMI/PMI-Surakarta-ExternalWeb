/***
 * This section contains short description about PMI.
 */

import React from 'react'

import SeragamPMI from '../../assets/images/pmi_seragam.jpg'
import { AboutPMI } from '../../assets/dummy_text/ProfileData'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageTitle from '../../themes/typography/PageTitle'

const AboutPMISection = ({ className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={SeragamPMI}
        alt="Seragam PMI"
        className='w-full h-[600px] scale-110 object-cover'
      />

      <div className='absolute inset-0 opacity-30' style={{ background: GradientColor.gradient3 }} />
      <div className='absolute inset-0 opacity-70' style={{ background: GradientColor.gradient6 }} />

      <div className='absolute inset-0 flex items-center px-[50px] md:px-[100px] xl:px-[200px]'>
        <div className='flex flex-col'>
          <PageTitle className={'mb-4'} style={{ color: PrimaryColor.white }}>Tentang Palang Merah Indonesia</PageTitle>
          <AboutPMI className={'mt-4 ml-2'}/>
        </div>
      </div>
    </div>
  )
}

export default AboutPMISection