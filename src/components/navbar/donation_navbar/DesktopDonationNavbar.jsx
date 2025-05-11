/***
 * This component will display the desktop donation navbar (> 1280px).
 * This component is a sub-component of DonationNavbar.jsx.
 */

import React from 'react'
import { FaHome, FaListAlt, FaQuestionCircle, FaFileAlt } from 'react-icons/fa'

import DonationNavbarTitle from './DonationNavbarTitle'

import PMILogo from '../../shared/PMILogo'
import DonationNavbarDropdown from './DonationNavbarDropdown'
import { DonationTypes } from './ItemsDonationNavbarDropdown'

const DesktopDonationNavbar = ({ className }) => {
  return (
    <div className={`${className}`}>
      <PMILogo navigate='/donasi' />

      <ul className='flex items-center'>
        <DonationNavbarTitle navigate='/donasi'>
          <FaHome size={20} className='mr-2' />
          Home
        </DonationNavbarTitle>
        <DonationNavbarTitle navigate='/donasi/faq'>
          <FaQuestionCircle size={20} className='mr-2' />
          FAQ
        </DonationNavbarTitle>
        <DonationNavbarDropdown items={DonationTypes}>
          <FaListAlt size={20} className='mr-2' />
          Donasi
        </DonationNavbarDropdown>
        <DonationNavbarTitle navigate='/donasi/laporan'>
          <FaFileAlt size={20} className='mr-2' />
          Laporan
        </DonationNavbarTitle>
      </ul>
    </div>
  )
}

export default DesktopDonationNavbar