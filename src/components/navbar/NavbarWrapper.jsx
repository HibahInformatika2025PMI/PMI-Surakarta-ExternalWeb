import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './main_navbar/Navbar';
import DonationNavbar from './donation_navbar/DonationNavbar';

const NavbarWrapper = () => {
  const location = useLocation();
  
  if (location.pathname.startsWith('/donasi')) {
    return <DonationNavbar />;
  }
  
  return <Navbar />;
};

export default NavbarWrapper; 