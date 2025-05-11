/***
 * This section contains the form to send messages to the PMI Kota Surakarta.
 * This section is a sub-section of Contact page.
 */

import React, { useState } from 'react'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../themes/typography/PageSubTitle'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import RedButton from '../../components/buttons/RedButton'

const SendMessagesSection = ({ className }) => {
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  return (
    <div 
      className={`${className}`}
      style={{ backgroundColor: PrimaryColor.white }}
    >
      <PageSubTitle className='mb-8'>Kirim Pesan</PageSubTitle>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        {/* Name */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Nama Lengkap</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Nama'
            className='w-full h-10 px-4 border rounded-md'
          />
        </div>

        {/* Phone Number */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='phone'>Telepon/WA</label>
          <PhoneInput
            country={'id'}
            value={phone}
            onChange={setPhone}
            inputClass='!w-full !h-10 !pl-12 !pr-4 !border !rounded-md'
            buttonClass='!border !rounded-l-md'
            containerClass='!w-full'
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: false,
            }}
          />
        </div>

        {/* Email */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            className='w-full h-10 px-4 border rounded-md'
          />
        </div>

        {/* Message */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='message'>Pesan</label>
          <textarea
            id='message'
            name='message'
            placeholder='Tulis Pesan Disini'
            className='w-full h-32 px-4 py-2 border rounded-md'
          />
        </div>

        <RedButton type='submit'>
          Kirim
        </RedButton>
      </form>
    </div>
  )
}

export default SendMessagesSection