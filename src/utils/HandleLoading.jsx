/***
 * HandleLoading Component is used to display a loading spinner and a message.
 */

import React from 'react'

import SubHeading from '../themes/typography/SubHeading'
import PrimaryColor from '../themes/color_pallete/PrimaryColor'

const HandleLoading = ({ loadingText }) => {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mx-auto mb-4"></div>
        <SubHeading style={{ color: PrimaryColor.grey }}>{ loadingText }</SubHeading>
      </div>
    </div>
  )
}

export default HandleLoading;
