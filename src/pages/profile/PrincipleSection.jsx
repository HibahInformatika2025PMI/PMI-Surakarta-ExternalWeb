/***
 * This section contains 7 principle of Palang Merah.
 * This section is a sub-section of Profile page.
 */

import React from 'react'

import { AboutPrinciple } from '../../assets/text/ProfileData'
import TopiPMI from '../../assets/images/pmi_topi.jpg'
import SevenPrinciples from '../../assets/images/tujuh-prinsip-dasar-palang-merah.png'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import Heading from '../../themes/typography/Heading'

const PrincipleSection = ({ className }) => {
  return (
    <div className={`relative flex flex-col lg:flex-row items-center px-[50px] md:px-[100px] xl:px-[200px] gap-10 ${className}`}>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src={TopiPMI}
          alt="Background"
          className='w-full h-full object-cover object-[50%_36%]'
          />
        <div className='absolute inset-0 opacity-50' style={{ background: PrimaryColor.black }} />
      </div>

      {/* Title and description */}
      <div className='relative z-10 flex flex-col lg:flex-row items-center w-full py-[30px] gap-10'>
        <img
          src={SevenPrinciples}
          alt="7 Prinsip Dasar Palang Merah"
          className='w-[300px] object-cover flex-shrink-0'
        />

        <div className='flex flex-col grow'>
          <Heading 
            className={'capitalize text-center lg:text-left mb-5'}
            style={{ color: PrimaryColor.white }}
          >
            Tujuh Prinsip Dasar Gerakan Palang Merah dan Bulan Sabit Merah Internasional
          </Heading>
          
          <AboutPrinciple />
        </div>
      </div>
    </div>
  )
}

export default PrincipleSection