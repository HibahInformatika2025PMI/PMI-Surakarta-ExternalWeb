/***
 * This component is a layout for the banner of the page.
 * 
 * is used in :
 * - Apheresis.jsx
 * - ProceduresRequirements.jsx
 * - Profile.jsx
 */

import React from 'react'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageTitle from '../../themes/typography/PageTitle'

const BannerLayout = ({ image, imageDescription, title, children, className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={image}
        alt={imageDescription}
        className='w-full h-[600px] object-cover'
      />

      <div className='absolute inset-0 opacity-30' style={{ background: GradientColor.gradient3 }} />
      <div className='absolute inset-0 opacity-70' style={{ background: GradientColor.gradient6 }} />

      <div className='absolute inset-0 flex items-center px-[50px] md:px-[100px] xl:px-[200px]'>
        <div className='flex flex-col'>
          <PageTitle className={'mb-4'} style={{ color: PrimaryColor.white }}>{title}</PageTitle>
          {children}
        </div>
      </div>
    </div>
  )
}

export default BannerLayout