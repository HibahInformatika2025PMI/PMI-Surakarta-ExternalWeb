/***
 * This is the fourth home section of the donation home page.
 * This section is sub-section of the Donation Home page.
 */

import React from 'react'

import ExampleMonetaryDonation from '../../../assets/dummy_api/ExampleMonetaryDonation'

import PageSubTitle from '../../../themes/typography/PageSubTitle'
import MonetaryDonationList from '../../../components/shared/MonetaryDonationList'

const FourthHomeSection = ({ className, style }) => {
  return (
    <div className={`px-[50px] md:px-[100px] xl:px-[160px] py-[50px] ${className}`} style={style}>
      <PageSubTitle className={'uppercase mb-8'}>
        Donasi Lainnya
      </PageSubTitle>
      
      <MonetaryDonationList donations={ExampleMonetaryDonation} cardsPerPage={4} />
    </div>
  )
}

export default FourthHomeSection