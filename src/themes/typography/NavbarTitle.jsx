/***
 * Typography component for the Navbar title.
 * 
 * Parameters:
 * - children: The text to be displayed in the title.
 * - className: Additional classes to be applied to the title.
 * - props: Additional props to be passed to the title element.
 */

import React from 'react'
import { Colors } from '../color_pallete/ColorPallete'

const NavbarTitle = ({ children, className, ...props }) => {
  return (
    <span
      className={`font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-white py-5 px-4 flex items-center ${className || ''}`}
      style={{ color: Colors.secondary.lightSilver }}
      { ...props }
    >
      { children }
    </span>
  )
}

export default NavbarTitle