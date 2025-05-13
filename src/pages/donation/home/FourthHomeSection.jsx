/***
 * This is the fourth home section of the donation home page.
 * This section is sub-section of the Donation Home page.
 */

import React from 'react'
import PageSubTitle from '../../../themes/typography/PageSubTitle'

const FourthHomeSection = ({ className, style }) => {
  return (
    <div className={`px-[50px] md:px-[100px] xl:px-[160px] py-[75px] ${className}`} style={style}>
      <PageSubTitle className={'uppercase mb-4'}>
        Donasi Lainnya
      </PageSubTitle>
      
    </div>
  )
}

export default FourthHomeSection