/***
 * This is the fifth home section of the donation home page.
 * This section is sub-section of the Donation Home page.
 */

import React from 'react'

import { DonationRequirementsData, DonationMethodData } from '../../../assets/text/DonationHomeData'

import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../../themes/typography/PageSubTitle'
import Body from '../../../themes/typography/Body'
const FifthHomeSection = ({ className, style }) => {
  return (
    <div className={`px-[50px] md:px-[100px] xl:px-[160px] py-[75px] ${className}`} style={style}>
      <PageSubTitle className={'uppercase mb-4'} style={{ color: PrimaryColor.red }}>
        Donasi Barang
      </PageSubTitle>

      <Body className={'text-justify mb-4'}>
        Donasi dalam bentuk barang sangat berarti untuk mendukung misi kemanusiaan PMI. Dengan menyumbangkan barang seperti makanan pokok, paket kebersihan, atau perlengkapan penting lainnya, Anda turut membantu penyaluran bantuan ke mereka yang paling membutuhkan. Di bawah ini tersedia panduan donasi, ketentuan yang perlu diperhatikan, serta formulir online untuk mempermudah proses donasi Anda.dan barang yang kamu donasikan membantu sesama dan menciptakan perubahan nyata bersama PMI Kota Surakarta.
      </Body>

      <div className='flex flex-col md:flex-row gap-10'>
        <DonationRequirementsData className={'w-full md:w-1/3 mb-4'} />
        <DonationMethodData className={'w-full md:w-2/3'} iconSize={50} />
      </div>
    </div>
  )
}

export default FifthHomeSection