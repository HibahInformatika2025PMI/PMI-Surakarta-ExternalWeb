/***
 * This component uses the BaseButton component.
 * This button has a grey background and white text by default.
 * When hovered, the button has a white background and grey text.
 */

import React from 'react'

import BaseButton from './BaseButton'
import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import UseButtonHover from '../../hooks/UseButtonHover'
import UseNavigation from '../../hooks/UseNavigation'

const GreyButton = ({ children, className, path, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseButtonHover()
  const { handleNavigation } = UseNavigation()

  return (
    <BaseButton
      className={`rounded-xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleNavigation(path)}
      style={{
        background: isHovered ? PrimaryColor.white : PrimaryColor.grey,
        color: isHovered ? PrimaryColor.grey : PrimaryColor.white,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

export default GreyButton