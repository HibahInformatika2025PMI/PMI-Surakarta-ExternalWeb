/***
 * Typography component for the body text.
 * This component is used to display the main content of the application.
 * 
 * Parameters:
 * - children: The content to be displayed inside the component.
 * - className: Additional CSS classes to be applied to the component.
 * - props: Additional properties to be passed to the component.
 */

import React from 'react'

const Body = ({ children, className, ...props }) => {
  return (
    <p
      className={`font-inter font-normal ${className || ''}`}
      { ...props }
    >
      { children }
    </p>
  )
}

export default Body