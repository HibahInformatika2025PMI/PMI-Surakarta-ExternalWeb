import React from 'react'

import { Colors } from '../../../themes/ColorPallete'
import { Keterangan, SubHeading } from '../../../themes/Typography'

import { GradientRedPurpleButton } from '../Button'

const CardDonasi = ({ image, title, description, buttonLabel, onButtonClick, className='', style={}, ...props }) => {
  return (
    <div
      className={`max-w-[300px] rounded-3xl shadow-md ${className}`}
      style={{
        backgroundColor: Colors.primary.white, ...style
      }}
      {...props}
    >
      {/* image */}
      {image && (
        <div className='flex items-center justify-center' >
          <img src={image} alt="Card Image" />
        </div>
      )}

      <div className='p-4'>
        {/* Title */}
        <SubHeading className={'mb-2'}>
          {title}
        </SubHeading>

        {/* Description */}
        <Keterangan className={'text-justify line-clamp-3 mb-3'}>
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
    </div>
  )
}

export default CardDonasi