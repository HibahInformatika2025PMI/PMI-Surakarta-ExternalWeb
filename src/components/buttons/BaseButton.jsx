/***
 * Base Button Component serves as a base
 * for creating different button styles.
 * 
 * Parameters:
 * - children: The content inside the button.
 * - className: Additional classes for styling.
 * - style: Inline styles for the button.
 */

import React from 'react'

export const BaseButton = ({ children, className, style={}, ...props }) => {
  return (
    <button
      className={`px-4 py-2 text-base font-bold transition-colors duration-200 focus:outline-none ${className  || ''}`}
      style={ style }
      { ...props }
    >
      { children }
    </button>
  )
}
