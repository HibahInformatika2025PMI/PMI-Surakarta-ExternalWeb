/***
 * Search Button Component uses the base button as its structure.
 * The button has a white background by default and black red text.
 * On hover, the background will changes to black red and the text to white.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - path: The path to navigate to when the button is clicked.
 * - className: Additional classes for styling.
 * - ...props: Other props to be passed to the button.
 * 
 * Usage:
 * <SearchButton onClick={ handleClick }>
 *   Click Me
 * </SearchButton>
 */

import { BaseButton } from "./BaseButton"
import UseHover from "../../hooks/UseHover";
import SecondaryColor from "../../themes/color_pallete/SecondaryColor";
import PrimaryColor from "../../themes/color_pallete/PrimaryColor";

const SearchButton = ({ children, path, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();

  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick(path)}
      style={{
        backgroundColor: isHovered ? PrimaryColor.white : SecondaryColor.blackRed,
        color: isHovered ? SecondaryColor.blackRed : PrimaryColor.white,
        border: '1px solid',
        transition: 'background-color 0.2s ease',
      }}
      { ...props }
    >
      { children}
    </BaseButton>
  )
}

export default SearchButton