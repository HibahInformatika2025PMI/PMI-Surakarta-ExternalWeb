/***
 * Navbar Title Component is used in the Navbar component
 * to renders the navbar title.
 * 
 * Parameters:
 * - children: The text to be displayed inside the link.
 * - navigate: The URL to navigate to when the link is clicked.
 * - className: Additional CSS Tailwind classes to be applied to the link.
 * - ...props: Additional props to be passed to the link.
 */

import { Link } from "react-router-dom"

const NavbarTitle = ({ children, navigate, className, ...props }) => {
  return (
    <li className='relative'>
      <Link
        to={ navigate }
        className={`text-[#D9D9D9] font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-white py-5 px-4 flex items-center group ${className}`}
        { ...props }
      >
        { children }
        <span className='absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
      </Link>
    </li>
  )
}

export default NavbarTitle