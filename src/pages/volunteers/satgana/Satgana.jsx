/***
 * This is the page for the Satuan Siaga Penanggulangan Bencana (Satgana) of volunteers
 */

import React from 'react'

import satganaImage from '../../../assets/images/pmi_satgana.jpg'
import { AboutSatgana, SatganaDescription } from '../../../assets/text/SatganaData'

import { BannerLayout2 } from '../../../components/shared/BannerLayout'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'

const Satgana = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  return (
    <div>
      <BannerLayout2
        image={satganaImage}
        imageDescription='Satuan Siaga Penanggulangan Bencana (Satgana) PMI Surakarta'
        title='Satuan Siaga Penanggulangan Bencana (Satgana)'
      >
        <SatganaDescription className='text-center' style={{ color: PrimaryColor.white }}/>
      </BannerLayout2>

      <AboutSatgana className='px-[50px] md:px-[100px] xl:px-[160px] py-[75px] flex gap-10' />
    </div>
  )
}

export default Satgana