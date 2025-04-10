/***
 * Danger Button Component uses the base button as its structure.
 * The button has a red background by default and white text.
 * On hover, the background will change to white and the text to red.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <DangerButton onClick={ handleClick }>
 *   Click Me
 * </DangerButton>
 */

import React from "react"
import { BaseButton } from "./BaseButton"
import UseHover from "../../hooks/UseHover"
import PrimaryColor from "../../themes/color_pallete/PrimaryColor";
import SecondaryColor from "../../themes/color_pallete/SecondaryColor";

const DangerButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      onClick={ () => handleClick(path) }
      style={{ 
        backgroundColor: isHovered ? SecondaryColor.lightMaroon : PrimaryColor.maroon,
        color: isHovered? SecondaryColor.lightSilver : PrimaryColor.white,
        transition: 'background-color 0.2s ease'
      }}
      { ...props }
    >
      { children }
    </BaseButton>
  )
}

export default DangerButton