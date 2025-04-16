import React from 'react'
import { FaTint, FaAmbulance, FaDonate } from 'react-icons/fa'
import HomepageCard from '../card/HomepageCard'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor'

const ServicesSection = () => {
  return (
    <div className='flex flex-col xl:flex-row items-center justify-center gap-10'>
      <HomepageCard 
        icon={<FaTint size={28} color={PrimaryColor.white}/>}
        title='DONOR DARAH'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        buttonLabel='Selengkapnya'
        onClick={'/donor-darah'}
      />
      <HomepageCard 
        icon={<FaAmbulance size={28} color={PrimaryColor.white}/>}
        title='CALL AMBULANCE'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        buttonLabel='Selengkapnya'
        onClick={'/call-ambulance'}
      />
      <HomepageCard 
        icon={<FaDonate size={28} color={PrimaryColor.white}/>}
        title='DONASI'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        buttonLabel='Selengkapnya'
        onClick={'/donasi'}
      />
    </div>
  )
}

export default ServicesSection 