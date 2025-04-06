import React, { useState } from 'react'
import { FaCalendar, FaQuoteLeft } from 'react-icons/fa'

import { Colors } from '../../../themes/ColorPallete'
import { Body, Heading, Keterangan, SubHeading } from '../../../themes/Typography'
import ExampleQuotes from '../../assets/dummyData/ExampleQuotes'

const QuoteCard = ({ id, name, position, quote, image, className='', style={}, ...props }) => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(ExampleQuotes.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleQuotes = ExampleQuotes.slice(startIndex, startIndex + itemsPerPage);
  
  return (
    <div
      className={`max-w-[500px] rounded-3xl px-10 py-5 flex shadow-md cursor-pointer ${className}`}
      style={{
        backgroundColor: Colors.primary.white, ...style
      }}
      {...props}
    >
      <div className='flex gap-5'>
        {visibleQuotes.map((item) => (
          <div key={item.id} className='bg-white rounded-md p-4 flex'>
            <FaQuoteLeft size={63} color={ Colors.secondary.darkRed } className='opacity-30 mr-10'/>
            <div style={{ backgroundColor:Colors.secondary.darkRed }} className='w-1 mr-3'></div>
            {/* <Keterangan className={'text-justify'}>{item.quote}</Keterangan> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuoteCard