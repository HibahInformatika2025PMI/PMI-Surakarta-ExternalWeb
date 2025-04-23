/***
 * This component will display navbar on desktop view (> 1280px).
 */

import React from 'react'

import NavbarTitle from './NavbarTitle'
import NavbarDropdown from './NavbarDropdown'

import RedOutlineButton from '../../buttons/RedOutlineButton'

import { DonorDarahItems, PendidikanItems, RelawanItems, YankesItems, YansosItems } from '../../../assets/dummy_api/ExampleNavbarDropdown'

const DekstopNavbar = ({ className }) => {
  return (
    <div>
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

          {/* <NavbarTitle navigate={'/admin-news'}>Admin-Berita</NavbarTitle>
            <NavbarTitle navigate={'/auth'}>Authentication</NavbarTitle> */}
        </ul>

        <div className='flex items-center gap-4'>
          <RedOutlineButton path={'/donasi'}>Donasi Sekarang</RedOutlineButton>
          <RedOutlineButton path={'/auth'}>Log In</RedOutlineButton>
        </div>
      </div>
    </div>
  )
}

export default DekstopNavbar