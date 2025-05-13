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
import { Link, useLocation } from 'react-router-dom'
import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'

const DonationNavbarTitle = ({ children, className, navigate, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === navigate;
  
  return (
    <li className='relative group'>
      <Link
        to={navigate}
        className={`font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-[${PrimaryColor.red}] py-3 lg:py-5 px-2 lg:px-4 flex items-center ${className}`}
        style={{ color: isActive ? PrimaryColor.red : PrimaryColor.black }}
        {...props}
      >
        {children}

        <span 
          className={`absolute bottom-0 left-0 w-full h-[4px] transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
          style={{ backgroundColor: PrimaryColor.red }}
        />
      </Link>
    </li>
  )
}

export default DonationNavbarTitle
