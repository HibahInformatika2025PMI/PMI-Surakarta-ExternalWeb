/***
 * Component for the navbar title.
 * Displays a link to the specified navigation path.
 * Highlights the link when hovered over.
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { PrimaryColor, SecondaryColor } from '../../../themes/color_palletes/ColorPalletes'

const NavbarTitle = ({ children, className, navigate, ...props }) => {
  return (
    <li className='relative'>
      <Link
        to={navigate}
        className={`font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-[${PrimaryColor.white}] py-3 lg:py-5 px-2 lg:px-4 flex items-center ${className}`}
        style={{ color: SecondaryColor.light_grey }}
        {...props}
      >
        {children}

        <span 
          className='absolute bottom-0 left-0 w-full h-[2px] scale-x-0 transition transform duration-300 group-hover:scale-x-100'
          style={{ backgroundColor: PrimaryColor.white }}
        />
      </Link>
    </li>
  )
}

export default NavbarTitle