/***
 * This component is used to display the other news cards.
 * 
 * Is used in:
 * - OtherNewsList.jsx
 */

import React from 'react'
import { FaRegCalendar } from 'react-icons/fa'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import SubHeading from '../../themes/typography/SubHeading'
import Subtitle from '../../themes/typography/Subtitle'

const OtherNewsCard = ({ id, image, title, summary, updated_at, onlick, className, style, ...props }) => {
  return (
    <div
      className={`w-full h-[150px] rounded-xl shadow-md cursor-pointer overflow-hidden flex flex-row gap-5 ${className}`}
      style={{ background: PrimaryColor.white, ...style }}
      onClick={onlick}
      {...props}
    >
      {/* Image Part */}
      <div className='relative w-1/3'>
        <img src={image} alt={title} className='w-full h-full object-cover' />
        <div className='absolute inset-0' style={{ background: GradientColor.gradient7 }} />
      </div>

      {/* Content Part */}
      <div className='w-2/3 self-center'>
        <div className='flex flex-row gap-2 mb-2'>
          <FaRegCalendar size={18} color={PrimaryColor.grey} />
          <Subtitle style={{ color: PrimaryColor.grey }}>
            {updated_at ? new Date(updated_at).toLocaleDateString() : 'N/A'}
          </Subtitle>
        </div>
        <SubHeading className='line-clamp-1 mb-2'>{title}</SubHeading>
        <Subtitle className='line-clamp-2'>{summary}</Subtitle>
      </div>
    </div>
  )
}

export default OtherNewsCard