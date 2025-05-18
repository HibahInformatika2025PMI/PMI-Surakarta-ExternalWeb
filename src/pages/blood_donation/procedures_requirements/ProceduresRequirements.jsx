/***
 * This is the page for the procedures and requirements (Prosedur & Syarat) of blood donation.
 */

import React from 'react'

import ProceduresSection from './ProceduresSection';
import RequirementsSection from './RequirementsSection';
import BloodDonationTypes from './BloodDonationTypesSection';

import PMIDonorDarah1 from '../../../assets/images/pmi_donordarah1.jpg'
import { AboutProceduresRequirements } from '../../../assets/text/ProcedureRequirementsData'

import { BannerLayout1 } from '../../../components/shared/BannerLayout'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

const ProceduresRequirements = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  return (
    <section>
      <BannerLayout1
        image={PMIDonorDarah1}
        imageDescription='Donor Darah PMI Kota Surakarta'
        title={`Prosedur & Syarat`}
        className='mb-[75px]'
      >
        <AboutProceduresRequirements />
      </BannerLayout1>

      <ProceduresSection className={'mb-[75px]'} />

      <RequirementsSection className={'mb-[75px]'} />

      <BloodDonationTypes className={'pb-[25px]'} />
    </section>
  )
}

export default ProceduresRequirements