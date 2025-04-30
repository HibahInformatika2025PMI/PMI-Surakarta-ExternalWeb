/***
 * This component is used to display a list of partnership.
 * 
 * Is used in:
 * - PartnershipSection.jsx
 */

import React from 'react'

const PartnershipList = ({ partnership, style }) => {
  return (
    <div
      className='flex transition-transform duration-500 ease-in-out'
      style={style}
    >
      {partnership.map((item) => (
        <div 
          key={item.id}
          className='w-full flex-shrink-0'
        >
          <span className='w-[full] h-[300px] flex items-center justify-center p-4 rounded-lg shadow-sm'>
            <img
              src={item.image}
              alt={item.name}
              className='max-w-full max-h-full object-contain'
            />
          </span>
        </div>
      ))}
    </div>
  )
}

export default PartnershipList