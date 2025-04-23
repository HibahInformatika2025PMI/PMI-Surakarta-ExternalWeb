/***
 * This component is used as a template for the cards on the homepage.
 * 
 * Is used in:
 * - 
 */

import React from 'react'

import GradRedPurpleButton from '../buttons/GradRedPurpleButton'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import SubHeading from '../../themes/typography/SubHeading'
import Subtitle from '../../themes/typography/Subtitle'

const HomepageCard = ({ icon, title, description, buttonLabel, path, className, style, ...props }) => {
  return (
    <div
      className={`max-w-[400px] rounded-3xl p-5 shadow-md ${className}`}
      style={{ background: PrimaryColor.white, ...style }}
      {...props}
    >
      <div className='flex items-center mb-4'>
        {/* Icon Part */}
        <div
          className='w-12 h-12 rounded-full flex items-center justify-center' 
          style={{ background: GradientColor.gradient3 }}
        >
          {icon}
        </div>

        {/* Title Part */}
        <SubHeading className={'ml-4'} style={{ color: PrimaryColor.red }}>
          {title}
        </SubHeading>
      </div>

        {/* Description Part */}
        <Subtitle className={'text-justify line-clamp-4 mx-2 my-5'}>
          {description}
        </Subtitle>

        {/* Button Part */}
        <GradRedPurpleButton className={'flex justify-center w-full'} path={path}>
          {buttonLabel}
        </GradRedPurpleButton>
    </div>
  )
}

export default HomepageCard