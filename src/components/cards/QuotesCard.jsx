/***
 * This component is used as a template for the quotes cards.
 * 
 * Is used in:
 * - 
 */

import React from 'react'
import { PrimaryColor, SecondaryColor } from '../../themes/color_palletes/ColorPalletes'
import { FaQuoteLeft } from 'react-icons/fa'
import Body from '../../themes/typography/Body'
import SubHeading from '../../themes/typography/SubHeading'

const QuotesCard = ({ id, name, position, quote, image, className, style, ...props }) => {
  return (
    <div
      className={`rounded-lg p-8 shadow-md flex items-start ${className}`}
      style={{ backgroundColor: PrimaryColor.white, ...style }}
      {...props}
    >
      <div className='mr-4'>
        <FaQuoteLeft className='opacity-30' size={80} style={{ color: SecondaryColor.dark_red }} />
      </div>

      <div className='flex-1 border-l-4 px-8' style={{ borderColor: SecondaryColor.dark_red }}>
        <Body className={'mb-4'}>{quote}</Body>
        
        <div className='flex justify-center items-center'>
          <span>
            <SubHeading style={{ color: PrimaryColor.red }}>{name}</SubHeading>
            <Body style={{ color: PrimaryColor.grey }}>{position}</Body>
          </span>

          <span className='w-20 h-20 rounded-full overflow-hidden'>
            <img src={image} alt={name} className='w-full h-full object-cover' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default QuotesCard