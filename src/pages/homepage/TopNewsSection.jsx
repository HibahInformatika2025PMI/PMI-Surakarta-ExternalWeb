/***
 * This section will display the top 8 news of the PMI Kota Surakarta.
 * This section is a sub-section of Homepage.
 */

import React from 'react'

import RedOutlineButton from '../../components/buttons/RedOutlineButton'
import ArticlesList from '../../components/shared/ArticlesList'

import UseFetchNews from '../../hooks/UseFetchNews'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageTitle from '../../themes/typography/PageTitle'

import HandleLoading from '../../utils/HandleLoading'
import HandleError from '../../utils/HandleError'
import HandleZeroNews from '../../utils/HandleZeroNews'

const TopNewsSection = ({ className }) => {
  const { featuredNews, loading, error } = UseFetchNews();

  return (
    <div className={`flex flex-col items-center justify-center px-[160px] ${className}`}>
      <PageTitle className={'mb-10 uppercase'} style={{ color: PrimaryColor.red }}>Berita Terkini</PageTitle>

      {loading ? (
        <HandleLoading loadingText={'Memuat berita...'} />
      ) : error ? (
        <HandleError errorText={'Gagal memuat berita...'} />
      ) : featuredNews.length === 0 ? (
        <HandleZeroNews />
      ) : (
        <div>
          <ArticlesList news={featuredNews.slice(0, 8)} />
          <RedOutlineButton className={'w-full mt-10'} path={'/news'}>Baca Berita Lainnya</RedOutlineButton>
        </div>
      )}
    </div>
  )
}

export default TopNewsSection