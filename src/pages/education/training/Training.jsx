/***
 * This is the training page (Pelatihan) of the PMI Kota Surakarta.
 */

import React from 'react'

import TrainingImage from '../../../assets/images/pmi_cpr.jpg'
import TrainingImage2 from '../../../assets/images/pmi_simulasibencana.jpg'
import AccidentImage1 from '../../../assets/images/Data-Kasus-Kecelakaan-Kerja.png'
import AccidentImage2 from '../../../assets/images/Data-Kasus-Laka-Lantas.png'
import FirstAiderImage from '../../../assets/images/pmi_logo_FirstAider.png'
import { AboutPPGD, ImportanceOfPPGD, BasicMaterial, Facility, ElectiveMaterial, TrainingLocation } from '../../../assets/text/TrainingData'

import RedButton from '../../../components/buttons/RedButton'
import { BannerLayout2 } from '../../../components/shared/BannerLayout'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import PageTitle from '../../../themes/typography/PageTitle'
import PageSubTitle from '../../../themes/typography/PageSubTitle'
import Body from '../../../themes/typography/Body'

const Training = ({ className }) => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  return (
    <section className={`${className}`}>
      <BannerLayout2
        image={TrainingImage}
        imageDescription='Pelatihan PMI Kota Surakarta'
        title={`Pelatihan Penaganan Penderita Gawat Darurat
          (PPGD)`}
      >
      </BannerLayout2>

      <AboutPPGD className='px-[50px] md:px-[100px] xl:px-[160px] py-[75px] flex gap-10' />

      <BannerLayout2
        image={TrainingImage2}
        imageDescription='Pelatihan PMI Kota Surakarta'
        title={`Pentingnya PPGD`}
      >
        <ImportanceOfPPGD style={{ color: PrimaryColor.white }} />
      </BannerLayout2>
      
      <div className='px-[50px] md:px-[100px] xl:px-[160px] py-[75px] flex justify-center gap-10'>
        <img src={AccidentImage1} alt='Kasus Kecelakaan Kerja' className='w-1/3' />
        <img src={AccidentImage2} alt='Kasus Laka Lantas' className='w-1/3' />
      </div>
      
      <div
        className='px-[50px] md:px-[100px] xl:px-[160px] py-[75px] flex flex-col justify-center items-center gap-10'
        style={{ backgroundColor: PrimaryColor.white }}
      >
        <img src={FirstAiderImage} alt='First Aider' className='w-1/3' />
        <div className='flex flex-col md:flex-row gap-10'>
          <BasicMaterial className={'w-full md:w-1/2 lg:w-1/3'}/>
          <Facility className={'w-full md:w-1/2 lg:w-1/3'}/>
          <ElectiveMaterial className={'w-full md:w-1/2 lg:w-1/3'}/>
        </div>
      </div>

      <div className='px-[50px] md:px-[100px] xl:px-[160px] py-[75px] flex flex-col justify-center items-center gap-10'>
        <PageTitle className={'uppercase'}>Biaya Pelatihan</PageTitle>
        <PageSubTitle>Rp. 3.500.000,- (15 orang)</PageSubTitle>
        <Body className='text-center'>Meliputi Pelatihan Penanganan Penderita Gawat Darurat/PPGD Awam, Paket 1 Hari, Pelatihan “indor” teori dan peragaan oleh instruktur, praktek materi basic. Peserta maksimal 15 orang dari satu perusahaan/instansi atau gabungan dari berbagai perusahaan/instansi/perorangan.</Body>
        <RedButton>Daftar Sekarang</RedButton>
      </div>

      <div className='px-[50px] md:px-[100px] xl:px-[160px] py-[75px] flex flex-col justify-center items-center gap-10'>
        <PageTitle className={'uppercase'}>Tempat Pelatihan</PageTitle>
        <TrainingLocation className={'w-2/3'}/>
      </div>
    </section>
  )
}

export default Training