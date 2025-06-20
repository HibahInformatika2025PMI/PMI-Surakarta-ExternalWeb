/***
 * This component will display navbar on desktop view (> 1280px).
 * This component is a sub-component of Navbar.jsx.
 */

import React from 'react'

import { DonorDarahItems, PendidikanItems, RelawanItems, YankesItems, YansosItems } from './ItemsNavbarDropdown'
import NavbarTitle from './NavbarTitle'
import NavbarDropdown from './NavbarDropdown'

import RedOutlineButton from '../../buttons/RedOutlineButton'


const DekstopNavbar = ({ className }) => {
  return (
    <div className={`${className}`}>
      <ul className='flex items-center'>
        <NavbarTitle navigate='/'>Beranda</NavbarTitle>
        <NavbarTitle navigate='/profile'>Profil</NavbarTitle>
        <NavbarTitle navigate='/news'>Berita</NavbarTitle>
        <NavbarDropdown items={DonorDarahItems}>Donor Darah</NavbarDropdown>
        <NavbarDropdown items={RelawanItems}>Relawan</NavbarDropdown>
        <NavbarDropdown items={YankesItems}>Yankes</NavbarDropdown>
        <NavbarDropdown items={YansosItems}>Yansos</NavbarDropdown>
        <NavbarDropdown items={PendidikanItems}>Pendidikan</NavbarDropdown>
        <NavbarTitle navigate='/contact'>Kontak</NavbarTitle>
      </ul>
      
      <div className='flex items-center gap-4'>
        <RedOutlineButton path={'/donasi'}>Donasi Sekarang</RedOutlineButton>
      </div>
    </div>
  )
}

export default DekstopNavbar