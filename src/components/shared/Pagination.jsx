/***
 * This component is used to display the pagination indicator for the slider
 * 
 * is used in :
 * - QuotesSection.jsx
 * - PartnershipSection.jsx
 * - MonetaryDonationList.jsx
 */

import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Body from '../../themes/typography/Body'

// Pagination with Dot style
export const Pagination1 = ({ currentSlide, totalSlides, onPrev, onNext, onSlideClick }) => {
  return (
    <div className='flex justify-center items-center'>
      <button onClick={onPrev} className='mr-4'>
        <FaAngleLeft size={24} />
      </button>

      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideClick(index)}
          className={`w-3 h-3 mx-2 rounded-full ${index === currentSlide ? 'bg-[#9e2a2b]' : 'bg-gray-300'}`}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}

      <button onClick={onNext} className='ml-4'>
        <FaAngleRight size={24} />
      </button>
    </div>
  )
}

// Pagination with Number style
export const Pagination2 = ({ currentSlide, totalSlides, onPrev, onNext }) => {
  return (
    <div className='flex justify-center items-center'>
      <button onClick={onPrev} className='mr-4'>
        <FaAngleLeft size={24} />
      </button>

      <Body className='mx-4'>
        Page {currentSlide} / {totalSlides}
      </Body>

      <button onClick={onNext} className='ml-4'>
        <FaAngleRight size={24} />
      </button>
    </div>
  )
}