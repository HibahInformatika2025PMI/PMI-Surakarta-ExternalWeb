/***
 * This section will display the services of the clinic.
 * This section is a sub-section of PratamaClinic.jsx
 */

import React from 'react'

import { ClinicServices } from '../../../assets/text/PratamaClinicData'

import PageTitle from '../../../themes/typography/PageTitle'

const ClinicServicesSection = ({ className }) => {
  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      <PageTitle className='text-center'>Layanan Kami</PageTitle>

      <ClinicServices
        className='px-[50px] md:px-[100px] xl:px-[160px] grid grid-cols-1 md:grid-cols-2 gap-10'
      />
    </div>
  )
}

export default ClinicServicesSection