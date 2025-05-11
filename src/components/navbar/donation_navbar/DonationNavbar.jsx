/***
 * this component will display the navbar with responsive design for Donation page.
 */

import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

import DesktopDonationNavbar from './DesktopDonationNavbar'
import MobileDonationNavbar from './MobileDonationNavbar'

import SocialMediaLink from '../../shared/SocialMediaLink'

import { GradientColor, PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import Subtitle from '../../../themes/typography/Subtitle'

const DonationNavbar = () => {
  return (
    <nav className='flex flex-col'>
      {/* Top Navbar */}
      <div 
        className='flex justify-between items-center px-[16px] md:px-[32px] xl:px-[125px] py-2'
        style={{ background: GradientColor.gradient1 }}
      >
        <div className='flex items-center gap-x-4 py-1' style={{ color: PrimaryColor.white }}>
          <FaMapMarkerAlt size={25} />
          <Subtitle className=''>Jl. Kol. Sutarto No. 58 Jebres, Surakarta, Jawa Tengah 57126</Subtitle>
        </div>
        
        <SocialMediaLink size={25} style={{ color: PrimaryColor.white }} />
      </div>

      {/* Bottom Navbar */}
      <div
        className='px-[16px] md:px-[32px] lg:px-[30px] xl:px-[130px] py-1'
        style={{ background: PrimaryColor.white }}
      >
        <DesktopDonationNavbar className={'hidden xl:flex justify-between'} />
        <MobileDonationNavbar className={'xl:hidden flex justify-between items-center py-1'} />
      </div>
    </nav>
  )
}

export default DonationNavbar