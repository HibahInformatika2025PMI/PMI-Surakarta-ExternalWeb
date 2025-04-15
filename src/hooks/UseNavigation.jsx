/***
 * This hook provides a simple way to navigate between different routes 
 * in a React application using react-router-dom.
 * 
 * Returns an object with:
 * - navigate: The navigate function from react-router-dom
 * - handleNavigation: A function that can be passed directly to onClick handlers
 */

import { useNavigate } from 'react-router-dom'

const UseNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  }

  return {
    navigate,
    handleNavigation
  }
}

export default UseNavigation