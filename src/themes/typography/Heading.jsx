/***
 * Typography component for headings pages.
 * 
 * Parameters:
 * - children: The content of the heading.
 * - className: Additional CSS Tailwind classes to apply to the heading.
 * - props: Other props to pass to the heading element.
 */

import React from 'react'

const Heading = ({ children, className, style, ...props }) => {
  return (
    <h2
      className={`font-inter font-bold ${className || ''}`}
      style={style}
      { ...props }
    >
      { children }
    </h2>
  )
}

export default Heading