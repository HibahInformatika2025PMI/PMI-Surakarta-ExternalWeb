import React from 'react'

import PageTitle from '../../themes/typography/PageTitle'
import ExamplePartnership from '../../assets/dummy_data/ExamplePartnership'
import UseSliderAuto from '../../hooks/UseSliderAuto'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import SecondaryColor from '../../themes/color_pallete/SecondaryColor'
import Body from '../../themes/typography/Body'

const PartnerSection = () => {
  // Use our custom slider hook with 5000ms (5 seconds) interval
  const { currentIndex, goToSlide } = UseSliderAuto(ExamplePartnership.length, 5000);

  return (
    <div>
      <PageTitle className={'text-center uppercase mb-10'}>Partner Kami</PageTitle>
      
      <div className="px-4 md:px-20 lg:px-40 xl:px-80 mb-2">
        {/* Slider container with overflow hidden */}
        <div className="overflow-hidden">
          {/* Slider track that moves horizontally */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {ExamplePartnership.map((partner) => (
              <div 
                key={partner.id}
                className="w-full flex-shrink-0"
              >
                <div className="flex justify-center items-center">
                  <div className="w-[1000px] h-[300px] flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-6">
          {ExamplePartnership.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? 'bg-[#9e2a2b]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnerSection