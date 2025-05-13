/***
 * This component will display the dropdown menu of the navbar.
 * 
 * Is used in:
 * - DesktopNavbar.jsx
 * - MobileNavbar.jsx
 */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'

import NavbarTitle from './NavbarTitle'

import { PrimaryColor, SecondaryColor } from '../../../themes/color_palletes/ColorPalletes'

const NavbarDropdown = ({ items, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // This function will toggle the dropdown menu.
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
        <NavbarTitle>
          <FaChevronDown className={`text-xs transition-transform duration-300 lg:group-hover:rotate-180 mr-2 ${isOpen ? 'rotate-180' : ''}`} />
          {children}
        </NavbarTitle>
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
              style={{ color: PrimaryColor.red }}
              onClick={item.onClick}
            >
              <strong>{item.label}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavbarDropdown