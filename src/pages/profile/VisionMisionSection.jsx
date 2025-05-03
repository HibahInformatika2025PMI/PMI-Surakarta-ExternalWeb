/***
 * This section contains vision, mission and regulation in PMI Kota Surakarta.
 * This section is a sub-section of Profile page.
 */

import React from 'react'

import PageTitle from '../../themes/typography/PageTitle'
import { VisionPMI, MissionPMI, RegulationPMI } from '../../assets/text/ProfileData'

const VisionMisionSection = ({ className }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-[50px] py-[100px] px-[160px] ${className}`}>
      <span className='justify-self-center'>
        <PageTitle className={'text-center mb-5'}>Visi</PageTitle>
        <VisionPMI className={'mb-3'}/>
      </span>

      <span className='justify-self-center'>
        <PageTitle className={'text-center mb-5'}>Misi</PageTitle>
        <MissionPMI className={'mb-3'}/>
      </span>

      <span className='justify-self-center lg:col-span-2'>
        <PageTitle className={'text-center mb-5'}>Kebijakan Mutu</PageTitle>
        <RegulationPMI className={'mb-3'}/>
      </span>
    </div>
  )
}

export default VisionMisionSection