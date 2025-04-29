/***
 * This component is used as a template for the news cards.
 * 
 * Is used in:
 * - ArticleList.jsx
 */

import React from 'react'
import { FaCalendar } from 'react-icons/fa'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import Heading from '../../themes/typography/Heading'
import Subtitle from '../../themes/typography/Subtitle'

const NewsCard = ({ id, image, title, summary, updated_at, onlick, className, style, ...props }) => {
  return (
    <div 
      className={`w-[380px] rounded-3xl shadow-md cursor-pointer overflow-hidden ${className}`}
      style={{ background: PrimaryColor.white, ...style }}
      onClick={onlick}
      {...props}
    >
      {/* Image Part */}
      <div className='relative flex items-center justify-center'>
        <img src={image} alt={title} className='w-full h-[220px] object-cover object-center' />
        <div className='absolute inset-0' style={{ background: GradientColor.gradient7 }} />
      </div>

      {/* Content Part */}
      <div className='p-4'>
        <Heading className='h-[75px] line-clamp-2 mb-2'>{title}</Heading>
        <Subtitle className='line-clamp-3'>{summary}</Subtitle>

        {/* Bottom Part */}
        <div className='flex items-center justify-between mt-2'>
          <div className='flex'>
            <FaCalendar className='opacity-50 mr-3' />
            <Subtitle style={{ color: PrimaryColor.grey }}>
              {updated_at ? new Date(updated_at).toLocaleDateString() : 'N/A'}
            </Subtitle>
          </div>
          <Subtitle className={'px-3'} style={{ color: PrimaryColor.red }}>Read more...</Subtitle>
        </div>
      </div>
    </div>
  )
}

export default NewsCard