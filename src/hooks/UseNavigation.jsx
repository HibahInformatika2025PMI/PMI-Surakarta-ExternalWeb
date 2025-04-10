/***
 * This hook provides a simple way to navigate between different routes 
 * in a React application using react-router-dom.
 */

import { useNavigate } from 'react-router-dom'

const UseNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  }

  return handleNavigation
}

export default UseNavigation