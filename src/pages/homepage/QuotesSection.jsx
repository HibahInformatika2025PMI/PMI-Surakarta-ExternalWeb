/***
 * This section will display the quotes about the PMI Kota Surakarta.
 * This section is a sub-section of Homepage.
 */

import React from 'react'
import QuotesCard from '../../components/cards/QuotesCard'
import ExampleQuotes from '../../assets/dummy_api/ExampleQuotes'
import { UseSlider3 } from '../../hooks/UseSlider'

const QuotesSection = () => {
  const { currentSlide, totalItems, itemsToShow, nextSlide, prevSlide } = UseSlider3(ExampleQuotes)

  return (
    <div>
      

    </div>
  )
}

export default QuotesSection