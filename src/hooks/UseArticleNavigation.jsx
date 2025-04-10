/***
 * This hook is used to navigate to a specific article page when an article is clicked.
 */

import { useNavigate } from 'react-router-dom';

const UseArticleNavigation = () => {
  const navigate = useNavigate();

  const handleArticleClick = (articleId) => {
    navigate(`/news/article/${articleId}`);
  }

  return handleArticleClick
}

export default UseArticleNavigation
