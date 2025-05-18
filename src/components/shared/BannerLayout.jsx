/***
 * This component is a layout for the banner of the page.
 * 
 * is used in :
 * - Apheresis.jsx
 * - ProceduresRequirements.jsx
 * - Training.jsx
 * - Profile.jsx
 * - Satgana.jsx
 * - FirstHomeSection.jsx
 */

import React from 'react'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageTitle from '../../themes/typography/PageTitle'

// Banner Layout 1 (text at the start)
export const BannerLayout1 = ({ image, imageDescription, title, children, className }) => {
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
          {title.split('\n').map((line, index) => (
            <PageTitle key={index} className={'mb-6'} style={{ color: PrimaryColor.white }}>
              {line}
            </PageTitle>
          ))}
          {children}
        </div>
      </div>
    </div>
  )
}

// Banner Layout 2 (text at the center)
export const BannerLayout2 = ({ image, imageDescription, title, children, className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={image}
        alt={imageDescription}
        className='w-full h-[500px] object-cover'
      />

      <div className='absolute inset-0 opacity-30' style={{ background: GradientColor.gradient3 }} />
      <div className='absolute inset-0 opacity-70' style={{ background: GradientColor.gradient6 }} />

      <div className='absolute inset-0 flex justify-center items-center px-[50px] md:px-[100px] xl:px-[200px]'>
        <div className='flex flex-col'>
          {title.split('\n').map((line, index) => (
            <PageTitle key={index} className={'mb-6 text-center'} style={{ color: PrimaryColor.white }}>
              {line}
            </PageTitle>
          ))}
          {children}
        </div>
      </div>
    </div>
  )
}

// Banner Layout 3 (text at the end)
export const BannerLayout3 = ({ image, imageDescription, title, children, className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={image}
        alt={imageDescription}
        className='w-full h-[300px] object-cover object-[50%_20%]'
      />

      <div className='absolute inset-0 opacity-70' style={{ background: GradientColor.gradient5 }} />
      <div className='absolute inset-0' style={{ background: GradientColor.gradient4 }} />

      <div className='absolute inset-0 flex justify-end items-center px-[50px] md:px-[100px] xl:px-[200px]'>
        <div className='flex flex-col'>
          {title.split('\n').map((line, index) => (
            <PageTitle key={index} className={'mb-6 text-end'} style={{ color: PrimaryColor.white }}>
              {line}
            </PageTitle>
          ))}
          {children}
        </div>
      </div>
    </div>
  )
}