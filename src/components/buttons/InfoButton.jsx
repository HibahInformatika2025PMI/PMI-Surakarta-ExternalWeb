/***
 * Info Button Component uses the base button as its structure.
 * The button has a blue background by default and white text.
 * On hover, the background will change to light blue and the text to light silver.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <InfoButton onClick={ handleClick }>
 *  Click Me
 * </InfoButton>
 */

import React from 'react'
import { BaseButton } from './BaseButton'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import SecondaryColor from '../../themes/color_pallete/SecondaryColor'
import UseHover from '../../hooks/UseHover'

const InfoButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover()

  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      onClick={ () => handleClick(path) }
      style={{ 
        backgroundColor: isHovered ? SecondaryColor.lightBlue : PrimaryColor.blue,
        color: isHovered ? SecondaryColor.lightSilver : PrimaryColor.white,
        transition: 'background-color 0.2s ease'
      }}
      { ...props }
    >
      { children }
    </BaseButton>
  )
}

export default InfoButton