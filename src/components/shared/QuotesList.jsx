/***
 * This component is used to display a list of quotes.
 * 
 * Is used in:
 * - QuotesSection.jsx
 */

import React from 'react'

import QuotesCard from '../cards/QuotesCard'

const QuotesList = ({ quotes, style }) => {
  return (
    <div
      className='flex transition-transform duration-500 ease-in-out'
      style={style}
    >
      {quotes.map((item) => (
        <div
        key={item.id}
        className='w-full flex-shrink-0'
        >
          <QuotesCard
            name={item.name}
            position={item.position}
            quote={item.quote}
            image={item.image}
          />
        </div>
      ))}
    </div>
  )
}

export default QuotesList