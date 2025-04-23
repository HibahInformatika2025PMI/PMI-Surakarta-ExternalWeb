/***
 * Contains the typography for the page title.
 */

import React from 'react'

const PageTitle = ({ children, className, ...props }) => {
  return (
    <h1 
      className={`font-inter font-bold text-4xl md:text-5xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  )
}

export default PageTitle