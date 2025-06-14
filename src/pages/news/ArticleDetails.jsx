/***
 * This is the article details page (Detail Berita) of the website.
 * This page will display the details of the article that is selected by the user.
 * 
 * Is used in:
 * - News.jsx
 */

import React from 'react'
import { FaRegCalendar, FaUserAlt } from 'react-icons/fa'

import OtherNewsList from '../../components/shared/OtherNewsList'
import SocialMediaLink from '../../components/shared/SocialMediaLink'

import UseFetchArticleDetails from '../../hooks/UseFetchArticleDetails'
import UseFetchNews from '../../hooks/UseFetchNews'
import UseScrollToTop from '../../hooks/UseScrollToTop'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageTitle from '../../themes/typography/PageTitle'
import PageSubTitle from '../../themes/typography/PageSubTitle'
import Heading from '../../themes/typography/Heading'
import Body from '../../themes/typography/Body'

import HandleError from '../../utils/HandleError'
import HandleLoading from '../../utils/HandleLoading'

// Tambahkan helper function untuk parsing Lexical JSON
function extractTextFromLexical(node) {
  if (!node) return '';
  if (node.text) return node.text;
  if (node.children) {
    return node.children.map(extractTextFromLexical).join(' ');
  }
  return '';
}

const Article_Details = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();
  // For fetching news
  const { featuredNews } = UseFetchNews();
  // For fetching article details
  const { articleDetails, loading, error } = UseFetchArticleDetails();

  return (
    <section>
      {loading ? (
        <HandleLoading loadingText={'Memuat detail berita...'} />
      ) : error ? (
        <HandleError errorText={'Gagal memuat detail berita...'} />
      ) : (
        <div className='py-[48px] px-[30px] md:px-[60px] lg:px-[100px] xl:px-[160px]'>
          {/* Page Title */}
          <PageTitle className={'uppercase mb-10'} style={{ color: PrimaryColor.grey }}>Berita Terkini</PageTitle>

          {/* Article Title */}
          <Heading className={'mb-4'}>{articleDetails.title}</Heading>

          {/* Article Details */}
          <div className='flex flex-row items-center justify-between'>
            <div className='flex justify-between gap-10'>
              <div className='flex flex-row gap-3'>
                <FaRegCalendar size={24} color={PrimaryColor.grey} />
                <Body style={{ color: PrimaryColor.grey }}>
                  {articleDetails.updated_at ? new Date(articleDetails.updated_at).toLocaleDateString() : 'N/A'}
                </Body>
              </div>
              <div className='flex flex-row items-center gap-3'>
                <FaUserAlt size={20} color={PrimaryColor.grey} />
                <Body style={{ color: PrimaryColor.grey }}>By {articleDetails.news_writer_username}</Body>
              </div>
            </div>
            <SocialMediaLink size={24} />
          </div>

          {/* Article Image */}
          <div className='w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl mt-6 overflow-hidden'>
            <img
              src={articleDetails.cover_image}
              alt='Article Image'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Article Content */}
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-8 mt-10'>
            <div className='w-full lg:w-4/6 h-full prose'>
              {(() => {
                let textContent = '';
                try {
                  if (articleDetails.content) {
                    const parsed = JSON.parse(JSON.parse(articleDetails.content));
                    textContent = extractTextFromLexical(parsed.root);
                  }
                } catch (e) {
                  textContent = articleDetails.content;
                }
                return (
                  <Body className={'text-justify indent-10 break-all mb-2'}>
                    {textContent}
                  </Body>
                );
              })()}
            </div>
            <div className='w-full lg:w-2/6 h-full'>
              <PageSubTitle className={'mb-8'} style={{ color: PrimaryColor.grey }}>Berita Lainnya</PageSubTitle>
              <OtherNewsList otherNews={featuredNews.slice(0, 4)} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Article_Details