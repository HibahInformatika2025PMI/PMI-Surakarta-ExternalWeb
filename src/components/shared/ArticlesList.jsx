/***
 * This component is used to display a list of articles.
 * 
 * Is used in:
 * - TopNewsSection.jsx
 * - ClientNews.jsx
 */

import React from 'react'

import UseNavigation from '../../hooks/UseNavigation'
import NewsCard from '../cards/NewsCard'

const ArticlesList = ({ news }) => {
  const { handleNavigation } = UseNavigation();

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
      {news.map((article) => (
        <div
          className='flex justify-between'
          key={article.id}
          onClick={() => handleNavigation(`/news/article/${article.id}`)}
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