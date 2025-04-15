/***
 * Red Outline Button Component uses the base button as its structure.
 * The button has a red outline by default and white background.
 * On hover, the background will change to red and the text to light silver.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <OutlineButton onClick={ handleClick }>
 *   Click Me
 * </OutlineButton>
 */

import React from "react";
import { BaseButton } from "./BaseButton"
import PrimaryColor from "../../themes/color_pallete/PrimaryColor"
import SecondaryColor from "../../themes/color_pallete/SecondaryColor"
import UseHover from "../../hooks/UseHover"
import UseNavigation from "../../hooks/UseNavigation";

const RedOutlineButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  const { handleNavigation } = UseNavigation();
  
  return (
    <BaseButton
      className={`font-bold rounded-2xl ${className || ''}`}
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      onClick={ () => handleNavigation(path) }
      style={{ 
        backgroundColor: isHovered ? PrimaryColor.red : PrimaryColor.white,
        color: isHovered? SecondaryColor.lightSilver : PrimaryColor.red,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      { ...props }
    >
      { children }
    </BaseButton>
  )
}

export default RedOutlineButton