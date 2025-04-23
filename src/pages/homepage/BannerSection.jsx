/***
 * This section will display the banner of the PMI Kota Surakarta.
 */

import React from 'react'

import PMIBeranda1 from '../../assets/images/pmi_beranda1.png'
import RedOutlineButton from '../../components/buttons/RedOutlineButton'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageTitle from '../../themes/typography/PageTitle'
import SubHeading from '../../themes/typography/SubHeading'

const BannerSection = ({ className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={PMIBeranda1}
        alt='PMI Kota Surakarta'
        className='w-full h-[500px] object-cover object-[50%_29%]'
      />

      <div className='absolute inset-0 opacity-90' style={{ background: GradientColor.gradient4 }} />
      <div className='absolute inset-0 opacity-80' style={{ background: GradientColor.gradient5 }} />
      
      <div className="absolute inset-0 flex items-center justify-end px-[50px] md:px-[100px] xl:px-[150px]">
        <div className='flex flex-col items-end'>
          <PageTitle className={'mb-5'} style={{ color: PrimaryColor.white }}>PMI Surakarta</PageTitle>
          <SubHeading className={'italic mb-5'} style={{ color: PrimaryColor.white }}>Kami Siap Bantu!</SubHeading>
          <RedOutlineButton path={'/profile'}>Kenali PMI Surakarta</RedOutlineButton>
        </div>
      </div>
    </div>
  )
}

export default BannerSection