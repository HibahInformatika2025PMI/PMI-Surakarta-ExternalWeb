/***
 * This component is used to display the bottom navbar of the website.
 * Contains the navigation menu and a donation button.
 */

import { useState } from 'react'
import { portalInfoItems, tentangKamiItems } from "../../assets/dummy_data/ExampleDropdown"
import GradientColor from "../../themes/color_pallete/GradientColor"
import RedOutlineButton from "../buttons/RedOutlineButton"
import Dropdown from "../shared/Dropdown"
import NavbarTitle from "./NavbarTitle"
import { FaBars, FaTimes } from 'react-icons/fa'

const BottomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className='px-4 md:px-8 lg:px-[130px] py-1 lg:py-1'
      style={{ background: GradientColor.gradient1 }}
    >
      {/* Desktop Navigation */}
      <div className='hidden lg:flex justify-between'>
        <ul className='flex items-center'>
          <NavbarTitle navigate={'/'}>Beranda</NavbarTitle>
          <NavbarTitle navigate={'#'}>Donor Darah</NavbarTitle>
          <NavbarTitle navigate={'#'}>Layanan Ambulance</NavbarTitle>
          <Dropdown items={portalInfoItems}>Portal Info</Dropdown>
          <NavbarTitle navigate={'/news'}>Berita</NavbarTitle>
          {/* <Dropdown items={tentangKamiItems}>Tentang Kami</Dropdown> */}
          <NavbarTitle navigate={'/about-us'}>Tentang Kami</NavbarTitle>

          <NavbarTitle navigate={'/admin-news'}>Admin-Berita</NavbarTitle>
          <NavbarTitle navigate={'/auth'}>Authentication</NavbarTitle>
        </ul>

        <RedOutlineButton>Donasi Sekarang</RedOutlineButton>
      </div>

      {/* Mobile Navigation */}
      <div className='lg:hidden flex justify-between items-center'>
        <button 
          onClick={toggleMenu} 
          className="text-white p-2"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? 
            <FaTimes className="h-6 w-6" /> : 
            <FaBars className="h-6 w-6" />
          }
        </button>
        
        <div className="flex items-center">
          <RedOutlineButton>Donasi Sekarang</RedOutlineButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden absolute left-0 right-0 z-50 mt-2 py-2 px-4 shadow-lg' style={{ background: GradientColor.gradient1 }}>
          <ul className='flex flex-col space-y-2'>
            <li><NavbarTitle navigate={'/'}>Beranda</NavbarTitle></li>
            <li><NavbarTitle navigate={'#'}>Donor Darah</NavbarTitle></li>
            <li><NavbarTitle navigate={'#'}>Layanan Ambulance</NavbarTitle></li>
            <li>
              <Dropdown items={portalInfoItems}>Portal Info</Dropdown>
            </li>
            <li><NavbarTitle navigate={'/news'}>Berita</NavbarTitle></li>
            <li><NavbarTitle navigate={'/about-us'}>Tentang Kami</NavbarTitle></li>
            <li><NavbarTitle navigate={'/admin-news'}>Admin-Berita</NavbarTitle></li>
            <li><NavbarTitle navigate={'/auth'}>Authentication</NavbarTitle></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default BottomNavbar