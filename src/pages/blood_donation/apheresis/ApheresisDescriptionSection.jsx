/***
 * This is the page for the apheresis requirements.
 * This page is a sub-page of Apheresis.jsx
 */

import React from 'react'

import PMIApheresis2 from '../../../assets/images/pmi_apheresis2.jpg'

import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../../themes/typography/PageSubTitle'
import Body from '../../../themes/typography/Body'

const ApheresisDescriptionSection = ({ className }) => {
  return (
    <div 
      className={`flex flex-col lg:flex-row items-center justify-center gap-10 py-[50px] px-[160px] ${className}`}
      style={{ background: PrimaryColor.white}}
    >
      <img 
        src={PMIApheresis2}
        alt="PMI Surakarta Lama"
        className='w-[500px] object-cover'
        style={{ color: PrimaryColor.red, border: '5px solid '}}
      />

      <div className='flex flex-col gap-8'>
        <PageSubTitle className={'text-center lg:text-start'}>
          Syarat & Prosedur Donor Darah Apheresis
        </PageSubTitle>

        <Body className={'text-justify'}>
          Donor darah dengan prosedur Apheresis ini membutuhkan pendonor tertentu dengan syarat khusus yang sedikit berbeda dengan pendonor pada donor darah konvensional.
        </Body>
      </div>
    </div>
  )
}

export default ApheresisDescriptionSection