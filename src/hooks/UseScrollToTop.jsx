/***
 * This hook provides a simple way to scroll to the top of the page.
 * 
 * Is used in:
 * - Apheresis.jsx
 * - ProceduresRequirements.jsx
 * - Contact.jsx
 * - Training.jsx
 * - PratamaClinic.jsx
 * - Homepage.jsx
 * - ArticleDetails.jsx
 * - News.jsx
 * - Profile.jsx
 * - PMR.jsx
 * - Satgana.jsx
 * - Home.jsx
 */

import { useEffect } from 'react'

const UseScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
}

export default UseScrollToTop 