/***
 * Gradient Red-Purple Button Component uses the base button as its structure.
 * The button has a gradient of red to purple by default and white text.
 * On hover, the background will change to white and the text to red.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <GradRedPurpleButton onClick={ handleClick }>
 *   Click Me
 * </GradRedPurpleButton>
 */

import React from 'react'

import { BaseButton } from './BaseButton'

import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import GradientColor from '../../themes/color_pallete/GradientColor'
import UseHover from '../../hooks/UseHover'
import UseNavigation from '../../hooks/UseNavigation'

const GradRedPurpleButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  const { handleNavigation } = UseNavigation();

  return (
    <BaseButton
      className={`text-white rounded-xl ${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={ () => handleNavigation(path) }
      style={{ 
        background: isHovered ? PrimaryColor.white : GradientColor.gradient3,
        color: isHovered ? PrimaryColor.red : PrimaryColor.white,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

export default GradRedPurpleButton