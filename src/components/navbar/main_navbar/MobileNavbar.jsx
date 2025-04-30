/***
 * This component will display the navbar on mobile view (< 1280px).
 * This component is a sub-component of Navbar.jsx.
 */

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

import { DonorDarahItems, PendidikanItems, RelawanItems, YankesItems, YansosItems } from './ItemsNavbarDropdown';
import NavbarTitle from './NavbarTitle';
import NavbarDropdown from './NavbarDropdown';

import RedOutlineButton from '../../buttons/RedOutlineButton';

import { GradientColor, PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'

const MobileNavbar = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`${className}`}>
        {/* Button 3 bars to toggle the menu */}
        <button
          className='p-2'
          style={{ color: PrimaryColor.white }}
          onClick={toggleMenu}
          aria-label='Toggle Menu'
        >
          {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
        </button>

        {/* Button to donate */}
        <div className='flex items-center gap-4'>
          <RedOutlineButton path={'/donasi'}>Donasi Sekarang</RedOutlineButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='xl:hidden absolute left-0 right-0 z-50 mt-2 py-2 px-4 shadow-lg' style={{ background: GradientColor.gradient1 }}>
          <ul className='flex flex-col space-y-2'>
            <li><NavbarTitle navigate={'/'}>Beranda</NavbarTitle></li>
            <li><NavbarTitle navigate={'/profile'}>Profil</NavbarTitle></li>
            <li><NavbarTitle navigate={'/news'}>Berita</NavbarTitle></li>

            <li><NavbarDropdown items={DonorDarahItems}>Donor Darah</NavbarDropdown></li>
            <li><NavbarDropdown items={RelawanItems}>Relawan</NavbarDropdown></li>
            <li><NavbarDropdown items={YankesItems}>Yankes</NavbarDropdown></li>
            <li><NavbarDropdown items={YansosItems}>Yansos</NavbarDropdown></li>
            <li><NavbarDropdown items={PendidikanItems}>Pendidikan</NavbarDropdown></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileNavbar