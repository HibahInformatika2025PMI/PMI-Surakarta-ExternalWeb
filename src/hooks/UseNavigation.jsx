/***
 * This hook provides a simple way to navigate between different routes when using react-router-dom
 * 
 * Is used in:
 * - TopNewsSection.jsx
 * - ArticlesList.jsx
 * - ArticleDetails.jsx
 * - OtherNewsList.jsx
 * - News.jsx
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