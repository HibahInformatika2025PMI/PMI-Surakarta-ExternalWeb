/***
 * Contains the typography for the body.
 */

import React from 'react'

const Body = ({ children, className, ...props }) => {
  return (
    <p
      className={`font-inter font-normal text-base md:text-lg ${className}`}
      {...props}
    >
      {children}
    </p>
  )
}

export default Body