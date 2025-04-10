/***
 * Typography component for page titles.
 * 
 * Parameters:
 * - children: The content of the title.
 * - className: Additional CSS Tailwind classes to apply to the title.
 * - props: Other props to pass to the title element.
 */

import React from 'react'
import PrimaryColor from '../color_pallete/PrimaryColor'

const PageTitle = ({ children, className, ...props }) => {
  return (
    <h1
      className={`font-inter font-bold text-4xl ${className || ''}`}
      style={{ color: PrimaryColor.red }}
      { ...props }
    >
      { children }
    </h1>
  )
}

export default PageTitle