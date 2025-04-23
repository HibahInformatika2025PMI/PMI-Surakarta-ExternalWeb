/***
 * This component uses the BaseButton component.
 * This button has a yellow background and white text by default.
 * When hovered, the button has a light yellow background and light grey text.
 */

import React from 'react'

import BaseButton from './BaseButton'
import { PrimaryColor, SecondaryColor } from '../../themes/color_palletes/ColorPalletes'
import UseButtonHover from '../../hooks/UseButtonHover'
import UseNavigation from '../../hooks/UseNavigation'

const WarningButton = ({ children, className, path, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseButtonHover()
  const { handleNavigation } = UseNavigation()

  return (
    <BaseButton
      className={`rounded-xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleNavigation(path)}
      style={{
        background: isHovered ? SecondaryColor.light_yellow : PrimaryColor.yellow,
        color: isHovered ? SecondaryColor.light_grey : PrimaryColor.white,
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

export default WarningButton