/***
 * Contains the typography for the page subtitle.
 */

import React from 'react'

const PageSubTitle = ({ children, className, ...props }) => {
  return (
    <h1 
      className={`font-inter font-bold text-3xl md:text-4xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  )
}

export default PageSubTitle