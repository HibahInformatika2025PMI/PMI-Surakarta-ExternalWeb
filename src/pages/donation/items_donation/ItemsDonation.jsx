/***
 * This component will display the Items Donation (Donasi Barang) Page.
 */

import React, { useState } from 'react'

import GriyaItemsSection from './GriyaItemsSection'
import CommonItemsSection from './CommonItemsSection'

import BannerImage from '../../../assets/images/pmi_beranda1.png'

import { BannerLayout3 } from '../../../components/shared/BannerLayout'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

import { GradientColor, PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import Body from '../../../themes/typography/Body'

const ItemsDonation = ({ className }) => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  const [activeTab, setActiveTab] = useState('griya');

  return (
    <section className={`${className}`}>
      <BannerLayout3
        image={BannerImage}
        imageDescription='Beranda Donasi PMI'
        title='Daftar Donasi Barang'
      >
        <Body className='text-end' style={{ color: PrimaryColor.white }}>
          Salurkan barang dengan donasi barang untuk mendukung aksi kemanusiaan dan menyelamatkan lebih banyak nyawa.
        </Body>
      </BannerLayout3>

      <div className='w-full flex flex-col px-[50px] md:px-[100px] xl:px-[160px] pt-[50px] pb-[25px]'>
        <div className='w-full flex flex-row'>
          <button 
            className={`px-8 py-3 rounded-t-xl`}
            style={{
              background: activeTab === 'griya' ? GradientColor.gradient1 : PrimaryColor.white,
              color: activeTab === 'griya' ? PrimaryColor.white : PrimaryColor.red,
            }}
            onClick={() => setActiveTab('griya')}
          >
            <Body><strong>Griya PMI</strong></Body>
          </button>
          <button 
            className={`px-8 py-3 rounded-t-xl`}
            style={{
              background: activeTab === 'umum' ? GradientColor.gradient1 : PrimaryColor.white,
              color: activeTab === 'umum' ? PrimaryColor.white : PrimaryColor.red,
            }}
            onClick={() => setActiveTab('umum')}
          >
            <Body><strong>Umum</strong></Body>
          </button>
        </div>
        <span className='w-full h-[5px]' style={{ background: GradientColor.gradient1 }} />
      </div>

      {activeTab === 'griya' && <GriyaItemsSection className={'px-[50px] md:px-[100px] xl:px-[160px]'} />}
      {activeTab === 'umum' && <CommonItemsSection className={'px-[50px] md:px-[100px] xl:px-[160px]'} />}
    </section>
  )
}

export default ItemsDonation