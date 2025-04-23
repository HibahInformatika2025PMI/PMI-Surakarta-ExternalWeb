/***
 * Contains the typography for the heading.
 */

import React from 'react'

const Heading = ({ children, className, ...props }) => {
  return (
    <h2
      className={`font-inter font-bold text-2xl md:text-3xl  ${className}`}
      {...props}
    >
      {children}
    </h2>
  )
}

export default Heading