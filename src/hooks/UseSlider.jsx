/***
 * This hook is used to handle the slider.
 * 
 * Is used in:
 * - DonationSection.jsx
 * - TopNewsSection.jsx
 * - ClientNews.jsx
 */

import React, { useEffect, useState } from 'react'

// Normal Slider
export const UseSlider1 = (items) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length);
  };

  return { currentSlide, nextSlide, prevSlide };
}

// Slider with 3 items to show
export const UseSlider2 = (items) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalItems = items.length;
  const [itemsToShow, setItemsToShow] = useState(1);

  // Update items to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1600) { // 2xl breakpoint
        setItemsToShow(4);
      } else if (window.innerWidth >= 1280) { // xl breakpoint
        setItemsToShow(3);
      } else if (window.innerWidth >= 1024) { // lg breakpoint
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    // Handle resize
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (totalItems - itemsToShow + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide === 0 ? totalItems - itemsToShow : prevSlide - 1);
  };

  return { currentSlide, totalItems, itemsToShow, nextSlide, prevSlide };
}

// Slider auto play
export const UseSlider3 = (items) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect
}