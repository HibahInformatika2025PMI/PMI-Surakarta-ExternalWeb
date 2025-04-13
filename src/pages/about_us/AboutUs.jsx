import React from 'react'

import seragamPMI from '../../assets/images/seragam-pmi.jpg'
import topiPMI from '../../assets/images/topi-pmi.jpg'
import oldPMI from '../../assets/images/old-PMI-Kota-Surakarta.jpg'
import principlesPMI from '../../assets/images/tujuh-prinsip-dasar-palang-merah-wth.png'

import GradientColor from '../../themes/color_pallete/GradientColor'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import { AboutPMI, DescPrinciplesSection, HistoryPMI, ListPMIPrinciples, Misi, Regulation, Visi } from '../../assets/text_data/AboutUsData'
import Heading from '../../themes/typography/Heading'

const AboutUs = () => {
  return (
    <div>
      {/* About PMI Section */}
      <div className='relative overflow-hidden'>
        <img src={seragamPMI} className='w-full h-[600px] scale-125 object-cover' />
        <div className='absolute inset-0 opacity-30' style={{ background:GradientColor.gradient3 }} />
        <div className='absolute inset-0 opacity-70' style={{ background:GradientColor.gradient6 }} />

        <div className='absolute inset-0 flex items-center px-[50px] md:px-[100px] xl:px-[200px]'>
          <div className='flex flex-col'>
            <Heading className={'text-4xl mb-4'} style={{ color:PrimaryColor.white }}>Tentang Palang Merah Indonesia</Heading>
            <AboutPMI className={'text-lg mt-4'} />
          </div>
        </div>
      </div>

      {/* History PMI Section */}
      <div className='flex flex-col xl:flex-row items-center justify-center gap-10 py-[100px] px-[160px]' style={{ background:PrimaryColor.white }}>
        <img 
          src={ oldPMI }
          alt="PMI Surakarta Lama"
          className='object-cover w-[500px] rounded-tl-3xl rounded-br-3xl'
          style={{ color:PrimaryColor.red, border:'5px solid' }}
        />
        <div>
          <Heading className={'text-4xl text-center xl:text-justify'}>Salah Satu Pelopor di Indonesia</Heading>
          <HistoryPMI className={'text-lg mt-4'} />
        </div>
      </div>

      {/* Visi Misi Regulation Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[50px] py-[100px] px-[160px]'>
        <span className='justify-items-center'>
          <Heading className={'text-4xl mb-3'}>Visi</Heading>
          <Visi className={'text-lg'} />
        </span>
        <span className='justify-items-center'>
          <Heading className={'text-4xl mb-3'}>Misi</Heading>
          <Misi className={'text-md'} />
        </span>
        <span className='justify-items-center md:col-span-2'>
          <Heading className={'text-4xl mb-3'}>Kebijakan Mutu</Heading>
          <Regulation className={'text-lg'} />
        </span>
      </div>

      {/* PMI Principles */}
      <div className='relative flex flex-col md:flex-row items-center px-[50px] md:px-[100px] xl:px-[200px] gap-10'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img src={topiPMI} alt="Background" className='w-full h-full object-cover md:object-[50%_40%]' />
          <div className='absolute inset-0 opacity-50' style={{ background: PrimaryColor.black }} />
        </div>

        <div className='relative z-10 flex flex-col md:flex-row items-center gap-10 w-full py-[30px]'>
          {/* Image */}
          <img 
            src={principlesPMI} 
            alt="7 Prinsip PMI" 
            className='w-[300px] flex-shrink-0' 
          />
          {/* Text Content */}
          <div className='flex flex-col flex-grow'>
            <Heading 
              className={'text-4xl capitalize text-center md:text-start mb-5'} 
              style={{ color: PrimaryColor.white }}
            >
              Tujuh Prinsip Dasar Gerakan Palang Merah dan Bulan Sabit Merah Internasional
            </Heading>
            <DescPrinciplesSection className={'text-lg mb-10'} />
          </div>
        </div>
      </div>
      
      <ListPMIPrinciples className={'text-lg pt-[20px] pb-[100px] px-[50px] md:px-[100px] xl:px-[200px]'}/>
    </div>
  )
}

export default AboutUs