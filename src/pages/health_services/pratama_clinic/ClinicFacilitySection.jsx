/***
 * This section will display the facility of the clinic.
 * This section is a sub-section of PratamaClinic.jsx
 */

import React from 'react'


import ClinicCheckup from '../../../assets/images/pmi_checkup.jpg'
import { ClinicFacility } from '../../../assets/text/PratamaClinicData'

import PageSubTitle from '../../../themes/typography/PageSubTitle'
import SubHeading from '../../../themes/typography/SubHeading'
import Body from '../../../themes/typography/Body'

const ClinicFacilitySection = ({ className, style }) => {
  return (
    <div className={`flex flex-col md:flex-row gap-[100px] justify-between items-center ${className}`} style={style}>
      {/* Image Section */}
      <div className='w-full md:w-1/4 rounded-lg overflow-hidden flex justify-center'>
        <img
          src={ClinicCheckup}
          alt='Klinik Pratama PMI Surakarta'
          className='max-w-full h-[300px] object-cover'
        />
      </div>

      {/* Text Section */}
      <div className='w-full md:w-3/4'>
        <PageSubTitle className='mb-6'>Melayani Pasien Umum & BPJS Kesehatan</PageSubTitle>
        <SubHeading className='mb-4'>Saat ini Klinik Pratama PMI Surakarta menjadi fasilitas kesehatan (faskes) tingkat 1 dan melayani pasien umum serta BPJS Kesehatan.</SubHeading>
        <Body className='mb-4'>Terdapat beberapa fasilitas bagi Peserta BPJS Kesehatan di Klinik Pratama PMI Kota Surakarta :</Body>
        <ClinicFacility />
      </div>
    </div>
  )
}

export default ClinicFacilitySection