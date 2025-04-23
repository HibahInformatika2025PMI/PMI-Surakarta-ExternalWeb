/***
 * 
 */

import React from 'react'

import AboutPMISection from './AboutPMISection'
import HistoryPMISection from './HistoryPMISection'
import VisionMisionSection from './VisionMisionSection'
import PrincipleSection from './PrincipleSection'
import { PalangMerahPrinciple } from '../../assets/dummy_text/ProfileData'

const Profile = () => {
  return (
    <div>
      <AboutPMISection />

      <HistoryPMISection />

      <VisionMisionSection />

      <PrincipleSection />
      
      <PalangMerahPrinciple className={'py-[50px] px-[50px] md:px-[100px] xl:px-[200px]'} />
    </div>
  )
}

export default Profile