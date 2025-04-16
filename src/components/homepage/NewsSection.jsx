import React from 'react'
import PageTitle from '../../themes/typography/PageTitle'
import ArticlesList from '../shared/ArticlesList'
import HandleLoading from '../../utils/HandleLoading'
import HandleError from '../../utils/HandleError'
import HandleZeroArticles from '../../utils/HandleZeroArticles'
import UseEffectFetchArticles from '../../hooks/UseEffectFetchArticles'
import RedOutlineButton from '../buttons/RedOutlineButton'

const NewsSection = () => {
  const { featuredArticles, loading, error } = UseEffectFetchArticles();

  return (
    <div className='flex flex-col justify-center px-[160px]'>
      <PageTitle className={'text-center uppercase mb-10'}>Berita Terkini</PageTitle>
      
      {loading ? (
        <HandleLoading loadingText="Memuat berita..." />
      ) : error ? (
        <HandleError error={ error } />
      ) : featuredArticles.length === 0 ? (
        <HandleZeroArticles />
      ) : (
        <div>
          {/* List */}
          <ArticlesList articles={featuredArticles
            .slice(0, 8)
          } />
          <RedOutlineButton className={'w-full mt-10'} path={'/news'}>Baca Berita Lainnya</RedOutlineButton>
        </div>
      )}
    </div>
  )
}

export default NewsSection 