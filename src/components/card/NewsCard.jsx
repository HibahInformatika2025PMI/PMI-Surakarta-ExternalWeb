import React from 'react'
import { FaCalendar } from 'react-icons/fa'

import Heading from '../../themes/typography/Heading'
import SubHeading from '../../themes/typography/SubHeading'
import Description from '../../themes/typography/Description'

import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import GradientColor from '../../themes/color_pallete/GradientColor'

const NewsCard = ({ id, image, title, summary, updated_at, onLineClick, className='', style={}, ...props }) => {
  return (
    <div
      className={`max-w-[380px] rounded-3xl shadow-md cursor-pointer ${className}`}
      onClick={onLineClick}
      style={{
        backgroundColor: PrimaryColor.white, ...style
      }}
      {...props}
    >
      {/* image */}
      {image && (
        <div className='relative flex items-center justify-center' >
          <img src={image} alt={title} className='w-full h-[220px] object-cover object-center rounded-t-3xl'/>
          <div className='absolute inset-0 opacity-70 rounded-t-3xl' style={{ background:GradientColor.gradient2 }} />
        </div>
      )}

      <div className='p-4'>
        {/* Title */}
        <SubHeading className={'h-[60px] line-clamp-2 mb-2'}>
          {title}
        </SubHeading>

        {/* Description */}
        <Description className={'text-justify line-clamp-4 mb-3'}>
          {summary}
        </Description>

        {/* Footer */}
        <div className='flex items-center justify-between'>
          <div className='flex'>
            <FaCalendar className='opacity-40 mr-3'/>
            <Description style={{ color: PrimaryColor.grey }}>
              {updated_at ? new Date(updated_at).toLocaleDateString() : 'N/A'}
            </Description>
          </div>
          <Heading className={'text-xs px-3'} style={{ color: PrimaryColor.red }}>Read More ...</Heading>
        </div>
      </div>
    </div>
  )
}

export default NewsCard