/***
 * this component will display the home page (Home) for the donation page.
 */

import React from 'react'

import FirstHomeSection from './FirstHomeSection'
import SecondHomeSection from './SecondHomeSection'
import ThirdHomeSection from './ThirdHomeSection'
import FourthHomeSection from './FourthHomeSection'
import FifthHomeSection from './FifthHomeSection'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

const Home = ({ className }) => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  return (
    <section className={`${className}`}>
      <FirstHomeSection className={'mb-10'} />
      <SecondHomeSection className={'mb-10'} />
      <ThirdHomeSection className={'mb-10'} />
      <FourthHomeSection />
      <FifthHomeSection />
    </section>
  )
}

export default Home