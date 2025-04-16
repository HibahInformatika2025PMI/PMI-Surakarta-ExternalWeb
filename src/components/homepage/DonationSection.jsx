import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import beranda2PMI from '../../assets/images/beranda2_pmi.png'
import PageTitle from '../../themes/typography/PageTitle'
import Body from '../../themes/typography/Body'
import GradientColor from '../../themes/color_pallete/GradientColor'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import DonationCard from '../card/DonationCard'
import ExampleDonation from '../../assets/dummy_data/ExampleDonation'

const DonationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = ExampleDonation.length;
  const cardsToShow = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (totalCards - cardsToShow + 1)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalCards - cardsToShow : prevIndex - 1
    );
  };

  const visibleDonations = ExampleDonation.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className='relative overflow-hidden'>
      <img src={beranda2PMI} className='w-full h-[650px] object-cover object-top' />
      <div className='absolute inset-0 opacity-80' style={{ background:GradientColor.gradient6 }} />
      <div className='absolute inset-0 opacity-40' style={{ background:PrimaryColor.black }} />
      <div className="absolute inset-0">
        <div className='flex flex-col py-10 px-[25px] md:px-[75px] lg:px-[125px]'>
          <PageTitle className={'py-3'} style={{ color: PrimaryColor.white }}>DONASI PEDULI SESAMA</PageTitle>
          <Body className={'py-2'} style={{ color:PrimaryColor.white }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Body>
          
          {/* Slider Donasi Section */}
          <div className='flex justify-center items-center gap-10 py-[50px]'>
            <button 
              className="transform bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              onClick={handlePrev}
            >
              <FaAngleLeft size={24} />
            </button>
            
            {visibleDonations.map((donation) => (
              <DonationCard 
                key={donation.id}
                image={donation.image}
                title={donation.title}
                description={donation.description}
                buttonLabel={donation.buttonLabel}
                onClick={'/donasi'}
              />
            ))}

            <button 
              className="transform bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              onClick={handleNext}
            >
              <FaAngleRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationSection 