import { useState, useEffect } from 'react';

/**
 * Custom hook for managing slider functionality
 * 
 * Parameters:
 * - totalItems: Total number of items in the slider
 * - intervalDuration: Time in milliseconds between auto-slides (0 to disable)
 * - initialIndex: Initial active index (default: 0)
 * 
 * Returns:
 * - currentIndex: Current active index
 */

const useSliderAuto = (totalItems, intervalDuration, initialIndex = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  // Auto slide functionality
  useEffect(() => {
    // Skip if auto-slide is disabled or there's only one item
    if (intervalDuration === 0 || totalItems <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, intervalDuration);
    
    // Clean up on unmount
    return () => clearInterval(interval);
  }, [totalItems, intervalDuration]);
  
  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index) => {
    // Ensure index is within bounds
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
    }
  };
  
  return {
    currentIndex,
    goToNext,
    goToPrev,
    goToSlide,
    totalItems
  };
};

export default useSliderAuto; 