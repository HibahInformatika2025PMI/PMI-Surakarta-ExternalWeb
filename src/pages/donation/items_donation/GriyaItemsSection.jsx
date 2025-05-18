/***
 * This section will display the items donation list for Griya Section.
 * This section is a sub-section of Items Donation page.
 */

import React from 'react'

import ExampleDonationItems from '../../../assets/dummy_api/ExampleDonationItems'

import { SearchBar2 } from '../../../components/shared/SearchBar'
import ItemsDonationList from '../../../components/shared/ItemsDonationList'

const GriyaItemsSection = ({ className, style }) => {
  return (
    <div className={`${className}`} style={style}>
      <SearchBar2
        placeholder='Ketik kebutuhan Griya...'
      />

      <ItemsDonationList
        donations={ExampleDonationItems}
        cardsPerPage={5}
      />
    </div>
  )
}

export default GriyaItemsSection