/***
 * This section will display the partnership of the PMI Kota Surakarta.
 * This section is a sub-section of Homepage.
 */

import React from 'react'

import ExamplePartnership from '../../assets/dummy_api/ExamplePartnership'

import PartnershipList from '../../components/shared/PartnershipList'
import { Pagination1 } from '../../components/shared/Pagination'

import { UseSlider3 } from '../../hooks/UseSlider'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../themes/typography/PageSubTitle'

const PartnershipSection = ({ className }) => {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = UseSlider3(ExamplePartnership.length, 10000)

  return (
    <div className={`px-[160px] ${className}`}>
      <PageSubTitle className={'mb-5 text-center'} style={{ color: PrimaryColor.red }}>Partner Kami</PageSubTitle>

      {/* Content */}
      <div className='relative'>
        <div className='overflow-hidden mb-5'>
          <PartnershipList
            partnership={ExamplePartnership}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          />
        </div>

        {/* Pagination */}
        <Pagination1
          currentSlide={currentSlide}
          totalSlides={ExamplePartnership.length}
          onPrev={prevSlide}
          onNext={nextSlide}
          onSlideClick={goToSlide}
        />
      </div>
    </div>
  )
}

export default PartnershipSection