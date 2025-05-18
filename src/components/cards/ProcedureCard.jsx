/***
 * This is the card for the procedures of blood donation.
 * 
 * Is used in:
 * - 
 */

import React from 'react'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import Heading from '../../themes/typography/Heading'
import Body from '../../themes/typography/Body'
import PageTitle from '../../themes/typography/PageTitle'

const ProcedureCard = ({ num, title, description, italic, className, style, ...props }) => {
  return (
    <div
      className={`max-w-[400px] h-[300px] rounded-3xl p-5 shadow-md flex flex-col justify-start items-center ${className}`}
      style={{ background: PrimaryColor.white, ...style }}
      {...props}
    >
      <PageTitle
        className={'mb-1'}
        style={{ color: PrimaryColor.grey }}
      >
        {num}
      </PageTitle>

      <Heading
        className={`mb-1 text-center ${italic ? 'italic' : ''}`}
        style={{ color: PrimaryColor.red }}
      >
        {title}
      </Heading>

      <Body
        className={'text-justify justify-self-start'}
      >
        {description}
      </Body>
    </div>
  )
}

export default ProcedureCard