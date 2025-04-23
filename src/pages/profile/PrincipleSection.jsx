/***
 * This section contains 7 principle of Palang Merah.
 */

import React from 'react'

import TopiPMI from '../../assets/images/pmi_topi.jpg'
import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'

const PrincipleSection = ({ className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={TopiPMI}
        alt="Background"
        className='w-full h-[400px] object-cover object-[50%_40%]'
      />
      <div className='absolute inset-0 opacity-50' style={{ background: PrimaryColor.black }} />
      
    </div>
  )
}

export default PrincipleSection