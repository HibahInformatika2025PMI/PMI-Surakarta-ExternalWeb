/***
 * This section will display cards containing services available at PMI Kota Surakarta.
 * This section is a sub-section of Homepage.
 */

import React from 'react'
import { FaAmbulance, FaDonate, FaTint } from 'react-icons/fa'

import { DummySubtitle } from '../../assets/dummy_text/LoremIpsum'
import HomepageCard from '../../components/cards/HomepageCard'
import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'

const ServicesSection = ({ className }) => {
  return (
    <div className={`flex flex-col xl:flex-row items-center justify-center gap-10 ${className}`}>
      <HomepageCard
        icon={<FaTint size={28} color={PrimaryColor.white} />}
        title={'DONOR DARAH'}
        description={<DummySubtitle />}
        buttonLabel={'Selengkapnya'}
        path={'/donor-darah'}
      />
      <HomepageCard
        icon={<FaAmbulance size={28} color={PrimaryColor.white} />}
        title={'CALL AMBULANCE'}
        description={<DummySubtitle />}
        buttonLabel={'Selengkapnya'}
        path={'/call-ambulance'}
      />
      <HomepageCard
        icon={<FaDonate size={28} color={PrimaryColor.white} />}
        title={'DONASI'}
        description={<DummySubtitle />}
        buttonLabel={'Selengkapnya'}
        path={'/donasi'}
      />
    </div>
  )
}

export default ServicesSection