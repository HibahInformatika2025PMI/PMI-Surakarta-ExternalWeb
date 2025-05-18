/***
 * This component is used to display a list of other news cards.
 * 
 * Is used in:
 * - ArticleDetails.jsx
 */

import React from 'react'

import OtherNewsCard from '../cards/otherNewsCard'
import UseNavigation from '../../hooks/UseNavigation'

const OtherNewsList = ({ otherNews }) => {
  const { handleNavigation } = UseNavigation();

  return (
    <div className='w-full flex flex-col gap-5'>
      {otherNews.map((news) => (
        <div
          key={news.id}
          className='flex justify-between'
          onClick={() => handleNavigation(`/news/article/${news.id}`)}
        >
          <OtherNewsCard
            id={news.id}
            image={news.cover_image}
            title={news.title}
            summary={news.summary}
            updated_at={news.updated_at}
          />
        </div>
      ))}
    </div>
  )
}

export default OtherNewsList