import React from 'react'

import beranda1PMI from '../../assets/images/beranda1_pmi.png'
import PageTitle from '../../themes/typography/PageTitle'
import Body from '../../themes/typography/Body'
import GradientColor from '../../themes/color_pallete/GradientColor'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import RedOutlineButton from '../buttons/RedOutlineButton'

const HeroSection = () => {
  return (
    <div className='relative overflow-hidden'>
      <img src={beranda1PMI} className='w-full h-[500px] scale-125 object-cover object-[55%_20%]' />
      <div className='absolute inset-0 opacity-90' style={{ background:GradientColor.gradient4 }} />
      <div className='absolute inset-0 opacity-80' style={{ background:GradientColor.gradient5 }} />
      <div className="absolute inset-0 flex items-center justify-end px-[50px] md:px-[100px] xl:px-[150px]">
        <div className='flex flex-col items-end'>
          <PageTitle className={'text-5xl mb-5'} style={{ color:PrimaryColor.white }}>PMI Surakarta</PageTitle>
          <Body className={'italic text-3xl mb-5'} style={{ color:PrimaryColor.white }}>Kami Siap Bantu!</Body>
          <RedOutlineButton path={'/about-us'}>Kenali PMI Surakarta</RedOutlineButton>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 