/***
 * This component is used to display the social media links of PMI Surakarta.
 * Contains links to Facebook, Instagram, Twitter, and YouTube.
 */

import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import IconLink from './IconLink'

const SocialMediaLink = ({ size }) => {
  return (
    <div className="flex gap-3">
      <IconLink href={'https://www.facebook.com/PMI-Surakarta'}>
        <FaFacebook size={ size } />
      </IconLink>
      <IconLink href={'https://www.instagram.com/pmisurakarta_/'}>
        <FaInstagram size={ size } />
      </IconLink>
      <IconLink href={'https://x.com/pmisurakarta'}>
        <FaXTwitter size={ size } />
      </IconLink>
      <IconLink href={'https://www.youtube.com/channel/UC-sSYMmJ8trtPD54Fi-KprA'}>
        <FaYoutube size={ size } />
      </IconLink>
    </div>
  )
}

export default SocialMediaLink