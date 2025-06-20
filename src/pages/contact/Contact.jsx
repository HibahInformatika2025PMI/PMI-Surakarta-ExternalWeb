/***
 * This is the contact page (Kontak) of the website.
 * This page will display the contact information of the PMI Kota Surakarta.
 */

import React from 'react'

import ListContactSection from './ListContactSection'
import SendMessagesSection from './SendMessagesSection'

import UseScrollToTop from '../../hooks/UseScrollToTop'

const Contact = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  return (
    <div className='py-[48px] px-[160px] flex flex-col md:flex-row justify-center items-start gap-10'>
      <ListContactSection className={'w-full md:w-1/2 p-6'}/>
      <SendMessagesSection className={'w-full md:w-1/2 p-6'}/>
    </div>
  )
}

export default Contact