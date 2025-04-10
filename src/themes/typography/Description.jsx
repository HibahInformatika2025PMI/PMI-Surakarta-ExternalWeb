/***
 * Typography component for the description text.
 * This component is used to display the description text in various cards.
 * 
 * Parameters:
 * - children: The content to be displayed inside the component.
 * - className: Additional CSS classes to be applied to the component.
 * - props: Additional properties to be passed to the component.
 */

import React from 'react'

const Description = ({ children, className, ...props }) => {
  return (
    <span
      className={`font-inter font-normal text-xs ${className || ''}`}
      { ...props }
    >
      { children }
    </span>
  )
}

export default Description