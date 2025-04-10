import React from 'react';

import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';

const Navbar = () => {
  return (
    <nav className="flex flex-col">
      <TopNavbar />
      <BottomNavbar />
    </nav>
  );
};

export default Navbar;
