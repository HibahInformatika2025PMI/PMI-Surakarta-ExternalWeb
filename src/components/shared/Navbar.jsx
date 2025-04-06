import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube, FaChevronDown } from 'react-icons/fa';

import { Colors } from '../../themes/ColorPallete';
import { Body } from '../../themes/Typography';

import logoImg from '../../assets/images/pmi_logo.png';
import { OutlineButton } from './Button';
import { FaXTwitter } from 'react-icons/fa6';

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

const NavbarTitle = ({navigate, children, className=''}) => {
  return (
    <li>
      <Link to={ navigate } className='text-[#D9D9D9] font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-white py-5 px-4 flex items-center'>
        { children }
      </Link>
    </li>
  )
}

const NavbarDropdown = ({navigate, children}) => {
  return (
    <div className='relative group'>
      <NavbarTitle>
        <FaChevronDown className='text-xs transition-transform duration-300 group-hover:rotate-180 mr-2'/>
        { children }
      </NavbarTitle>
      <ul className="hidden group-hover:block absolute top-full left-0 bg-white min-w-[200px] py-2 rounded-lg shadow-md z-10">
        {['Dropdown 1', 'Dropdown 2', 'Dropdown 3'].map((item) => (
          <li key={item} className="text-[#D60100] py-3 px-4 text-sm cursor-pointer transition-colors duration-300 hover:bg-[#ffb7b7]">
            {item}
          </li>
        ))}
      </ul>
    </div>
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
            {/* {[FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube].map((Icon, index) => (
              <div key={index} className="w-[35px] h-[35px] text-[#D60100] cursor-pointer transition-colors duration-500 hover:text-[#970202]">
                <Icon size={35} />
              </div>
            ))} */}

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
          {/* <li>
            <Link to="/" className="text-[#D9D9D9] font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-white py-5 px-4 flex items-center">
              Beranda
            </Link>
          </li>
          {['Donor Darah', 'Layanan Ambulance'].map((item) => (
            <li key={item} className="text-[#D9D9D9] font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-white py-5 px-4 flex items-center">
              {item}
            </li>
          ))}

          <li className="relative group">
            <div className="text-[#D9D9D9] font-inter font-semibold text-base cursor-pointer transition-colors duration-300 group-hover:text-white py-5 px-4 flex items-center gap-2">
              <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
              Portal Info
            </div>
            <ul className="hidden group-hover:block absolute top-full left-0 bg-white min-w-[200px] py-2 rounded-lg shadow-md z-10">
              {['Dropdown 1', 'Dropdown 2', 'Dropdown 3'].map((item) => (
                <li key={item} className="text-[#D60100] py-3 px-4 text-sm cursor-pointer transition-colors duration-300 hover:bg-[#ffb7b7]">
                  {item}
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link to="/news" className="text-[#D9D9D9] font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-white py-5 px-4 flex items-center">
              Berita
            </Link>
          </li>

          <li className="relative group">
            <div className="text-[#D9D9D9] font-inter font-semibold text-base cursor-pointer transition-colors duration-300 group-hover:text-white py-5 px-4 flex items-center gap-2">
              <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
              Tentang Kami
            </div>
            <ul className="hidden group-hover:block absolute top-full left-0 bg-white min-w-[200px] py-2 rounded-lg shadow-md z-10">
              {['Dropdown 1', 'Dropdown 2', 'Dropdown 3'].map((item) => (
                <li key={item} className="text-[#D60100] py-3 px-4 text-sm cursor-pointer transition-colors duration-300 hover:bg-[#ffb7b7]">
                  {item}
                </li>
              ))}
            </ul>
          </li>
          
          <li>
            <Link to="/admin-news" className="text-[#D9D9D9] font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-white py-5 px-4 flex items-center">
              Admin Berita
            </Link>
          </li> */}

          {/* Common User */}
          <NavbarTitle navigate='/'>Beranda</NavbarTitle>
          <NavbarTitle navigate='#'>Donor Darah</NavbarTitle>
          <NavbarTitle navigate='#'>Layanan Ambulance</NavbarTitle>
          <NavbarDropdown>Portal Info</NavbarDropdown>
          <NavbarTitle navigate='/news'>Berita</NavbarTitle>
          <NavbarDropdown>Tentang Kami</NavbarDropdown>

          {/* Admin */}
          <NavbarTitle navigate='/admin-news'>Admin-Berita</NavbarTitle>
        </ul>
        
        <OutlineButton>Donasi Sekarang</OutlineButton>
      </div>
    </nav>
  );
};

export default Navbar;