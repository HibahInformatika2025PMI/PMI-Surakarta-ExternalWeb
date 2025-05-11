/***
 * This component will display the navbar with responsive design.
 */

import React from 'react'

import DekstopNavbar from './DekstopNavbar'
import MobileNavbar from './MobileNavbar'

import PMILogo from '../../shared/PMILogo'
import SocialMediaLink from '../../shared/SocialMediaLink'

import Body from '../../../themes/typography/Body'
import { GradientColor, PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'

const Navbar = () => {
  return (
    <nav className='flex flex-col'>
      {/* Top Navbar */}
      <div className='flex justify-between px-[16px] md:px-[32px] xl:px-[125px] py-1'>
        <PMILogo navigate='/' />

        <div className='flex items-center gap-x-4'>
          <Body className='italic mr-4'>find us on</Body>
          <SocialMediaLink size={32} style={{ color: PrimaryColor.red }} />
        </div>
      </div>

      {/* Bottom Navbar */}
      <div
        className='px-[16px] md:px-[32px] lg:px-[30px] xl:px-[130px] py-1'
        style={{ background: GradientColor.gradient1 }}
      >
        <DekstopNavbar className={'hidden xl:flex justify-between'} />
        <MobileNavbar className={'xl:hidden flex justify-between items-center py-1'} />
      </div>
    </nav>
  )
}

export default Navbar