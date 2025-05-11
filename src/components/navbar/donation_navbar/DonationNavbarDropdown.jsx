/***
 * Component for the dropdown menu of the donation navbar.
 * 
 * Is used in:
 * - DesktopDonationNavbar.jsx
 * - MobileDonationNavbar.jsx
 */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa';

import DonationNavbarTitle from './DonationNavbarTitle'

import { PrimaryColor, SecondaryColor } from '../../../themes/color_palletes/ColorPalletes'

const DonationNavbarDropdown = ({ items, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    if (window.innerWidth < 1280) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className='relative group'>
      {/* Button to toggle the dropdown menu */}
      <div onClick={toggleDropdown}>
        <DonationNavbarTitle>
          {children}
          <FaChevronDown className={`text-xs transition-transform duration-300 lg:group-hover:rotate-180 ml-2 ${isOpen ? 'rotate-180' : ''}`} />
        </DonationNavbarTitle>
      </div>

      {/* Dekstop dropdown menu (hover) */}
      <ul
        className='hidden lg:group-hover:block absolute top-full left-0 min-w-[200px] py-2 rounded-lg shadow-md z-[100]'
        style={{ background: PrimaryColor.white }}
      >
        {items.map((item) => (
          <li key={item.id}>
            <Link
              to={item.route}
              className={`py-3 px-4 text-sm cursor-pointer transition-colors duration-300 hover:bg-[#ffb7b7] block`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile dropdown menu (click) */}
      {isOpen && (
        <ul className='lg:hidden min-w-[200px] py-2 rounded-lg mt-2 shadow-inner z-[100]' style={{ background: SecondaryColor.white_greyish}}>
          {items.map((item) => (
            <li key={item.id}>
              <Link
                to={item.route}
                className={`py-3 px-4 text-sm cursor-pointer transition-colors duration-300 hover:bg-[${SecondaryColor.light_red}] block`}
                style={{ color: PrimaryColor.red }}
                onClick={item.onClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DonationNavbarDropdown