/***
 * This is the first home section of the donation home page.
 * This section is sub-section of the Donation Home page.
 */

import React from 'react'

import DonationHomeImage from '../../../assets/images/pmi_donation2.png'
import { DonationTypesData } from '../../../assets/text/DonationHomeData'

import { BannerLayout2 } from '../../../components/shared/BannerLayout'

import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import SubHeading from '../../../themes/typography/SubHeading'
import Body from '../../../themes/typography/Body'

const FirstHomeSection = ({ className, style }) => {
  return (
    <div className={`${className}`} style={style}>
      <BannerLayout2
        image={DonationHomeImage}
        imageDescription='Donasi PMI Kota Surakarta'
        title='Donasi PMI Peduli'
      >
        <SubHeading className={'text-center py-5'} style={{ color: PrimaryColor.white }}>
          “Setiap tetes bantuan Anda adalah sumber harapan bagi mereka yang sedang berjuang.“
        </SubHeading>
        <Body className={'text-center mb-20'} style={{ color: PrimaryColor.white }}>
          Melalui PMI Peduli, PMI Kota Surakarta membuka ruang bagi siapa saja yang ingin membantu sesama lewat aksi nyata dan berdampak. Karena saat kita bergerak bersama, tak ada kontribusi yang terlalu kecil untuk menciptakan perubahan besar.
        </Body>
      </BannerLayout2>

      <div className="flex justify-center px-4 md:px-0 -mt-[150px] relative z-10">
        <DonationTypesData iconSize={100} />
      </div>
    </div>
  )
}

export default FirstHomeSection