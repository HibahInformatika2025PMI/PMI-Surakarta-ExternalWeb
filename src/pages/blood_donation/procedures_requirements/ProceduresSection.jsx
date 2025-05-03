/***
 * This is the page for the procedures of blood donation.
 * This page is a sub-page of ProceduresRequirements.jsx
 */

import React from 'react'

import { BloodDonationProcedures } from '../../../assets/text/ProcedureRequirementsData'

import PageTitle from '../../../themes/typography/PageTitle'

const ProceduresSection = ({ className }) => {
  return (
    <div className={`${className}`}>
      <PageTitle className={'text-center mb-8'}>Prosedur Donor Darah</PageTitle>

      <BloodDonationProcedures className={'p-5'}/>
    </div>
  )
}

export default ProceduresSection