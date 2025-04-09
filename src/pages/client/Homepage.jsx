import React, { useState } from 'react'
import { FaTint, FaAmbulance, FaDonate, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import articlePMI from '../../assets/images/article_pmi.png'
import beranda1PMI from '../../assets/images/beranda1_pmi.png'
import beranda2PMI from '../../assets/images/beranda2_pmi.png'
import GriyaPMI1 from '../../assets/images/GriyaPMI1.png'
import GriyaPMI2 from '../../assets/images/GriyaPMI2.png'
import GriyaPMI3 from '../../assets/images/GriyaPMI3.png'
import GriyaPMI4 from '../../assets/images/GriyaPMI4.png'
import DonasiCard from '../../assets/images/DonasiPMI.png'

import ExampleQuotes from '../../assets/dummyData/ExampleQuotes'

import { GradientOutlineButton, GradientRedButton, OutlineButton } from '../../components/shared/Button'
import CardHomepage from '../../components/shared/card/HomepageCard'
import CardDonasi from '../../components/shared/card/DonationCard'

import { Colors } from '../../themes/ColorPallete'
import { PageTitle, Body } from '../../themes/Typography'
import CardNews from '../../components/shared/card/NewsCard'
// import QuoteCard from '../../components/shared/card/QuotesCard'

const Homepage = () => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(ExampleQuotes.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleQuotes = ExampleQuotes.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className='relative overflow-hidden mb-[75px]'>
        <img src={beranda1PMI} className='w-full h-[500px] scale-125 object-cover object-[55%_20%]' />
        <div className='absolute inset-0 opacity-90' style={{ background:Colors.gradient.gradient4 }} />
        <div className='absolute inset-0 opacity-80' style={{ background:Colors.gradient.gradient5 }} />
        <div className="absolute inset-0 flex items-center justify-end px-[50px] md:px-[100px] xl:px-[150px]">
          <div className='flex flex-col items-end'>
            <PageTitle className={'text-5xl mb-5'} style={{ color:Colors.primary.white }}>PMI Surakarta</PageTitle>
            <Body className={'italic text-3xl mb-5'} style={{ color:Colors.primary.white }}>Kami Siap Bantu!</Body>
            <OutlineButton>Kenali PMI Surakarta</OutlineButton>
          </div>
        </div>
      </div>

      <div className='flex justify-center gap-5 mb-[75px]'>
        <CardHomepage 
          icon={<FaTint size={28} color={Colors.primary.white}/>}
          title='DONOR DARAH'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          buttonLabel='Selengkapnya'
        />
        <CardHomepage 
          icon={<FaAmbulance size={28} color={Colors.primary.white}/>}
          title='CALL AMBULANCE'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          buttonLabel='Selengkapnya'
        />
        <CardHomepage 
          icon={<FaDonate size={28} color={Colors.primary.white}/>}
          title='DONASI'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          buttonLabel='Selengkapnya'
        />
      </div>
      
      <div className='flex justify-center gap-10 mb-[100px]'>
        <div className='w-[700px] grid grid-cols-2 gap-2'>
          <img 
            src={ GriyaPMI1 } 
            alt="Griya PMI" 
            className="object-cover rounded-l-lg rounded-t-lg row-span-2" 
            style={{ color:Colors.primary.red, border:'5px solid' }} 
          />
          <img 
            src={ GriyaPMI2 }
            alt="Griya PMI" className="object-cover rounded-r-lg rounded-t-lg"
            style={{ color:Colors.primary.red, border:'5px solid' }}
          />
          <img 
            src={ GriyaPMI3 }
            alt="Griya PMI"
            className="object-cover rounded-r-lg rounded-b-lg row-span-2"
            style={{ color:Colors.primary.red, border:'5px solid' }}
          />
          <img 
            src={ GriyaPMI4 } 
            alt="Griya PMI" 
            className="object-cover rounded-l-lg rounded-b-lg"
            style={{ color:Colors.primary.red, border:'5px solid' }}
          />
        </div>

        <div className='flex flex-col items-start justify-center'>
          <PageTitle className={'uppercase mb-5'}>Yuk, kita bantu Griya PMI Peduli!</PageTitle>
          <Body className={'max-w-[700px] text-justify mb-5'}>Griya PMI Peduli merupakan tempat yang digunakan untuk menampung orang-orang telantar dengan kondisi gangguan jiwa atau psikotik (kelainan jiwa yang disertai dengan disintegrasi kepribadian dan gangguan kontak dengan kenyataan). Orang-orang telantar dengan kondisi seperti ini, baik muda maupun tua, dapat ditampung di Griya PMI Peduli.</Body>
          <GradientRedButton>Donasi Sekarang</GradientRedButton>
        </div>
      </div>

      <div className='relative overflow-hidden mb-[100px]'>
        <img src={beranda2PMI} className='w-full h-[650px] object-cover object-top' />
        <div className='absolute inset-0 opacity-80' style={{ background:Colors.gradient.gradient6 }} />
        <div className='absolute inset-0 opacity-40' style={{ background:Colors.primary.black }} />
        <div className="absolute inset-0">
          <div className='flex flex-col py-10 px-[25px] md:px-[75px] lg:px-[125px]'>
            <PageTitle className={'py-3'} style={{ color: Colors.primary.white }}>DONASI PEDULI SESAMA</PageTitle>
            <Body className={'py-2'} style={{ color:Colors.primary.white }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Body>
            
            <div className='flex justify-center items-center gap-10 py-[50px]'>
              <button className="transform bg-white rounded-full p-2">
                <FaAngleLeft size={24} />
              </button>
              
              <CardDonasi 
                image={DonasiCard}
                title='Bantu Dek Immanuel Sembuh dari Penyakit Crohns Disease'
                description='Berjuang seorang diri, Ibunda harus membiayai seluruh pengobatan Immanuel dengan total lebih dari ... Read more'
                buttonLabel='Selengkapnya'
              />
              <CardDonasi 
                image={DonasiCard}
                title='Bantu Dek Immanuel Sembuh dari Penyakit Crohns Disease'
                description='Berjuang seorang diri, Ibunda harus membiayai seluruh pengobatan Immanuel dengan total lebih dari ... Read more'
                buttonLabel='Selengkapnya'
              />
              <CardDonasi 
                image={DonasiCard}
                title='Bantu Dek Immanuel Sembuh dari Penyakit Crohns Disease'
                description='Berjuang seorang diri, Ibunda harus membiayai seluruh pengobatan Immanuel dengan total lebih dari ... Read more'
                buttonLabel='Selengkapnya'
              />

              <button className="transform bg-white rounded-full p-2">
                <FaAngleRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center mb-[100px]'>
        <PageTitle className={'text-center uppercase mb-10'}>Berita Terkini</PageTitle>

        <div className='flex flex-wrap gap-5 justify-center'>
          <CardNews
            id='1'
            image={articlePMI}
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            date='21 Januari 2025'
          />
          <CardNews
            id='2'
            image={articlePMI}
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            date='21 Januari 2025'
          />
          <CardNews
            id='3'
            image={articlePMI}
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            date='21 Januari 2025'
          />
          <CardNews
            id='4'
            image={articlePMI}
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            date='21 Januari 2025'
          />
          <CardNews
            id='5'
            image={articlePMI}
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            date='21 Januari 2025'
          />
          <CardNews
            id='6'
            image={articlePMI}
            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            date='21 Januari 2025'
          />
          
          <GradientOutlineButton className={'w-full'}>
            Baca Selengkapnya
          </GradientOutlineButton>
        </div>
      </div>

      <div className='mb-[100px]'>
        <PageTitle className={'text-center pb-8'}>Apa Kata Mereka Tentang PMI Kota Surakarta</PageTitle>
        <Body className={'text-center pb-8'}>Pendapat masyarakat, mitra kerja, pejabat, tokoh masyarakat, dan pengusaha mengenai peran serta kegiatan yang dijalankan oleh PMI Kota Surakarta.</Body>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleQuotes.map((item) => (
              <div key={item.id} className='bg-white rounded-md shadow-md p-4'>

              </div>
            ))};
          </div>
        </div>

      </div>


    </div>
  )
}

export default Homepage