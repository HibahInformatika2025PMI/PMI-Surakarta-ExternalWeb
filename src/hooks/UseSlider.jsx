/***
 * This hook is used to handle the slider.
 * 
 * Is used in:
 * - 
 */

import React, { useState } from 'react'

const UseSlider = (items) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Next slide function 
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length);
  };

  return { currentSlide, nextSlide, prevSlide };
}

export default UseSlider