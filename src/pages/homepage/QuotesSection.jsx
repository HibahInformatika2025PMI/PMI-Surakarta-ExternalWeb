/***
 * This section will display the quotes about the PMI Kota Surakarta.
 * This section is a sub-section of Homepage.
 */

import React from 'react'

import ExampleQuotes from '../../assets/dummy_api/ExampleQuotes'

import QuotesList from '../../components/shared/QuotesList'

import { UseSlider3 } from '../../hooks/UseSlider'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../themes/typography/PageSubTitle'
import Body from '../../themes/typography/Body'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const QuotesSection = ({ className }) => {
  // For auto slider with 10 seconds interval
  const { currentSlide, nextSlide, prevSlide, goToSlide } = UseSlider3(ExampleQuotes.length, 10000)

  return (
    <div className={`px-[160px] ${className}`}>
      <PageSubTitle className={'mb-5 text-center'} style={{ color: PrimaryColor.red }}>Apa Kata Mereka Tentang PMI Kota Surakarta</PageSubTitle>
      <Body className={'mb-10 text-center'}>Pendapat masyarakat, mitra kerja, pejabat, tokoh masyarakat, dan pengusaha mengenai peran serta kegiatan yang dijalankan oleh PMI Kota Surakarta.</Body>

      <div className=''>
        <div className='overflow-hidden'>
          <QuotesList
            quotes={ExampleQuotes}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          />
        </div>

        <div className='flex justify-center items-center mt-6'>
          <button onClick={prevSlide} className='mr-4'>
            <FaAngleLeft size={24} />
          </button>

          {ExampleQuotes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 mx-2 rounded-full ${index === currentSlide ? 'bg-[#9e2a2b]' : 'bg-gray-300'}`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}

          <button onClick={nextSlide} className='ml-4'>
            <FaAngleRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuotesSection