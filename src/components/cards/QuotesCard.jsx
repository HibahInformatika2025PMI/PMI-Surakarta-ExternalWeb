/***
 * This component is used as a template for the quotes cards.
 * 
 * Is used in:
 * - QuotesList.jsx
 */

import React from 'react'
import { PrimaryColor, SecondaryColor } from '../../themes/color_palletes/ColorPalletes'
import { FaQuoteLeft } from 'react-icons/fa'
import Body from '../../themes/typography/Body'
import SubHeading from '../../themes/typography/SubHeading'

const QuotesCard = ({ id, name, position, quote, image, className, style, ...props }) => {
  return (
    <div
      className={`rounded-lg p-8 shadow-md flex flex-col md:flex-row items-start ${className}`}
      style={{ backgroundColor: PrimaryColor.white, ...style }}
      {...props}
    >
      <div className='mr-0 md:mr-4 mb-4 md:mb-0'>
        <FaQuoteLeft className='opacity-30' size={80} style={{ color: SecondaryColor.dark_red }} />
      </div>

      <div className='flex-1 border-t-4 md:border-t-0 md:border-l-4 px-8 pt-4 md:pt-0' style={{ borderColor: SecondaryColor.dark_red }}>
        <Body className={'mb-4 text-justify'}>{quote}</Body>
        
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0'>
          <span>
            <SubHeading style={{ color: PrimaryColor.red }}>{name}</SubHeading>
            <Body style={{ color: PrimaryColor.grey }}>{position}</Body>
          </span>

          <span className='flex-shrink-0 ml-4 w-20 h-20 rounded-full overflow-hidden'>
            <img src={image} alt={name} className='w-full h-full object-cover' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default QuotesCard