/***
 * Contains the typography for the subheading.
 */

import React from 'react'

const SubHeading = ({ children, className, ...props }) => {
  return (
    <h3
      className={`font-inter font-semibold text-xl md:text-2xl ${className}`}
      {...props}
    >
      {children}
    </h3>
  )
}

export default SubHeading