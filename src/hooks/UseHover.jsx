import React, { useState } from 'react'

const UseHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  return { isHovered, handleMouseEnter, handleMouseLeave }
}

export default UseHover