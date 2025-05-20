/***
 * This Component will display the FAQ (Frequently Asked Questions) Page.
 */

import React from 'react'

import FAQTabSection from './FAQTabSection'

import BannerImage from '../../../assets/images/pmi_beranda1.png'
import { FirstQuestion, SecondQuestion, ThirdQuestion, FourthQuestion } from '../../../assets/text/FAQData'

import { BannerLayout3 } from '../../../components/shared/BannerLayout'

import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import Body from '../../../themes/typography/Body'

const FAQ = ({ className, style }) => {
  return (
    <section className={`${className}`} style={style}>
      <BannerLayout3
        image={BannerImage}
        imageDescription='Banner FAQ'
        title='Frequently Asked Questions'
      >
        <Body className='text-end' style={{ color: PrimaryColor.white }}>
          Temukan jawaban dari pertanyaan yang sering diajukan oleh pengguna layanan kami.
        </Body>
      </BannerLayout3>

      <div className='w-full flex flex-col px-[50px] md:px-[100px] xl:px-[160px] py-[50px]'>
        <FAQTabSection questionTitle='Tentang Donasi PMI'>
          <FirstQuestion className='mb-10 rounded-lg shadow-lg p-6'/>
        </FAQTabSection>

        <FAQTabSection questionTitle='Langkah-langkah Melakukan Donasi'>
          <SecondQuestion className='mb-10 rounded-lg shadow-lg p-6'/>
        </FAQTabSection>

        <FAQTabSection questionTitle='Kebijakan Privasi'>
          <ThirdQuestion className='mb-10 rounded-lg shadow-lg p-6'/>
        </FAQTabSection>

        <FAQTabSection questionTitle='Biaya Admin Donasi'>
          <FourthQuestion className='mb-10 rounded-lg shadow-lg p-6'/>
        </FAQTabSection>
      </div>
    </section>
  );
};

export default FAQ;