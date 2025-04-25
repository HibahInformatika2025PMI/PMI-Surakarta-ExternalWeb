/***
 * This is the news page (Berita) of the website.
 * This page will display the news of the client side.
 */

import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import SearchBar from '../../../components/shared/SearchBar'
import ArticlesList from '../../../components/shared/ArticlesList'

import UseFetchNews from '../../../hooks/UseFetchNews'
import { UseSlider1 } from '../../../hooks/UseSlider'
import UseNavigation from '../../../hooks/UseNavigation'

import { GradientColor, PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import PageTitle from '../../../themes/typography/PageTitle'
import Heading from '../../../themes/typography/Heading'
import Body from '../../../themes/typography/Body'

import HandleLoading from '../../../utils/HandleLoading'
import HandleError from '../../../utils/HandleError'
import HandleZeroNews from '../../../utils/HandleZeroNews'

const ClientNews = () => {
  const { featuredNews, loading, error } = UseFetchNews();
  const { currentSlide, nextSlide, prevSlide } = UseSlider1(featuredNews);
  const { handleNavigation } = UseNavigation();

  return (
    <div className='w-full flex flex-col items-center py-[48px] px-[160px]'>
      {/* Header */}
      <PageTitle className={'mb-6 uppercase'} style={{ color: PrimaryColor.red }}>Berita Terkini</PageTitle>
      <Body className={'max-w-[1180px] text-lg text-center mb-6'}>
        Berita terkini seputar PMI dan kegiatan yang dilakukan oleh PMI. Berita ini ditujukan untuk masyarakat umum agar lebih mengenal PMI.
      </Body>

      {/* Search Bar */}
      <div className='w-full max-w-[780px] min-w-[320px]'>
        <SearchBar placeholder={'Cari artikel disini....'} />
      </div>

      {/* Content */}
      {loading ? (
        <HandleLoading loadingText={'Memuat berita...'} />
      ) : error ? (
        <HandleError errorText={'Gagal memuat berita...'} />
      ) : featuredNews.length === 0 ? (
        <HandleZeroNews />
      ) : (
        <div>
          <div className='relative w-full mt-5 mb-6 rounded-lg overflow-hidden'>
            {/* Slider */}
            <div className='h-[500px] flex transition-transform duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {/* News Items */}
              {featuredNews.map((news) => (
                <div 
                key={news.id}
                className='min-w-full relative cursor-pointer group'
                onClick={() => handleNavigation(`/news/article/${news.id}`)}
                >
                  <img src={news.cover_image} alt={news.title} className='w-full h-full object-cover rounded-lg' />
                  <div 
                    className='absolute bottom-0 left-0 w-full p-4 backdrop-opacity-90 px-10 py-10 rounded-b-lg'
                    style={{ background: GradientColor.gradient7, color: PrimaryColor.white }}
                  >
                    <Heading style={{ color: PrimaryColor.white }}>{news.title}</Heading>
                    <Body className={'mt-2 line-clamp-2'} style={{ color: PrimaryColor.white }}>{news.summary}</Body>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button 
              className='absolute top-1/2 left-8 transform -translate-y-1/2 p-2 rounded-full'
              style={{ backgroundColor: PrimaryColor.white, color: PrimaryColor.black }}
              onClick={prevSlide}
              >
              <FaChevronLeft size={24} />
            </button>
            <button 
              className='absolute top-1/2 right-8 transform -translate-y-1/2 p-2 rounded-full'
              style={{ backgroundColor: PrimaryColor.white, color: PrimaryColor.black }}
              onClick={nextSlide}
              >
              <FaChevronRight size={24} />
            </button>
          </div>

          {/* News List */}
          <ArticlesList news={featuredNews} />
        </div>
      )}
    </div>
  )
}

export default ClientNews