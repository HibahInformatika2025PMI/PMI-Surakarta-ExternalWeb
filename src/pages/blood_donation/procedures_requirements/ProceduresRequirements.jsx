/***
 * This is the page for the procedures and requirements (Prosedur & Syarat) of blood donation.
 */

import React from 'react'

import ProceduresSection from './ProceduresSection';
import RequirementsSection from './RequirementsSection';
import BloodDonationTypes from './BloodDonationTypesSection';

import { AboutProceduresRequirements } from '../../../assets/dummy_text/ProcedureRequirementsData'
import PMIDonorDarah1 from '../../../assets/images/pmi_donordarah1.jpg'

import BannerLayout from '../../../components/shared/BannerLayout'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

const ProceduresRequirements = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  return (
    <div>
      <BannerLayout
        image={PMIDonorDarah1}
        imageDescription='Donor Darah PMI Kota Surakarta'
        title='Prosedur & Syarat'
        className='mb-[75px]'
      >
        <AboutProceduresRequirements />
      </BannerLayout>

      <ProceduresSection className={'mb-[75px]'} />

      <RequirementsSection className={'mb-[75px]'} />

      <BloodDonationTypes className={'pb-[25px]'} />
    </div>
  )
}

export default ProceduresRequirements