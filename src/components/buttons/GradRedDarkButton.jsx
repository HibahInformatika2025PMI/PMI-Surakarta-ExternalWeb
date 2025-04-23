/***
 * This component uses the BaseButton component.
 * This button has a gradient from red to dark red background and white text by default.
 * When hovered, the button has a white background and red text.
 */

import React from 'react'

import BaseButton from './BaseButton'
import { PrimaryColor, GradientColor } from '../../themes/color_palletes/ColorPalletes'
import UseButtonHover from '../../hooks/UseButtonHover'
import UseNavigation from '../../hooks/UseNavigation'

const GradRedDarkButton = ({ children, className, path, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseButtonHover()
  const { handleNavigation } = UseNavigation()

  return (
    <BaseButton
      className={`rounded-xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleNavigation(path)}
      style={{
        background: isHovered ? PrimaryColor.white : GradientColor.gradient1,
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

export default GradRedDarkButton