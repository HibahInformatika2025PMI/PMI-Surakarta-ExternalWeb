/***
 * This is a utility function that handles the UI of error state while fetching data.
 * 
 * Is used in:
 * - ArticleDetails.jsx
 * - TopNewsSection.jsx
 * - News.jsx
 */

import React from 'react'

import SubHeading from '../themes/typography/SubHeading'
import Body from '../themes/typography/Body'
import { PrimaryColor, SecondaryColor } from '../themes/color_palletes/ColorPalletes'

const HandleError = ({ errorText }) => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-16 gap-4'>
      <div
        className='border-2 px-10 py-4 rounded-md mb-1'
        style={{ backgroundColor: SecondaryColor.light_red, color: PrimaryColor.red, borderColor: SecondaryColor.dark_red }}
      >
        <SubHeading>Koneksi gagal</SubHeading>
        <Body className={'mt-2'}>{errorText}</Body>
      </div>
      <Body style={{ color: PrimaryColor.grey }}>Silakan coba lagi nanti atau hubungi admin.</Body>
    </div>
  )
}

export default HandleError