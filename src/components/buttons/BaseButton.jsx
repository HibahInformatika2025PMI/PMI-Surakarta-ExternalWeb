/***
 * This is the base button component that
 * serves as a base for all buttons in the app.
 */

import React from 'react'

const BaseButton = ({ children, className, style, ...props }) => {
  return (
    <button
      className={`px-4 py-2 font-bold text-sm md:text-base transition-colors duration-200 focus:outline-none ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  )
}

export default BaseButton