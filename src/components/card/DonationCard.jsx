import React from 'react'

import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import SubHeading from '../../themes/typography/SubHeading'
import Description from '../../themes/typography/Description'

import GradRedPurpleButton from '../buttons/GradRedPurpleButton'

const DonationCard = ({ image, title, description, buttonLabel, onClick, className='', style={}, ...props }) => {
  return (
    <div
      className={`max-w-[300px] rounded-3xl shadow-md ${className}`}
      style={{
        backgroundColor: PrimaryColor.white, ...style
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
        <Description className={'text-justify line-clamp-3 mb-3'}>
          {description}
        </Description>

        {/* Button */}
        {buttonLabel && (
          <div className='flex justify-center'>
            <GradRedPurpleButton className={'w-full'} path={onClick}>
              {buttonLabel}
            </GradRedPurpleButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default DonationCard