/***
 * This component is used to display the footer of the website.
 */

import React from 'react'
import { MdEmail, MdFax, MdPhone } from 'react-icons/md'

import PMILogo from '../shared/PMILogo'
import Maps from '../shared/Maps'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import Heading from '../../themes/typography/Heading'
import Body from '../../themes/typography/Body'

const Footer = () => {
  return (
    <footer className='relative w-full' style={{ background: PrimaryColor.white}}>
      {/* Top Footer */}
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center items-start w-full p-10'>
        {/* Left Column */}
        <div className='w-1/2 self-start mb-10'>
          <PMILogo navigate='/' />
          <Body className='py-2'>Jl. Kol. Sutarto No. 58 Jebres, Surakarta, Jawa Tengah 57126</Body>
          <Body className={'flex items-center py-1'}><MdPhone size={20} className="mr-2" />0271 646 505</Body>
          <Body className={'flex items-center py-1'}><MdFax size={20} className="mr-2" />0271 664 881</Body>
          <Body className={'flex items-center py-1'}><MdEmail size={20} className="mr-2" />kota_surakarta@pmi.or.id</Body>
        </div>

        {/* Right Column */}
        <div className='w-1/2 h-[400px] mb-20'>
          <Heading className={'mt-3 mb-6'}>PMI Kota Surakarta</Heading>
          <span className='w-full h-[332px] rounded-lg overflow-hidden shadow-md'>
            <Maps />
          </span>
        </div>
      </div>

      {/* Bottom Footer */}
      <span 
        className='w-full flex items-center justify-center py-5'
        style={{ background: GradientColor.gradient1, color: PrimaryColor.white }}
      >
        <Body>
          &copy; Copyright Palang Merah Indonesia Kota Surakarta 2025
        </Body>
      </span>
    </footer>
  )
}

export default Footer