/***
 * This is a utility function that handles the UI of loading state while fetching data.
 * 
 * Is used in:
 * - 
 */

import React from 'react'

import { PrimaryColor } from '../themes/color_palletes/ColorPalletes'
import SubHeading from '../themes/typography/SubHeading'

const HandleLoading = ({ loadingText }) => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-16 gap-4'>
      <div 
        className='animate-spin rounded-full w-12 h-12 border-t-2 border-b-2' 
        style={{ borderColor: PrimaryColor.red }} 
      />

      <SubHeading className={'animate-pulse'} style={{ color: PrimaryColor.grey }}>
        {loadingText}
      </SubHeading>
    </div>
  )
}

export default HandleLoading