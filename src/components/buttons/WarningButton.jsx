/***
 * Warning Button Component uses the base button as its structure.
 * The button has a yellow background by default and white text.
 * On hover, the background will change to light yellow and the text to light silver.
 *  
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <WarningButton onClick={ handleClick }>
 *  Click Me
 * </WarningButton>
 */

import React from "react";
import { BaseButton } from "./BaseButton";
import UseHover from "../../hooks/UseHover";
import PrimaryColor from "../../themes/color_pallete/PrimaryColor";
import SecondaryColor from "../../themes/color_pallete/SecondaryColor";
import { CgSelectO } from "react-icons/cg";

export const WarningButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      onClick={ () => handleClick(path) }
      style={{ 
        backgroundColor: isHovered ? SecondaryColor.lightYellow : PrimaryColor.yellow,
        color: isHovered? SecondaryColor.lightSilver : PrimaryColor.white,
        transition: 'background-color 0.2s ease'
      }}
      { ...props }
    >
      { children }
    </BaseButton>
  )
}

export default WarningButton