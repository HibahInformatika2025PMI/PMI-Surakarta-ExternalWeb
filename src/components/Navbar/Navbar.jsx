import React from 'react';
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube, FaChevronDown } from 'react-icons/fa';
import logoImg from '../../assets/images/pmi_logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="top-bar">
        <a href="/">
          <img src={logoImg} alt="PMI Kota Surakarta" className="logo" />
        </a>
        <div className="social-media">
          <span className="find-us-text">find us on</span>
          <div className="icon-wrapper"><FaFacebook size={35} /></div>
          <div className="icon-wrapper"><FaInstagram size={35} /></div>
          <div className="icon-wrapper"><FaTwitterSquare size={35} /></div>
          <div className="icon-wrapper"><FaYoutube size={35} /></div>
        </div>
      </div>
      <div className="bottom-bar">
        <ul className="nav-menu">
          <li className="nav-item">Beranda</li>
          <li className="nav-item">Donor Darah</li>
          <li className="nav-item">Layanan Ambulance</li>
          <li className="nav-item dropdown"><FaChevronDown className="dropdown-arrow" />Portal Info<ul className="dropdown-menu">
              <li>Dropdown 1</li>
              <li>Dropdown 2</li>
              <li>Dropdown 3</li>
            </ul>
          </li>
          <li className="nav-item">Berita</li>
          <li className="nav-item dropdown"><FaChevronDown className="dropdown-arrow" />Tentang Kami<ul className="dropdown-menu">
              <li>Dropdown 1</li>
              <li>Dropdown 2</li>
              <li>Dropdown 3</li>
            </ul>
          </li>
        </ul>
        <button className="donate-button">Donasi Sekarang</button>
      </div>
    </nav>
  );
};

export default Navbar;
