/***
 * This component is used as a template for the donation Method cards in Donation page.
 * 
 * Is used in:
 * - DonationHomeData.jsx
 */

import React from 'react'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import Body from '../../themes/typography/Body'
import Subtitle from '../../themes/typography/Subtitle'

const DonationMethodCard = ({ icon, title, description, className, style, ...props }) => {
  return (
    <div
      className={`overflow-hidden px-2 ${className}`}
      style={{ backgroundColor: PrimaryColor.white, ...style }}
      {...props}
    >
      {/* Icon Part */}
      <div className='flex items-center justify-center mb-6' style={{ color: PrimaryColor.red }}>
        {icon}
      </div>

      {/* Title Part */}
      <Body className='mb-4 text-center' style={{ color: PrimaryColor.red }}>
        <strong>{title}</strong>
      </Body>

      {/* Description Part */}
      <Subtitle className='mb-3 text-center'>
        {description}
      </Subtitle>
    </div>
  )
}

export default DonationMethodCard