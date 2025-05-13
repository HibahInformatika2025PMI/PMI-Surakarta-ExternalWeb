/***
 * This component is used as a template for the donation cards in Donation page.
 * 
 * Is used in:
 * - DonationHomeData.jsx
 */

import React from 'react'

import GradRedPurpleButton from '../buttons/GradRedPurpleButton'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../themes/typography/PageSubTitle'
import Subtitle from '../../themes/typography/Subtitle'

const DonationTypesCard = ({ icon, title, description, button, path, className, style, ...props }) => {
  return (
    <div 
      className={`max-w-[500px] rounded-3xl shadow-md overflow-hidden p-6 ${className}`}
      style={{ backgroundColor: PrimaryColor.white, ...style }}
      {...props}
    >
      {/* Icon Part */}
      <div className='flex items-center justify-center mb-6' style={{ color: PrimaryColor.red }}>
        {icon}
      </div>

      {/* Title Part */}
      <PageSubTitle className='mb-4 text-center' style={{ color: PrimaryColor.red }}>
        {title}
      </PageSubTitle>

      {/* Description Part */}
      <Subtitle className='mb-3 text-center'>
        {description}
      </Subtitle>
      
      {/* Button Part */}
      <GradRedPurpleButton className='flex justify-center w-full' path={path}>
        {button}
      </GradRedPurpleButton>
    </div>
  )
}

export default DonationTypesCard