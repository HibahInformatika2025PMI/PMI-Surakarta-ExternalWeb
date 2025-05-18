/***
 * This section will display the PMR image and the description of the PMR.
 * This section is a sub-section of PMR page.
 */

import React from 'react'

import pmrImage from '../../../assets/images/pmr_jumbara-2017.jpg'
import { AboutPMR1, PMRMember } from '../../../assets/text/PMRData'

import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import Heading from '../../../themes/typography/Heading'

const FirstSection = ({ className }) => {
  return (
    <div className={`flex flex-col md:flex-row md:gap-10  ${className}`}>
      {/* Text Section */}
      <div className='w-full md:w-2/3 mb-4'>
        <AboutPMR1 />

        <div
          className='w-full flex flex-row justify-around items-center px-8 py-4'
          style={{ backgroundColor: PrimaryColor.red, color: PrimaryColor.white }}
        >
          <Heading className='w-1/3'>Anggota PMR di Kota Surakarta</Heading>
          <PMRMember className={'flex flex-col md:flex-row gap-10'}/>
        </div>
      </div>

      {/* Image Section */}
      <div className='w-full md:w-1/3 self-center mb-6'>
        <img
          src={pmrImage}
          alt='PMR'
          className='max-w-full max-h-full object-contain rounded-xl'
          style={{ color: PrimaryColor.red, border: '5px solid' }}
        />
      </div>
    </div>
  )
}

export default FirstSection