/***
 * This component is used as a template for the carousel cards.
 * 
 * Is used in:
 * - News.jsx
 * - SecondHomeSection.jsx
 */

import React from 'react'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import Heading from '../../themes/typography/Heading'
import Body from '../../themes/typography/Body'

const CarouselCard = ({ image, title, summary, onClick, className, style }) => {
  return (
    <div
      className={`min-w-full relative cursor-pointer group ${className || ''}`}
      style={style}
      onClick={onClick}
    >
      <img src={image} alt={title} className='w-full h-full object-cover rounded-lg' />
      <div
        className='absolute bottom-0 left-0 w-full p-4 backdrop-opacity-90 px-10 py-10 rounded-b-lg'
        style={{ background: GradientColor.gradient7, color: PrimaryColor.white }}
      >
        <Heading style={{ color: PrimaryColor.white }}>{title}</Heading>
        <Body className={'mt-2 line-clamp-2'} style={{ color: PrimaryColor.white }}>{summary}</Body>
      </div>
    </div>
  )
}

export default CarouselCard