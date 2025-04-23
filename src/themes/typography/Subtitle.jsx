/***
 * Contains the typography for the subtitle.
 */

import React from 'react'

const Subtitle = ({ children, className, ...props }) => {
  return (
    <p
      className={`font-inter font-normal text-sm ${className}`}
      {...props}
    >
      {children}
    </p>
  )
}

export default Subtitle