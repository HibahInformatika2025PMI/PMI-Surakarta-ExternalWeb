import React from 'react'

import { Colors } from '../../../themes/ColorPallete'
import { Heading, Keterangan } from '../../../themes/Typography'

import { GradientRedPurpleButton } from '../Button'

const CardHomepage = ({ icon, title, description, buttonLabel, onButtonClick, className='', style={}, ...props }) => {
  return (
    <div
      className={`max-w-[400px] rounded-3xl p-5 shadow-md ${className}`}
      style={{
        backgroundColor: Colors.primary.white, ...style
      }}
      {...props}
    >
      <div className='flex items-center mb-4'>
        {/* Icon */}
        {icon && (
          <div className='w-12 h-12 rounded-full flex items-center justify-center' style={{ background:Colors.gradient.gradient3 }}>
            {icon}
          </div>
        )}

        {/* Title */}
        <Heading className={'text-2xl ml-3'} style={{ color: Colors.primary.red }}>
          {title}
        </Heading>
      </div>

      {/* Description */}
      <Keterangan className={'line-clamp-4 mb-5'}>
        {description}
      </Keterangan>

      {/* Button */}
      {buttonLabel && (
        <div className='flex justify-center'>
          <GradientRedPurpleButton className={'w-full'} onClick={onButtonClick}>
            {buttonLabel}
          </GradientRedPurpleButton>
        </div>
      )}
    </div>
  )
}

export default CardHomepage