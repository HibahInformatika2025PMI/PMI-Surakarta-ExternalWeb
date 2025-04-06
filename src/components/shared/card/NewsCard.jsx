import React from 'react'
import { FaCalendar } from 'react-icons/fa'

import { Colors } from '../../../themes/ColorPallete'
import { Heading, Keterangan, SubHeading } from '../../../themes/Typography'

const CardNews = ({ id, image, title, description, date, text, onLineClick, className='', style={}, ...props }) => {
  return (
    <div
      className={`max-w-[380px] rounded-3xl shadow-md cursor-pointer ${className}`}
      onClick={onLineClick}
      style={{
        backgroundColor: Colors.primary.white, ...style
      }}
      {...props}
    >
      {/* image */}
      {image && (
        <div className='relative flex items-center justify-center' >
          <img src={image} alt="Card Image" className='w-full h-[220px] object-cover object-center rounded-t-3xl'/>
          <div className='absolute inset-0 opacity-70 rounded-t-3xl' style={{ background:Colors.gradient.gradient2 }} />
        </div>
      )}

      <div className='p-4'>
        {/* Title */}
        <SubHeading className={'line-clamp-2 mb-2'}>
          {title}
        </SubHeading>

        {/* Description */}
        <Keterangan className={'text-justify line-clamp-4 mb-3'}>
          {description}
        </Keterangan>

        {/* Footer */}
        <div className='flex items-center justify-between'>
          <div className='flex'>
            <FaCalendar className='opacity-40 mr-3'/>
            <Keterangan style={{ color: Colors.primary.grey }}>{ date }</Keterangan>
          </div>
          <Heading className={'text-xs px-3'} style={{ color: Colors.primary.red }}>Read More ...</Heading>
        </div>
      </div>
    </div>
  )
}

export default CardNews