/***
 * This component is used to display a list of articles in a grid format.
 * Each article is displayed as a card with an image, title, summary, and date.
 */

import UseArticleNavigation from "../../hooks/UseArticleNavigation"
import NewsCard from "../card/NewsCard";

const ArticlesList = ({ articles }) => {
  const handleArticleClick = UseArticleNavigation();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full'>
      {articles.map((article) => (
        <div 
          key={article.id} 
          onClick={() => handleArticleClick(article.id)}
        >
          <NewsCard
            id={article.id}
            image={article.cover_image}
            title={article.title}
            summary={article.summary}
            updated_at={article.updated_at}
          />
        </div>
      ))}
    </div>
  )
}

export default ArticlesList