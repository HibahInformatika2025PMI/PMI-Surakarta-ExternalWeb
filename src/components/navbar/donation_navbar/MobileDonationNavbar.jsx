/***
 * This component will display the mobile donation navbar (< 1280px).
 * This component is a sub-component of DonationNavbar.jsx.
 */

import React, { useState } from 'react'
import { FaBars, FaTimes, FaHome, FaQuestionCircle, FaListAlt, FaFileAlt } from 'react-icons/fa'

import DonationNavbarTitle from './DonationNavbarTitle'
import DonationNavbarDropdown from './DonationNavbarDropdown'
import { DonationTypes } from './ItemsDonationNavbarDropdown'

import { GradientColor, PrimaryColor } from '../../../themes/color_palletes/ColorPalletes';

const MobileDonationNavbar = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`${className}`}>
        <button
          className='p-2'
          style={{ color: PrimaryColor.red }}
          onClick={toggleMenu}
          aria-label='Toggle Menu'
          >
          {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
        </button>
      </div>

      {isMenuOpen && (
        <div className='xl:hidden absolute left-0 right-0 z-50 mt-2 py-2 px-4 shadow-lg' style={{ background: PrimaryColor.white }}>
          <ul className='flex flex-col space-y-2'>
            <li>
              <DonationNavbarTitle navigate='/donasi'>
              <FaHome size={20} className='mr-2' />
                Home
              </DonationNavbarTitle>
            </li>
            <li>
              <DonationNavbarTitle navigate='/donasi/faq'>
                <FaQuestionCircle size={20} className='mr-2' />
                FAQ
              </DonationNavbarTitle>
            </li>
            <li>
              <DonationNavbarDropdown items={DonationTypes}>
                <FaListAlt size={20} className='mr-2' />
                Donasi
              </DonationNavbarDropdown>
            </li>
            <li>
              <DonationNavbarTitle navigate='/donasi/laporan'>
                <FaFileAlt size={20} className='mr-2' />
                Laporan
              </DonationNavbarTitle>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileDonationNavbar