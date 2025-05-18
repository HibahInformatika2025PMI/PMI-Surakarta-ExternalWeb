/***
 * This component is used as a template for the donation items card.
 * 
 * Is used in:
 * - ItemsDonationList.jsx
 */

import React from 'react'
import { FaCalendar, FaShare } from 'react-icons/fa'

import RedOutlineButton from '../buttons/RedOutlineButton'
import GradRedDarkButton from '../buttons/GradRedDarkButton'

import { PrimaryColor, SecondaryColor } from '../../themes/color_palletes/ColorPalletes'
import SubHeading from '../../themes/typography/SubHeading'
import Subtitle from '../../themes/typography/Subtitle'

const DonationItemsCard = ({ image, startDate, endDate, title, description, progress, itemsReceived, targetItems, donatePath, detailPath, sharePath, className, style, ...props }) => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row rounded-xl shadow-md overflow-hidden ${className}`}
      style={{ backgroundColor: PrimaryColor.white }}
      {...props}
    >
      {/* Image Part */}
      <div className='w-full lg:w-2/6 h-full rounded-md shadow-lg'>
        <img src={image} alt={title} className="w-full h-[300px] object-cover" />
      </div>

      {/* Content Part */}
      <div className='w-full lg:w-3/6 h-full p-5 flex flex-col gap-4'>
        {/* Date Part */}
        <div className='w-fit flex flex-row justify-center items-center px-4 py-1 gap-2' style={{ backgroundColor: SecondaryColor.light_grey, borderRadius: '10px' }}>
          <FaCalendar className='opacity-50' />
          <Subtitle >
            {startDate ? new Date(startDate).toLocaleDateString() : 'N/A'} - {endDate ? new Date(endDate).toLocaleDateString() : 'N/A'}
          </Subtitle>
        </div>
        
        <SubHeading className='h-[60px] line-clamp-2'>{title}</SubHeading>
        <Subtitle className='text-justify line-clamp-3'>{description}</Subtitle>

        {/* Progress Bar Part */}
        <div className='w-full flex flex-col gap-2'>
          {/* Progress Percentage */}
          <div className='relative w-full h-[15px]'>
            <span
              className='absolute text-xs font-bold'
              style={{
                left: `calc(${itemsReceived / targetItems * 100}% - 20px)`,
                color: PrimaryColor.red,
                top: 0,
                transition: 'left 0.3s',
              }}
            >
              {(itemsReceived / targetItems * 100).toFixed(2)}%
            </span>
          </div>
          {/* Progress Bar */}
          <div className='w-full h-[10px] rounded-full' style={{ backgroundColor: SecondaryColor.light_grey }}>
            <div className='h-full rounded-full' style={{ width: `calc(${itemsReceived / targetItems * 100}%)`, backgroundColor: PrimaryColor.red }}></div>
          </div>
          <Subtitle style={{ color: PrimaryColor.red }}>
            Barang terkumpul <strong>{itemsReceived} Kg</strong> dari <strong>{targetItems} Kg</strong>
          </Subtitle>
        </div>
      </div>

      {/* Other Part */}
      <div className='w-full lg:w-1/6 h-full p-5 flex flex-col self-center gap-4'>
        <GradRedDarkButton className='w-full' path={donatePath}>Donasi Sekarang</GradRedDarkButton>
        <div className='flex flex-row gap-2 justify-between'>
          <RedOutlineButton className='w-full' path={detailPath}>Lihat Detail</RedOutlineButton>
          <RedOutlineButton path={sharePath}><FaShare /></RedOutlineButton>
        </div>
      </div>
    </div>
  )
}

export default DonationItemsCard