/***
 * This component uses the BaseButton component.
 * This button has a red background and white text by default.
 * When hovered, the button has a white background and red text.
 */

import React from 'react'
import BaseButton from './BaseButton'
import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import UseButtonHover from '../../hooks/UseButtonHover'
import UseNavigation from '../../hooks/UseNavigation'

const RedButton = ({ children, className, path, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseButtonHover()
  const { handleNavigation } = UseNavigation()

  return (
    <BaseButton
      className={`rounded-xl ${className}`}
      style={{ 
        background: isHovered ? PrimaryColor.white : PrimaryColor.red,
        color: isHovered ? PrimaryColor.red : PrimaryColor.white,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleNavigation(path)}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

export default RedButton