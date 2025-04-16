import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

import PageTitle from '../../themes/typography/PageTitle'
import Body from '../../themes/typography/Body'
import ExampleQuotes from '../../assets/dummy_data/ExampleQuotes'
import UseSliderAuto from '../../hooks/UseSliderAuto'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import SecondaryColor from '../../themes/color_pallete/SecondaryColor'
import SubHeading from '../../themes/typography/SubHeading'

const QuotesSection = () => {
  // Use our custom slider hook with 5000ms (5 seconds) interval
  const { currentIndex, goToSlide } = UseSliderAuto(ExampleQuotes.length, 10000);

  return (
    <div>
      <PageTitle className={'text-center pb-8'}>Apa Kata Mereka Tentang PMI Kota Surakarta</PageTitle>
      <Body className={'text-center pb-8'}>Pendapat masyarakat, mitra kerja, pejabat, tokoh masyarakat, dan pengusaha mengenai peran serta kegiatan yang dijalankan oleh PMI Kota Surakarta.</Body>
      
      <div className="px-4 md:px-20 lg:px-40 xl:px-80 mb-10">
        {/* Slider container with overflow hidden */}
        <div className="overflow-hidden">
          {/* Slider track that moves horizontally */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {ExampleQuotes.map((quote) => (
              <div 
                key={quote.id}
                className="w-full flex-shrink-0"
              >
                <div className="rounded-lg p-8 shadow-md flex items-start" style={{ backgroundColor: PrimaryColor.white }}>
                  <div className="mr-4">
                    <FaQuoteLeft
                      className='opacity-30'
                      size={80}
                      style={{ color: SecondaryColor.darkRed }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="border-l-4 ml-4 px-8" style={{ borderColor: SecondaryColor.darkRed }}>
                      <Body className="text-justify text-lg mb-4">{quote.quote}</Body>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <SubHeading style={{ color: PrimaryColor.red }}>{quote.name}</SubHeading>
                          <Body style={{ color: PrimaryColor.grey }}>{quote.position}</Body>
                        </div>
                        
                        <div className="flex-shrink-0 ml-4 w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                          {typeof quote.image === 'string' ? (
                            <img src={quote.image} alt={quote.name} className="w-full h-full object-cover" />
                          ) : (
                            <div style={{ backgroundColor: PrimaryColor.grey }}>{quote.image}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-6">
          {ExampleQuotes.map((_, index) => (
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

export default QuotesSection 