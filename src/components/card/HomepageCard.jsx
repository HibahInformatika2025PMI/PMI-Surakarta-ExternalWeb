import React from 'react'

import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import GradientColor from '../../themes/color_pallete/GradientColor'

import Heading from '../../themes/typography/Heading'
import Description from '../../themes/typography/Description'

import GradRedPurpleButton from '../buttons/GradRedPurpleButton'

const HomepageCard = ({ icon, title, description, buttonLabel, onButtonClick, className='', style={}, ...props }) => {
  return (
    <div
      className={`max-w-[400px] rounded-3xl p-5 shadow-md ${className}`}
      style={{
        backgroundColor: PrimaryColor.white, ...style
      }}
      {...props}
    >
      <div className='flex items-center mb-4'>
        {/* Icon */}
        {icon && (
          <div className='w-12 h-12 rounded-full flex items-center justify-center' style={{ background:GradientColor.gradient3 }}>
            {icon}
          </div>
        )}

        {/* Title */}
        <Heading className={'text-2xl ml-3'} style={{ color: PrimaryColor.red }}>
          {title}
        </Heading>
      </div>

      {/* Description */}
      <Description className={'line-clamp-4 mb-5'}>
        {description}
      </Description>

      {/* Button */}
      {buttonLabel && (
        <div className='flex justify-center'>
          <GradRedPurpleButton className={'w-full'} onClick={onButtonClick}>
            {buttonLabel}
          </GradRedPurpleButton>
        </div>
      )}
    </div>
  )
}

export default HomepageCard