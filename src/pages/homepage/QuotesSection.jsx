/***
 * This section will display the quotes about the PMI Kota Surakarta.
 * This section is a sub-section of Homepage.
 */

import React from 'react'

import ExampleQuotes from '../../assets/dummy_api/ExampleQuotes'

import QuotesList from '../../components/shared/QuotesList'
import { Pagination1 } from '../../components/shared/Pagination'

import { UseSlider3 } from '../../hooks/UseSlider'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../themes/typography/PageSubTitle'
import Body from '../../themes/typography/Body'

const QuotesSection = ({ className }) => {
  // For auto slider with 10 seconds interval
  const { currentSlide, nextSlide, prevSlide, goToSlide } = UseSlider3(ExampleQuotes.length, 10000)

  return (
    <div className={`px-[160px] ${className}`}>
      <PageSubTitle className={'mb-5 text-center'} style={{ color: PrimaryColor.red }}>Apa Kata Mereka Tentang PMI Kota Surakarta</PageSubTitle>
      <Body className={'mb-10 text-center'}>Pendapat masyarakat, mitra kerja, pejabat, tokoh masyarakat, dan pengusaha mengenai peran serta kegiatan yang dijalankan oleh PMI Kota Surakarta.</Body>

      {/* Content */}
      <div className='relative'>
        <div className='overflow-hidden mb-5'>
          <QuotesList
            quotes={ExampleQuotes}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          />
        </div>

        {/* Pagination */}
        <Pagination1
          currentSlide={currentSlide}
          totalSlides={ExampleQuotes.length}
          onPrev={prevSlide}
          onNext={nextSlide}
          onSlideClick={goToSlide}
        />
      </div>
    </div>
  )
}

export default QuotesSection