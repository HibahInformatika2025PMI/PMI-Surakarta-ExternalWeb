import React from 'react';
import { MdPhone, MdEmail, MdFax } from 'react-icons/md';
import logoImg from '../../assets/images/pmi_logo.png';
import Maps from '../shared/Maps';
import PMILogo from '../shared/PMILogo';
import Body from '../../themes/typography/Body';
import Heading from '../../themes/typography/Heading';

const Footer = () => {
  return (
    <footer className='w-full relative bg-white'>
      {/* Top Footer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center w-full p-14">
        
        <div className="w-[500px] self-start mb-10">
          <PMILogo />
          <Body className={'py-2'}>Jl. Kol. Sutarto No. 58 Jebres, Surakarta, Jawa Tengah 57126</Body>
          <Body className={'flex items-center py-1'}><MdPhone size={20} className="mr-2" />0271 646 505</Body>
          <Body className={'flex items-center py-1'}><MdFax size={20} className="mr-2" />0271 664 881</Body>
          <Body className={'flex items-center py-1'}><MdEmail size={20} className="mr-2" />kota_surakarta@pmi.or.id</Body>
        </div>

        <div className="w-[420px]">
          <Heading className={'text-2xl mt-3 mb-6'}>PMI Kota Surakarta</Heading>
          <div className="w-full h-[332px] rounded-lg overflow-hidden shadow-md">
            <Maps />
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