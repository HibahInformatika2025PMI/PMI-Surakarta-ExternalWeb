/***
 * This component is used to differentiate between the main navbar and the donation navbar.
 */

import React from 'react'
import { useLocation } from 'react-router-dom'

import DonationNavbar from './donation_navbar/DonationNavbar'
import Navbar from './main_navbar/Navbar'

const NavbarWrapper = () => {
  const location = useLocation();
  
  if (location.pathname.startsWith('/donasi')) {
    return <DonationNavbar />;
  }
  
  return <Navbar />;
};

export default NavbarWrapper; 