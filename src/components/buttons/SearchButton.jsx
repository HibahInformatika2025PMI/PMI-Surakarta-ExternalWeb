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