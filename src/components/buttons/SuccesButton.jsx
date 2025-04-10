/***
 * Success Button Component uses the base button as its structure.
 * The button has a green background by default and white text.
 * On hover, the background will change to light green and the text to light silver.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <SuccessButton onClick={ handleClick }>
 *  Click Me
 * </SuccessButton>
 */

import React from "react";
import { BaseButton } from "./BaseButton";
import { Colors } from "../../themes/color_pallete/ColorPallete";
import UseHover from "../../hooks/UseHover";

const SuccessButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      onClick={ () => handleClick(path) }
      style={{ 
        backgroundColor: isHovered ? Colors.secondary.lightGreen : Colors.primary.green,
        color: isHovered? Colors.secondary.lightSilver : Colors.primary.white,
        transition: 'background-color 0.2s ease'
      }}
      { ...props }
    >
      { children }
    </BaseButton>
  )
}

export default SuccessButton