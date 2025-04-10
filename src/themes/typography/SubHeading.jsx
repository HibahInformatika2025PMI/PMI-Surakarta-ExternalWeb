/***
 * Typography component for SubHeading pages.
 * 
 * Parameters:
 * - children: The content of the subheading.
 * - className: Additional CSS Tailwind classes to apply to the subheading.
 * - props: Other props to pass to the subheading element.
 */

import React from 'react'

const SubHeading = ({ children, className, ...props }) => {
  return (
    <h3
      className={`font-inter font-semibold text-lg ${className || ''}`}
      { ...props }
    >
      { children }
    </h3>
  )
}

export default SubHeading