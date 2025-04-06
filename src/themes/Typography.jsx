import React from 'react';
import { Colors } from './ColorPallete';

// Page Title
export const PageTitle = ({ children, className, ...props }) => {
  return (
    <h1
        className={`font-inter font-bold text-4xl ${className || ''}`}
        style={{ color: Colors.primary.red }}
        {...props}
    >
        {children}
    </h1>
  );
};

// Heading
export const Heading = ({ children, className, ...props }) => {
  return (
    <h2
        className={`font-inter font-bold ${className || ''}`}
        {...props}
    >
        {children}
    </h2>
    );
};
  
// Sub Heading
export const SubHeading = ({ children, className, ...props }) => {
  return (
    <h3
        className={`font-inter font-semibold text-lg ${className || ''}`}
        {...props}
    >
        {children}
    </h3>
  );
};

// Body
export const Body = ({ children, className, ...props }) => {
  return (
    <p
        className={`font-inter font-normal ${className || ''}`}
        {...props}
    >
        {children}
    </p>
  );
};

// Keterangan
export const Keterangan = ({ children, className, ...props }) => {
  return (
    <p
        className={`font-inter font-normal text-xs ${className || ''}`}
        {...props}
    >
        {children}
    </p>
  );
};

// Navbar Text
export const NavbarText = ({ children, className, ...props }) => {
  return (
    <span
        className={`text-[#D9D9D9] font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-white py-5 px-4 flex items-center ${className || ''}`}
        {...props}
    >
        {children}
    </span>
  );
};