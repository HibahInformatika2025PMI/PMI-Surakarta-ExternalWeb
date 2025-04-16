import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import NavbarTitle from '../navbar/NavbarTitle';

const Dropdown = ({ items, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className='relative group'>
      <div onClick={toggleDropdown}>
        <NavbarTitle>
          <FaChevronDown className={`text-xs transition-transform duration-300 lg:group-hover:rotate-180 mr-2 ${isOpen ? 'rotate-180' : ''}`}/>
          { children }
        </NavbarTitle>
      </div>
      
      {/* Desktop dropdown (hover) */}
      <ul className="hidden lg:group-hover:block absolute top-full left-0 bg-white min-w-[200px] py-2 rounded-lg shadow-md z-[100]">
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
      
      {/* Mobile dropdown (click) */}
      {isOpen && (
        <ul className="lg:hidden bg-[#f5f1f1] min-w-[200px] py-2 rounded-lg mt-2 shadow-inner z-[100]">
          {items.map((item) => (
            <li key={item.id}>
              <Link 
                to={item.route} 
                className="text-[#D60100] py-2 px-8 text-sm cursor-pointer transition-colors duration-300 hover:bg-[#ffb7b7] block"
                onClick={item.onClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;