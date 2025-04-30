/***
 * This section will display the partnership of the PMI Kota Surakarta.
 * This section is a sub-section of Homepage.
 */

import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import ExamplePartnership from '../../assets/dummy_api/ExamplePartnership'

import PartnershipList from '../../components/shared/PartnershipList'

import { UseSlider3 } from '../../hooks/UseSlider'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../themes/typography/PageSubTitle'


const PartnershipSection = ({ className }) => {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = UseSlider3(ExamplePartnership.length, 10000)

  return (
    <div className={`px-[160px] ${className}`}>
      <PageSubTitle className={'mb-5 text-center'} style={{ color: PrimaryColor.red }}>Partner Kami</PageSubTitle>

      <div className='relative'>
        <div className='overflow-hidden'>
          <PartnershipList
            partnership={ExamplePartnership}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          />
        </div>

        <div className='flex justify-center items-center'>
          <button onClick={prevSlide} className='mr-4'>
            <FaAngleLeft size={24} />
          </button>

          {ExamplePartnership.map((_, index) => (
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

export default PartnershipSection