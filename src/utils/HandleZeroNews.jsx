/***
 * This is a utility function that handles the UI of zero news state.
 * 
 * Is used in:
 * - 
 */

import React from 'react'

import { PrimaryColor } from '../themes/color_palletes/ColorPalletes'
import Body from '../themes/typography/Body'

const HandleZeroNews = () => {
  return (
    <div className='w-full flex justify-center items-center py-16'>
      <Body style={{ color: PrimaryColor.grey }}>Tidak ada berita yang ditemukan.</Body>
    </div>
  )
}

export default HandleZeroNews