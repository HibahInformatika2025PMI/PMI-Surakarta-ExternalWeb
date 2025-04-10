/***
 * Gradient Red-Dark Red Button Component uses the base button as its structure.
 * The button has a gradient of red to dark red by default and white text.
 * On hover, the background will change to white and the text to red.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <GradRedDarkButton onClick={ handleClick }>
 *  Click Me
 * </GradRedDarkButton>
 */

import React from 'react'
import { BaseButton } from './BaseButton'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import GradientColor from '../../themes/color_pallete/GradientColor'
import UseHover from '../../hooks/UseHover'

const GradRedDarkButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`text-white rounded-2xl ${className || ''}`}
      onMouseLeave={ handleMouseLeave }
      onMouseEnter={ handleMouseEnter }
      onClick={ () => handleClick(path) }
      style={{ 
        background: isHovered ? PrimaryColor.white : GradientColor.gradient1,
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

export default GradRedDarkButton