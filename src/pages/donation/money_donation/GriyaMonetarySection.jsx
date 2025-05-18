/***
 * This section will display the monetary donation list for Griya Section.
 * This section is a sub-section of Monetary Donation page.
 */

import React from 'react'

import ExampleMonetaryDonation from '../../../assets/dummy_api/ExampleMonetaryDonation'

import MonetaryDonationList from '../../../components/shared/MonetaryDonationList'
import { SearchBar2 } from '../../../components/shared/SearchBar'

const GriyaMonetarySection = ({ className, style }) => {
  return (
    <div className={`${className}`} style={style}>
      <SearchBar2
        placeholder={'Ketik kebutuhan Griya...'}
      />

      <MonetaryDonationList
        donations={ExampleMonetaryDonation}
        cardsPerPage={5}
      />
    </div>
  )
}

export default GriyaMonetarySection