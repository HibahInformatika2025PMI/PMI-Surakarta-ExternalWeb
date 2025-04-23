/***
 * This section contains history of PMI Kota Surakarta.
 */

import React from 'react'

import HistoryPMI from '../../assets/images/pmi_surakarta_old.jpg'
import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageTitle from '../../themes/typography/PageTitle'
import Heading from '../../themes/typography/Heading'
import Body from '../../themes/typography/Body'

const HistoryPMISection = ({ className }) => {
  return (
    <div 
      className={`flex flex-col xl:flex-row items-center justify-center gap-10 py-[100px] px-[160px] ${className}`}
      style={{ background: PrimaryColor.white}}
    >
      <img 
        src={HistoryPMI}
        alt="PMI Surakarta Lama"
        className='w-[500px] object-cover rounded-tl-3xl rounded-br-3xl'
        style={{ color: PrimaryColor.red, border: '5px solid '}}
      />

      <div className='flex flex-col gap-8'>
        <PageTitle className={'text-center xl:text-justify'}>
          Salah Satu Pelopor di Indonesia
        </PageTitle>

        <Body className={'text-justify'}>
          Palang Merah Indonesia (PMI) Kota Surakarta adalah satu dari lima PMI pelopor di Indonesia selain Surabaya, Yogyakarta, Semarang, dan Bandung. Disebut pelopor karena kelima PMI cabang itulah yang berdiri tujuh bulan setelah PMI Pusat diresmikan pada 17 September 1945.
        </Body>
      </div>
    </div>
  )
}

export default HistoryPMISection