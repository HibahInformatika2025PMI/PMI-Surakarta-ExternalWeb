/***
 * This is the page for the apheresis type of blood donation.
 * This page is a sub-page of Apheresis.jsx
 */

import React from 'react'

import { ApheresisTypesData } from '../../../assets/dummy_text/ApheresisData'

import PageTitle from '../../../themes/typography/PageTitle'

const ApheresisTypeSection = ({ className  }) => {
  return (
    <div className={`${className}`}>
      <PageTitle className={'text-center mb-8'}>Jenis Donor Darah dengan Prosedur Apheresis</PageTitle>

      <ApheresisTypesData className={'p-5'} />
    </div>
  )
}

export default ApheresisTypeSection