/***
 * This section will display the common monetary donation list.
 * This section is a sub-section of Monetary Donation page.
 */

import React from 'react'

import ExampleMonetaryDonation from '../../../assets/dummy_api/ExampleMonetaryDonation'

import { SearchBar2 } from '../../../components/shared/SearchBar'
import MonetaryDonationList from '../../../components/shared/MonetaryDonationList'

const CommonMonetarySection = ({ className, style }) => {
  return (
    <div className={`${className}`} style={style}>
      <SearchBar2
        placeholder={'Ketik nama pasien atau kampanye donasi...'}
      />

      <MonetaryDonationList
        donations={ExampleMonetaryDonation}
        cardsPerPage={5}
      />
    </div>
  )
}

export default CommonMonetarySection