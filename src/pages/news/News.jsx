/***
 * This is the news page (Berita) of the website.
 * This page will display the news of the client side.
 */

import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { SearchBar1 } from '../../components/shared/SearchBar'
import ArticlesList from '../../components/shared/ArticlesList'

import UseFetchNews from '../../hooks/UseFetchNews'
import UseSearch from '../../hooks/UseSearch'
import { UseSlider1 } from '../../hooks/UseSlider'
import UseNavigation from '../../hooks/UseNavigation'
import UseScrollToTop from '../../hooks/UseScrollToTop'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageTitle from '../../themes/typography/PageTitle'
import Heading from '../../themes/typography/Heading'
import Body from '../../themes/typography/Body'

import HandleLoading from '../../utils/HandleLoading'
import HandleError from '../../utils/HandleError'
import HandleZeroNews from '../../utils/HandleZeroNews'
import CarouselCard from '../../components/cards/CarouselCard'

const News = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();
  // For fetching news
  const { featuredNews, loading, error } = UseFetchNews();
  // For normal slider 
  const { currentSlide, nextSlide, prevSlide } = UseSlider1(featuredNews);
  // For navigation
  const { handleNavigation } = UseNavigation();
  // For search
  const { searchQuery, filteredItems: filteredNews, handleSearch } = UseSearch(featuredNews, ['title', 'summary', 'content']);

  return (
    <section className='w-full flex flex-col items-center py-[48px] px-[160px]'>
      {/* Header */}
      <PageTitle className={'mb-6 uppercase'} style={{ color: PrimaryColor.red }}>Berita Terkini</PageTitle>
      <Body className={'max-w-[1180px] text-lg text-center mb-6'}>
        Berita terkini seputar PMI dan kegiatan yang dilakukan oleh PMI. Berita ini ditujukan untuk masyarakat umum agar lebih mengenal PMI.
      </Body>

      {/* Search Bar */}
      <div className='w-full max-w-[780px] min-w-[320px]'>
        <SearchBar1 
          placeholder={'Cari artikel disini....'} 
          onSearch={handleSearch}
        />
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
          {!searchQuery && (
            <div className='relative w-full mt-5 mb-6 rounded-lg overflow-hidden'>
              {/* Slider */}
              <div className='h-[500px] flex transition-transform duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {/* News Items */}
                {featuredNews.map((news) => (
                  <div 
                    key={news.id}
                    className='min-w-full relative cursor-pointer group h-[500px] flex transition-transform duration-500'
                    onClick={() => handleNavigation(`/news/article/${news.id}`)}
                  >
                    <CarouselCard
                      image={news.cover_image}
                      title={news.title}
                      summary={news.summary}
                    />
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
          )}

          {/* News List */}
          {filteredNews.length === 0 ? (
            <HandleZeroNews />
          ) : (
            <ArticlesList news={filteredNews} />
          )}
        </div>
      )}
    </section>
  )
}

export default News