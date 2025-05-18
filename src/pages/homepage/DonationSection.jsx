/***
 * This section will display the donation section of the PMI Kota Surakarta.
 * This section is a sub-section of Homepage.
 */

import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import PMIBeranda2 from '../../assets/images/pmi_beranda2.png'

import ExampleMonetaryDonation from '../../assets/dummy_api/ExampleMonetaryDonation'

import DonationHomepageCard from '../../components/cards/DonationHomepageCard'

import { UseSlider2 } from '../../hooks/UseSlider'

import { GradientColor, PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../themes/typography/PageSubTitle'
import Body from '../../themes/typography/Body'
import RedOutlineButton from '../../components/buttons/RedOutlineButton'

const DonationSection = ({ className }) => {
  const { currentSlide, totalItems, itemsToShow, nextSlide, prevSlide } = UseSlider2(ExampleMonetaryDonation)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <img src={PMIBeranda2} alt='PMI Kota Surakarta' className='w-full h-[650px] scale-125 object-cover object-top' />
      <div className='absolute inset-0 opacity-80' style={{ background: GradientColor.gradient6 }} />
      <div className='absolute inset-0 opacity-40' style={{ background: PrimaryColor.black }} />

      {/* Content */}
      <div className='absolute inset-0 flex flex-col py-10 px-[25px] md:px-[75px] lg:px-[125px]'>
        <PageSubTitle className={'py-3 uppercase'} style={{ color: PrimaryColor.white }}>Donasi Peduli Sesama</PageSubTitle>
        <Body className={'py-3'} style={{ color: PrimaryColor.white }}>Mari Peduli Dengan Berbagi Untuk Sesama</Body>

        {/* Slider */}
        <div className='relative w-full overflow-hidden py-[25px]'>
          <div 
            className='flex transition-transform duration-500'
            style={{ transform: `translateX(-${currentSlide * (100 / itemsToShow)}%)` }}
          >
            {ExampleMonetaryDonation.slice(0, 4).map((donation) => (
              <div key={donation.id} className='flex-shrink-0 w-[calc(100%/1)] lg:w-[calc(100%/2)] xl:w-[calc(100%/3)] justify-items-center'>
                <DonationHomepageCard 
                  image={donation.image}
                  title={donation.title}
                  description={donation.description}
                  buttonLabel={donation.buttonLabel}
                  path={donation.path}
                />
              </div>
            ))}
            {/* Additional card with different layout */}
            {ExampleMonetaryDonation[4] && (
              <div className='flex-shrink-0 w-[calc(100%/1)] lg:w-[calc(100%/2)] xl:w-[calc(100%/3)] justify-items-center self-center'>
                <RedOutlineButton className='w-full' path={'/donasi'}>Selengkapnya</RedOutlineButton>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          {totalItems > itemsToShow && (
            <div>
              <button className='absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 -ml-3 transition-colors' style={{ backgroundColor: PrimaryColor.white }} onClick={prevSlide}>
                <FaAngleLeft size={24} />
              </button>

              <button className='absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition-colors' style={{ backgroundColor: PrimaryColor.white }} onClick={nextSlide}>
                <FaAngleRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DonationSection