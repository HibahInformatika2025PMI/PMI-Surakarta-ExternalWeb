/***
 * Component for the navbar title that will display a link to the specified navigation path.
 * Highlights the link when hovered over.
 * 
 * Is used in:
 * - DesktopDonationNavbar.jsx
 * - MobileDonationNavbar.jsx
 * - DonationNavbarDropdown.jsx
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'

const DonationNavbarTitle = ({ children, className, navigate, ...props }) => {
  return (
    <li className='relative'>
      <Link
        to={navigate}
        className={`font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-[${PrimaryColor.red}] py-3 lg:py-5 px-2 lg:px-4 flex items-center ${className}`}
        style={{ color: PrimaryColor.black }}
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}

export default DonationNavbarTitle
