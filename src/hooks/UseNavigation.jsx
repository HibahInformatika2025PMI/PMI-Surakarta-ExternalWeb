/***
 * This hook provides a simple way to navigate between different routes when using react-router-dom
 * 
 * Is used in:
 * - News.jsx
 * - TopNewsSection.jsx
 * - ArticleDetails.jsx
 */

import { useNavigate } from 'react-router-dom'

const UseNavigation = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return { handleNavigation }
}

export default UseNavigation