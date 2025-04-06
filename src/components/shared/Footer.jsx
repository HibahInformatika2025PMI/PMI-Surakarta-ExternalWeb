import React from 'react';
import { MdPhone, MdEmail, MdFax } from 'react-icons/md';
import logoImg from '../../assets/images/pmi_logo.png';

const Footer = () => {
  return (
    <footer className='w-full relative bg-white'>
      {/* Top Footer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center w-full p-14">
        <div className="w-[500px] self-start mb-11">
          <img src={logoImg} alt="PMI Logo" className="w-[234px] h-[66px] mb-6" />
          <p className="flex items-center mb-3 text-sm font-inter">
            Jl. Kol. Sutarto No. 58 Jebres, Surakarta, Jawa Tengah 57126
          </p>
          <div className="flex items-center mb-3 text-sm font-inter">
            <MdPhone size={16} className="mr-2" />
            0271 646 505
          </div>
          <div className="flex items-center mb-3 text-sm font-inter">
            <MdFax size={16} className="mr-2" />
            0271 664 881
          </div>
          <div className="flex items-center mb-3 text-sm font-inter">
            <MdEmail size={16} className="mr-2" />
            kota_surakarta@pmi.or.id
          </div>
        </div>
        <div className="w-[420px]">
          <h2 className="font-inter font-bold text-2xl mb-6">PMI Kota Surakarta</h2>
          <div className="w-full h-[332px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=PMI%20Kota%20Surakarta+(PMI%20Kota%20Surakarta)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="w-full h-full border-none"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full h-[60px] bg-gradient-to-b from-red-600 to-red-900 flex items-center justify-center text-white font-inter text-sm">
        © Copyright Palang Merah Indonesia Kota Surakarta 2025
      </div>
    </footer>
  );
};

export default Footer;