/***
 * This component is used to display a list of donations.
 * 
 * Is used in:
 * - FourthHomeSection.jsx
 * - GriyaMonetarySection.jsx
 * - CommonMonetarySection.jsx
 */

import React, { useState } from 'react'

import MonetaryDonationCard from '../cards/MonetaryDonationCard'
import { Pagination2 } from './Pagination'

const MonetaryDonationList = ({ donations, cardsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(donations.length / cardsPerPage);
  const startIdx = (currentPage - 1) * cardsPerPage;
  const endIdx = startIdx + cardsPerPage;
  const currentDonations = donations.slice(startIdx, endIdx);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className='w-full flex flex-col gap-10'>
      {currentDonations.map((donation) => (
        <div
          key={donation.id}
        >
          <MonetaryDonationCard
            image={donation.image}
            startDate={donation.startDate}
            endDate={donation.endDate}
            title={donation.title}
            description={donation.description}
            progress={donation.progress}
            fundsReceived={donation.fundsReceived}
            targetFunds={donation.targetFunds}
            detailPath={`/donasi/${donation.id}`}
            sharePath={`/donasi/${donation.id}`}
            donatePath={`/donasi/${donation.id}`}
          />
        </div>
      ))}
      {totalPages > 1 && (
        <div className='flex justify-center mt-4'>
          <Pagination2
            currentSlide={currentPage}
            totalSlides={totalPages}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      )}
    </div>
  )
}

export default MonetaryDonationList