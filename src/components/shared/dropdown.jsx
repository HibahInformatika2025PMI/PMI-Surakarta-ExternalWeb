import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { NavbarTitle } from './Navbar';

const Dropdown = ({ items, children }) => {
  return (
    <div className='relative group'>
      <NavbarTitle>
        <FaChevronDown className='text-xs transition-transform duration-300 group-hover:rotate-180 mr-2'/>
        { children }
      </NavbarTitle>
      <ul className="hidden group-hover:block absolute top-full left-0 bg-white min-w-[200px] py-2 rounded-lg shadow-md z-10">
        {items.map((item) => (
          <li key={item.id}>
            <Link 
              to={item.route} 
              className="text-[#D60100] py-3 px-4 text-sm cursor-pointer transition-colors duration-300 hover:bg-[#ffb7b7] block"
              onClick={item.onClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;