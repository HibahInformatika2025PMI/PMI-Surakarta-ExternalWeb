import React, { useState } from 'react'
import { FaTint, FaAmbulance, FaDonate, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import beranda1PMI from '../../assets/images/beranda1_pmi.png'
import beranda2PMI from '../../assets/images/beranda2_pmi.png'
import GriyaPMI1 from '../../assets/images/GriyaPMI1.png'
import GriyaPMI2 from '../../assets/images/GriyaPMI2.png'
import GriyaPMI3 from '../../assets/images/GriyaPMI3.png'
import GriyaPMI4 from '../../assets/images/GriyaPMI4.png'
import DonasiCard from '../../assets/images/DonasiPMI.png'

import HomepageCard from '../../components/card/HomepageCard'
import DonationCard from '../../components/card/DonationCard'
import RedOutlineButton from '../../components/buttons/RedOutlineButton'
import GradRedDarkButton from '../../components/buttons/GradRedDarkButton'
import ArticlesList from '../../components/shared/ArticlesList'

import PageTitle from '../../themes/typography/PageTitle'
import Body from '../../themes/typography/Body'
import GradientColor from '../../themes/color_pallete/GradientColor'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor'

import UseEffectFetchArticles from '../../hooks/UseEffectFetchArticles'

import HandleLoading from '../../utils/HandleLoading'
import HandleError from '../../utils/HandleError'
import HandleZeroArticles from '../../utils/HandleZeroArticles'

const Homepage = () => {
  // Fetch news articles
  const { featuredArticles, loading, error } = UseEffectFetchArticles();

  // Slider logic
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <div className='relative overflow-hidden mb-[75px]'>
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

      <div className='flex justify-center gap-5 mb-[75px]'>
        <HomepageCard 
          icon={<FaTint size={28} color={PrimaryColor.white}/>}
          title='DONOR DARAH'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          buttonLabel='Selengkapnya'
          onClick={'/donor-darah'}
        />
        <HomepageCard 
          icon={<FaAmbulance size={28} color={PrimaryColor.white}/>}
          title='CALL AMBULANCE'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          buttonLabel='Selengkapnya'
          onClick={'/call-ambulance'}
        />
        <HomepageCard 
          icon={<FaDonate size={28} color={PrimaryColor.white}/>}
          title='DONASI'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          buttonLabel='Selengkapnya'
          onClick={'/donasi'}
        />
      </div>
      
      <div className='flex flex-col xl:flex-row items-center justify-center gap-10 mb-[100px] px-[160px]'>
        <div className='w-1/2 grid grid-cols-1 xl:grid-cols-2 gap-2 justify-items-center'>
          <img 
            src={ GriyaPMI1 } 
            alt="Griya PMI" 
            className="object-cover w-[400px] xl:w-full rounded-l-lg rounded-t-lg row-span-2"
            style={{ color:PrimaryColor.red, border:'5px solid' }} 
          />
          <img 
            src={ GriyaPMI2 }
            alt="Griya PMI"
            className="object-cover w-[400px] xl:w-full rounded-r-lg rounded-t-lg"
            style={{ color:PrimaryColor.red, border:'5px solid' }}
          />
          <img 
            src={ GriyaPMI3 }
            alt="Griya PMI"
            className="object-cover w-[400px] xl:w-full rounded-r-lg rounded-b-lg row-span-2"
            style={{ color:PrimaryColor.red, border:'5px solid' }}
          />
          <img 
            src={ GriyaPMI4 } 
            alt="Griya PMI" 
            className="object-cover w-[400px] xl:w-full rounded-l-lg rounded-b-lg"
            style={{ color:PrimaryColor.red, border:'5px solid' }}
          />
        </div>

        <div className='flex flex-col items-center xl:items-start justify-center'>
          <PageTitle className={'uppercase text-center x;:text-left mb-5'}>Yuk, kita bantu Griya PMI Peduli!</PageTitle>
          <Body className={'max-w-[700px] text-justify mb-5'}>Griya PMI Peduli merupakan tempat yang digunakan untuk menampung orang-orang telantar dengan kondisi gangguan jiwa atau psikotik (kelainan jiwa yang disertai dengan disintegrasi kepribadian dan gangguan kontak dengan kenyataan). Orang-orang telantar dengan kondisi seperti ini, baik muda maupun tua, dapat ditampung di Griya PMI Peduli.</Body>
          <GradRedDarkButton path={'/donasi'}>Donasi Sekarang</GradRedDarkButton>
        </div>
      </div>

      <div className='relative overflow-hidden mb-[100px]'>
        <img src={beranda2PMI} className='w-full h-[650px] object-cover object-top' />
        <div className='absolute inset-0 opacity-80' style={{ background:GradientColor.gradient6 }} />
        <div className='absolute inset-0 opacity-40' style={{ background:PrimaryColor.black }} />
        <div className="absolute inset-0">
          <div className='flex flex-col py-10 px-[25px] md:px-[75px] lg:px-[125px]'>
            <PageTitle className={'py-3'} style={{ color: PrimaryColor.white }}>DONASI PEDULI SESAMA</PageTitle>
            <Body className={'py-2'} style={{ color:PrimaryColor.white }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Body>
            
            <div className='flex justify-center items-center gap-10 py-[50px]'>
              <button className="transform bg-white rounded-full p-2">
                <FaAngleLeft size={24} />
              </button>
              
              <DonationCard 
                image={DonasiCard}
                title='Bantu Dek Immanuel Sembuh dari Penyakit Crohns Disease'
                description='Berjuang seorang diri, Ibunda harus membiayai seluruh pengobatan Immanuel dengan total lebih dari ... Read more'
                buttonLabel='Selengkapnya'
                onClick={'/donasi'}
              />
              <DonationCard 
                image={DonasiCard}
                title='Bantu Dek Immanuel Sembuh dari Penyakit Crohns Disease'
                description='Berjuang seorang diri, Ibunda harus membiayai seluruh pengobatan Immanuel dengan total lebih dari ... Read more'
                buttonLabel='Selengkapnya'
                onClick={'/donasi'}
              />
              <DonationCard 
                image={DonasiCard}
                title='Bantu Dek Immanuel Sembuh dari Penyakit Crohns Disease'
                description='Berjuang seorang diri, Ibunda harus membiayai seluruh pengobatan Immanuel dengan total lebih dari ... Read more'
                buttonLabel='Selengkapnya'
                onClick={'/donasi'}
              />

              <button className="transform bg-white rounded-full p-2">
                <FaAngleRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center mb-[100px] px-[160px]'>
        <PageTitle className={'text-center uppercase mb-10'}>Berita Terkini</PageTitle>
        
        {loading ? (
          <HandleLoading loadingText="Memuat berita..." />
        ) : error ? (
          <HandleError error={ error } />
        ) : featuredArticles.length === 0 ? (
          <HandleZeroArticles />
        ) : (
          <div>
            {/* List */}
            <ArticlesList articles={featuredArticles
              .slice(0, 8)
            } />
          </div>
        )}
      </div>

      <div className='mb-[100px]'>
        <PageTitle className={'text-center pb-8'}>Apa Kata Mereka Tentang PMI Kota Surakarta</PageTitle>
        <Body className={'text-center pb-8'}>Pendapat masyarakat, mitra kerja, pejabat, tokoh masyarakat, dan pengusaha mengenai peran serta kegiatan yang dijalankan oleh PMI Kota Surakarta.</Body>
        
      </div>
    </div>
  )
}

export default Homepage