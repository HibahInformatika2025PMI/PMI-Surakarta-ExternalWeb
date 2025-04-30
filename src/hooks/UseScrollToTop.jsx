/***
 * This hook provides a simple way to scroll to the top of the page.
 * 
 * Is used in:
 * - Homepage.jsx
 * - News.jsx
 * - Profile.jsx
 */

import { useEffect } from 'react'

const UseScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
}

export default UseScrollToTop 