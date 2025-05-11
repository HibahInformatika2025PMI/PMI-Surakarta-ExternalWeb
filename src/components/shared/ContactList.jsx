/***
 * This component is a list of contact information.
 * 
 * is used in :
 * - ListContactSection.jsx
 */

import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaPhoneVolume, FaEnvelope, FaFax, FaPeopleArrows } from 'react-icons/fa'

import Body from '../../themes/typography/Body'

const ContactList = ({ className, size }) => {
  return (
    <div className={`${className}`}>
      {/* Address */}
      <div className='flex items-center gap-4 my-4'>
        <FaMapMarkerAlt size={size} />
        <Body className='flex flex-col'>
          <span className='font-bold'>Kantor</span>
          <span>Jl. Kol. Sutarto No. 58 Jebres, Surakarta, Jawa Tengah 57126</span>
        </Body>
      </div>

      {/* Phone */}
      <div className='flex items-center gap-4 my-4'>
        <FaPhoneAlt size={size} />
        <Body className='flex flex-col'>
          <span className='font-bold'>Telepon</span>
          <span>0271 646 505</span>
        </Body>
      </div>

      {/* PPDS */}
      <div className='flex items-center gap-4 my-4'>
        <FaPhoneVolume size={size} />
        <Body className='flex flex-col'>
          <span className='font-bold'>PPDS</span>
          <span>0813 2821 1945</span>
        </Body>
      </div>

      {/* Public Relation */}
      <div className='flex items-center gap-4 my-4'>
        <FaPeopleArrows size={size} />
        <Body className='flex flex-col'>
          <span className='font-bold'>Humas</span>
          <span>0813 9280 2643</span>
        </Body>
      </div>

      {/* Fax */}
      <div className='flex items-center gap-4 my-4'>
        <FaFax size={size} />
        <Body className='flex flex-col'>
          <span className='font-bold'>Fax</span>
          <span>0271 664 881</span>
        </Body>
      </div>

      {/* Email */}
      <div className='flex items-center gap-4 my-4'>
        <FaEnvelope size={size} />
        <Body className='flex flex-col'>
          <span className='font-bold'>Email</span>
          <span>kota_surakarta@pmi.or.id</span> 
        </Body>
      </div>
    </div>
  )
}

export default ContactList