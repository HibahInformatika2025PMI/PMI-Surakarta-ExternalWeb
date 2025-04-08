import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube, FaChevronDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { Colors } from '../../themes/ColorPallete';
import { Body } from '../../themes/Typography';
import { OutlineButton } from './Button';
import Dropdown from './dropdown';
import { portalInfoItems, tentangKamiItems } from '../../assets/dummyData/ExampleDropdown';

import logoImg from '../../assets/images/pmi_logo.png';

const IconLink = ({ href, children }) => {
  return (
    <a 
      href={ href }
      target='_blank'
      rel='noopener noreferrer'
      className='w-[35px] h-[35px] text-[#D60100] cursor-pointer transition-colors duration-500 hover:text-[#970202]'
    >
      { children }
    </a>
  )
}

export const NavbarTitle = ({navigate, children, className=''}) => {
  return (
    <li className="relative">
      <Link 
        to={ navigate } 
        className='text-[#D9D9D9] font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-white py-5 px-4 flex items-center group'
      >
        { children }
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </Link>
    </li>
  )
}

const Navbar = () => {
  return (
    <nav className="flex flex-col">
      {/* Top Bar */}
      <div className="flex px-[25px] md:px-[75px] lg:px-[125px] py-1 justify-between">
        {/* PMI LOGO */}
        <Link to="/">
          <img 
            src={logoImg} 
            alt="PMI Kota Surakarta" 
            className="w-[300px] object-contain cursor-pointer transition-colors duration-300 rounded-2xl" 
          />
        </Link>

        {/* Social Media */}
        <div className="flex items-center">
          <Body className={'italic mr-4'}>find us on</Body>

          <div className="flex gap-3">
            <IconLink href={'https://www.facebook.com/PMI-Surakarta'}>
              <FaFacebook size={32} />
            </IconLink>
            <IconLink href={'https://www.instagram.com/pmisurakarta_/'}>
              <FaInstagram size={32} />
            </IconLink>
            <IconLink href={'https://x.com/pmisurakarta'}>
              <FaXTwitter size={32} />
            </IconLink>
            <IconLink href={'https://www.youtube.com/channel/UC-sSYMmJ8trtPD54Fi-KprA'}>
              <FaYoutube size={32} />
            </IconLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ background: Colors.gradient.gradient1 }} className="px-[30px] md:px-[80px] lg:px-[130px] py-1 flex justify-between">
        <ul className="flex items-center">
          <NavbarTitle navigate='/'>Beranda</NavbarTitle>
          <NavbarTitle navigate='#'>Donor Darah</NavbarTitle>
          <NavbarTitle navigate='#'>Layanan Ambulance</NavbarTitle>
          <Dropdown items={portalInfoItems}>Portal Info</Dropdown>
          <NavbarTitle navigate='/news'>Berita</NavbarTitle>
          <Dropdown items={tentangKamiItems}>Tentang Kami</Dropdown>
          <NavbarTitle navigate='/admin-news'>Admin-Berita</NavbarTitle>
        </ul>
        
        <OutlineButton>Donasi Sekarang</OutlineButton>
      </div>
    </nav>
  );
};

export default Navbar;
