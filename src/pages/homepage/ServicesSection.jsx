/***
 * This section will display cards containing services available at PMI Kota Surakarta.
 * This section is a sub-section of Homepage.
 */

import React from 'react'
import { FaAmbulance, FaDonate, FaTint } from 'react-icons/fa'

import HomepageCard from '../../components/cards/HomepageCard'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'

const ServicesSection = ({ className }) => {
  return (
    <div className={`flex flex-col xl:flex-row items-center justify-center gap-10 ${className}`}>
      <HomepageCard
        icon={<FaTint size={28} color={PrimaryColor.white} />}
        title={'DONOR DARAH'}
        description={'Prosedur dan syarat donor darah yang harus dipatuhi agar dapat menjadi donor darah yang sehat dan aman bagi penerima.'}
        buttonLabel={'Selengkapnya'}
        path={'/prosedur-syarat-donor-darah'}
      />
      <HomepageCard
        icon={<FaAmbulance size={28} color={PrimaryColor.white} />}
        title={'CALL AMBULANCE'}
        description={'Kontak ambulans 24 jam nonstop untuk pelayanan emergency dan transportasi pasien.'}
        buttonLabel={'Selengkapnya'}
        path={'/call-ambulance'}
      />
      <HomepageCard
        icon={<FaDonate size={28} color={PrimaryColor.white} />}
        title={'DONASI'}
        description={'Bantu PMI dalam memberikan pelayanan yang terbaik kepada masyarakat dengan berdonasi.'}
        buttonLabel={'Selengkapnya'}
        path={'/donasi'}
      />
    </div>
  )
}

export default ServicesSection