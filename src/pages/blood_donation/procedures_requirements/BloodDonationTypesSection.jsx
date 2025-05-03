/***
 * This is the page for the blood donation types.
 * This page is a sub-page of ProceduresRequirements.jsx
 */

import React from 'react'

import { ConventionalType, ApheresisType } from '../../../assets/text/ProcedureRequirementsData'

import ApheresisImage from '../../../assets/images/pmi_donordarah2.jpg'
import ConventionalImage from '../../../assets/images/pmi_donordarah3.jpg'

import RedButton from '../../../components/buttons/RedButton'

import { PrimaryColor, SecondaryColor } from '../../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../../themes/typography/PageSubTitle'

const BloodDonationTypes = ({ className }) => {
  return (
    <div className={`flex flex-col md:flex-row py-5 gap-10 px-[160px] justify-center ${className}`} style={{ backgroundColor: SecondaryColor.light_grey }}>
      <div className='w-full md:w-1/2 flex flex-col p-5 rounded-3xl gap-4'>
        <PageSubTitle className={'w-fit mb-2 self-center border-b-4'} style={{ borderColor: PrimaryColor.red }}>
          Donor Darah Konvensional
        </PageSubTitle>

        <ConventionalType className={'mb-5'} />

        <span className='max-w-[500px] self-center'>
          <img src={ConventionalImage} alt="Donor Darah Konvensional" />
        </span>
      </div>

      <div className='w-full md:w-1/2 flex flex-col p-5 rounded-3xl gap-4'>
        <PageSubTitle className={'w-fit mb-2 self-center border-b-4'} style={{ borderColor: PrimaryColor.red }}>
          Donor Darah <span className='italic'>Apheresis</span>
        </PageSubTitle>

        <ApheresisType className={'mb-5'} />

        <span className='max-w-[500px] self-center'>
          <img src={ApheresisImage} alt="Donor Darah Apheresis" />
        </span>

        <RedButton className={'w-full self-center'} path={'/apheresis'}>
          Selengkapnya
        </RedButton>
      </div>
    </div>
  )
}

export default BloodDonationTypes