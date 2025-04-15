/***
 * Grey Button Component uses the base button as its structure.
 * The button has a grey background by default and white text.
 * On hover, the background will change to white and the text to grey.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <GreyButton onClick={ handleClick }>
 *  Click Me
 * </GreyButton>
 */

import React from 'react'

import { BaseButton } from './BaseButton'

import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import UseHover from '../../hooks/UseHover'
import UseNavigation from '../../hooks/UseNavigation'

const GreyButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover()
  const { handleNavigation } = UseNavigation();
  
  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      onClick={ () => handleNavigation(path) }
      style={{ 
        backgroundColor: isHovered ? PrimaryColor.grey : PrimaryColor.white,
        color: isHovered ? PrimaryColor.white : PrimaryColor.grey,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      { children }
    </BaseButton>
  )
}

export default GreyButton