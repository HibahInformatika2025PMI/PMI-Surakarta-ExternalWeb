/***
 * This hook is used to handle the hover state of a button.
 */

import React, { useState } from 'react'

const UseButtonHover = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return { isHovered, handleMouseEnter, handleMouseLeave }
}

export default UseButtonHover