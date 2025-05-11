/***
 * This component is used to display the social media links of PMI Surakarta.
 * Contains links to Facebook, Instagram, Twitter, YouTube, and TikTok.
 * 
 * Is used in:
 * - Navbar.jsx
 * - Footer.jsx
 * - ArticleDetails.jsx
 * - DonationNavbar.jsx
 */

import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import { SecondaryColor } from '../../themes/color_palletes/ColorPalletes'

// This component is used to render the social media icon links.
const IconLink = ({ navigate, children, style }) => {
  return (
    <a
      href={navigate}
      target='_blank'
      rel='noopener noreferrer'
      className={`flex items-center justify-center w-[35px] h-[35px] cursor-pointer transition-colors duration-500 hover:text-[${SecondaryColor.dark_red}]`}
      style={style}
    >
      {children}
    </a>
  )
}

// This component is used to display the social media links of PMI Surakarta.
const SocialMediaLink = ({ size, style }) => {
  return (
    <div className='flex gap-3'>
      <IconLink navigate='https://www.facebook.com/PMI-Surakarta' style={style}>
        <FaFacebook size={size} />
      </IconLink>
      <IconLink navigate='https://www.instagram.com/pmisurakarta_' style={style}>
        <FaInstagram size={size} />
      </IconLink>
      <IconLink navigate={'https://x.com/pmisurakarta'} style={style}>
        <FaXTwitter size={ size } />
      </IconLink>
      <IconLink navigate={'https://www.youtube.com/channel/UC-sSYMmJ8trtPD54Fi-KprA'} style={style}>
        <FaYoutube size={ size } />
      </IconLink>
      <IconLink navigate={'https://www.tiktok.com/@pmisurakarta'} style={style}>
        <FaTiktok size={ size } />
      </IconLink>
    </div>
  )
}

export default SocialMediaLink