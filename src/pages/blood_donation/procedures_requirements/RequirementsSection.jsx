/***
 * This is the page for the requirements of blood donation.
 * This page is a sub-page of ProceduresRequirements.jsx
 */

import React from 'react'

import PageTitle from '../../../themes/typography/PageTitle'
import { BloodDonationRequirements } from '../../../assets/dummy_text/ProcedureRequirementsData'

const RequirementsSection = ({ className }) => {
  return (
    <div className={`${className}`}>
      <PageTitle className={'text-center mb-8'}>Syarat Donor Darah</PageTitle>

      <BloodDonationRequirements className={'p-5'} />
    </div>
  )
}

export default RequirementsSection