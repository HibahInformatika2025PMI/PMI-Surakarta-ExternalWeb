/***
 * This component uses the BaseButton component.
 * This button has a dark red background and white text by default.
 * When hovered, the button has a white background and dark red text.
 */

import React from 'react'

import BaseButton from './BaseButton'
import { PrimaryColor, SecondaryColor } from '../../themes/color_palletes/ColorPalletes'
import UseButtonHover from '../../hooks/UseButtonHover'
import UseNavigation from '../../hooks/UseNavigation'

const SearchButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseButtonHover()
  const { handleNavigation } = UseNavigation()

  return (
    <BaseButton
      className={`${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: isHovered ? PrimaryColor.white : SecondaryColor.darker_red,
        color: isHovered ? SecondaryColor.darker_red : PrimaryColor.white,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

export default SearchButton