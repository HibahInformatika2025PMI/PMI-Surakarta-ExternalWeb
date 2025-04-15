/***
 * HandleError Component is used to display an error message.
 */

import React from 'react'

import Heading from '../themes/typography/Heading'
import Description from '../themes/typography/Description'
import Body from '../themes/typography/Body'
import PrimaryColor from '../themes/color_pallete/PrimaryColor'

const HandleError = ({ error }) => {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md mb-4">
          <Heading>Koneksi gagal</Heading>
          <Description className="text-md mt-1">{error}</Description>
        </div>
        <Body style={{ color: PrimaryColor.grey }}>Silakan coba lagi nanti atau hubungi administrator.</Body>
      </div>
    </div>
  )
}

export default HandleError;