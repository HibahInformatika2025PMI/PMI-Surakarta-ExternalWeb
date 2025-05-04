/***
 * This is the profile page (Profil) of the website.
 */

import React from 'react'

import HistoryPMISection from './HistoryPMISection'
import VisionMisionSection from './VisionMisionSection'
import PrincipleSection from './PrincipleSection'

import { AboutPMI, PalangMerahPrinciple } from '../../assets/text/ProfileData'
import SeragamPMI from '../../assets/images/pmi_seragam.jpg'

import { BannerLayout1 } from '../../components/shared/BannerLayout'

import UseScrollToTop from '../../hooks/UseScrollToTop'

const Profile = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  return (
    <section>
      <BannerLayout1
        image={SeragamPMI}
        imageDescription='Seragam PMI Kota Surakarta'
        title={`Tentang Palang Merah Indonesia`}
      >
        <AboutPMI className={'ml-2'}/>
      </BannerLayout1>

      <HistoryPMISection />

      <VisionMisionSection />

      <PrincipleSection />
      
      <PalangMerahPrinciple className={'py-[50px] px-[50px] md:px-[100px] xl:px-[160px]'} />
    </section>
  )
}

export default Profile