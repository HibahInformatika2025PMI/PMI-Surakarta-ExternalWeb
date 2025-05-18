/***
 * This hook is used to handle the slider.
 * 
 * Is used in:
 * - DonationSection.jsx
 * - TopNewsSection.jsx
 * - QuotesSection.jsx
 * - DonationSection.jsx
 * - QuotesSection.jsx
 * - PartnershipSection.jsx
 * - News.jsx
 */

import { useEffect, useState } from 'react'

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
      if (window.innerWidth >= 1280) { // xl breakpoint
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
export const UseSlider3 = (totalItems, duration) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto play
  useEffect(() => {
    if (duration === 0 || totalItems === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalItems);
    }, duration);

    return () => clearInterval(interval);
  }, [totalItems, duration]);

  // For navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalItems) % totalItems);
  };

  const goToSlide = (index) => {
    if (index >= 0 && index < totalItems) {
      setCurrentSlide(index);
    }
  }

  return { currentSlide, nextSlide, prevSlide, goToSlide, totalItems, duration };
}