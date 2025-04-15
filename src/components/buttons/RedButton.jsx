/***
 * Red Button Component uses the base button as its structure.
 * The button has a red background by default and white text.
 * On hover, the background will changes to white and the text to red.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <RedButton onClick={ handleClick }>
 *  Click Me
 * </RedButton>
 */

import React from 'react'

import { BaseButton } from './BaseButton'

import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import UseHover from '../../hooks/UseHover'
import UseNavigation from '../../hooks/UseNavigation'

const RedButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  const { handleNavigation } = UseNavigation();

  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      onClick={ () => handleNavigation(path) }
      style={{ 
        backgroundColor: isHovered ? PrimaryColor.white : PrimaryColor.red,
        color: isHovered ? PrimaryColor.red : PrimaryColor.white,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      { ...props }
    >
      { children }
    </BaseButton>
  )
}

export default RedButton