import React from 'react';
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube, FaChevronDown } from 'react-icons/fa';
import logoImg from '../../assets/images/pmi_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-[180px] relative">
      {/* Top Bar */}
      <div className="absolute w-full h-[90px] bg-white flex items-center justify-between px-4">
        <Link to="/" className="inline-block">
          <img 
            src={logoImg} 
            alt="PMI Kota Surakarta" 
            className="w-[300px] h-[85px] ml-[125px] object-contain cursor-pointer transition-colors duration-300 rounded-2xl" 
          />
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-inter italic text-sm mr-3.5">find us on</span>
          <div className="flex gap-3 mr-[125px]">
            {[FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube].map((Icon, index) => (
              <div key={index} className="w-[35px] h-[35px] text-[#D60100] cursor-pointer transition-colors duration-500 hover:text-[#970202]">
                <Icon size={35} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute w-full h-[90px] top-[90px] bg-[#D60100] shadow-md flex items-center justify-between px-4">
        <ul className="flex gap-6 ml-[125px]">
          <li>
            <Link to="/" className="text-white font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-[#ffb7b7] py-5 px-4 flex items-center">
              Beranda
            </Link>
          </li>
          {['Donor Darah', 'Layanan Ambulance'].map((item) => (
            <li key={item} className="text-white font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-[#ffb7b7] py-5 px-4 flex items-center">
              {item}
            </li>
          ))}
          
          {/* Portal Info Dropdown */}
          <li className="relative group">
            <div className="text-white font-inter font-semibold text-base cursor-pointer transition-colors duration-300 group-hover:text-[#ffb7b7] py-5 px-4 flex items-center gap-2">
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

          {/* Bagian Admin --------- List artikel dan edit artikel */}
          <li>
            <Link to="/berita" className="text-white font-inter font-semibold text-base cursor-pointer transition-colors duration-300 hover:text-[#ffb7b7] py-5 px-4 flex items-center">
              Berita
            </Link>
          </li>

          {/* Tentang Kami Dropdown */}
          <li className="relative group">
            <div className="text-white font-inter font-semibold text-base cursor-pointer transition-colors duration-300 group-hover:text-[#ffb7b7] py-5 px-4 flex items-center gap-2">
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
        </ul>

        <button className="py-3 px-8 mr-[125px] bg-white rounded-2xl border-none font-inter font-bold text-base text-[#D60100] transition-colors duration-300 hover:bg-[#ffb7b7]">
          Donasi Sekarang
        </button>
      </div>
    </nav>
  );
};

export default Navbar;