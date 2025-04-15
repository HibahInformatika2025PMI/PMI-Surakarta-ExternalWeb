/***
 * This component is used to display the bottom navbar of the website.
 * Contains the navigation menu and a donation button.
 */

import { useState } from 'react'
import { DonorDarahItems, RelawanItems, YankesItems, YansosItems, PendidikanItems } from "../../assets/dummy_data/ExampleDropdown"
import GradientColor from "../../themes/color_pallete/GradientColor"
import RedOutlineButton from "../buttons/RedOutlineButton"
import Dropdown from "../shared/dropdown"
import NavbarTitle from "./NavbarTitle"
import { FaBars, FaTimes } from 'react-icons/fa'

const BottomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className='px-[16px] md:px-[32px] lg:px-[30px] xl:px-[130px] py-1'
      style={{ background: GradientColor.gradient1 }}
    >
      {/* Desktop Navigation */}
      <div className='hidden xl:flex justify-between'>
        <ul className='flex items-center'>
          <NavbarTitle navigate={'/'}>Beranda</NavbarTitle>
          <NavbarTitle navigate={'/about-us'}>Profil</NavbarTitle>
          <NavbarTitle navigate={'/news'}>Berita</NavbarTitle>
          
          <Dropdown items={DonorDarahItems}>Donor Darah</Dropdown>
          <Dropdown items={RelawanItems}>Relawan</Dropdown>
          <Dropdown items={YankesItems}>Yankes</Dropdown>
          <Dropdown items={YansosItems}>Yansos</Dropdown>
          <Dropdown items={PendidikanItems}>Pendidikan</Dropdown>

          {/* <NavbarTitle navigate={'/admin-news'}>Admin-Berita</NavbarTitle>
          <NavbarTitle navigate={'/auth'}>Authentication</NavbarTitle> */}
        </ul>
        <div className='flex items-center gap-4'>
          <RedOutlineButton path={'/donasi'}>Donasi Sekarang</RedOutlineButton>
          <RedOutlineButton path={'/auth'}>Log In</RedOutlineButton>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='xl:hidden flex justify-between items-center py-1'>
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
        
        <div className="flex items-center gap-4">
          <RedOutlineButton>Donasi Sekarang</RedOutlineButton>
          <RedOutlineButton path={'/auth'}>Log In</RedOutlineButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='xl:hidden absolute left-0 right-0 z-50 mt-2 py-2 px-4 shadow-lg' style={{ background: GradientColor.gradient1 }}>
          <ul className='flex flex-col space-y-2'>
            <li><NavbarTitle navigate={'/'}>Beranda</NavbarTitle></li>
            <li><NavbarTitle navigate={'/about-us'}>Profil</NavbarTitle></li>
            <li><NavbarTitle navigate={'/news'}>Berita</NavbarTitle></li>
            
            <li><Dropdown items={DonorDarahItems}>Donor Darah</Dropdown></li>
            <li><Dropdown items={RelawanItems}>Relawan</Dropdown></li>
            <li><Dropdown items={YankesItems}>Yankes</Dropdown></li>
            <li><Dropdown items={YansosItems}>Yansos</Dropdown></li>
            <li><Dropdown items={PendidikanItems}>Pendidikan</Dropdown></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default BottomNavbar