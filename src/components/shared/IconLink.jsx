/***
 * Icon Link Component is used in the Navbar component 
 * to renders social media icon links.
 * 
 * Parameters:
 * - href: The URL to navigate to when the icon is clicked.
 * - children: The icon to be displayed inside the link.
 */

import PrimaryColor from "../../themes/color_pallete/PrimaryColor";
import SecondaryColor from "../../themes/color_pallete/SecondaryColor";

const IconLink = ({ href, children }) => {
  return (
    <a 
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`w-[35px] h-[35px] text-[${PrimaryColor.red}] cursor-pointer transition-colors duration-500 hover:text-[${SecondaryColor.darkRed}]`}
    >
      {children}
    </a>
  )
}

export default IconLink;