/***
 * This section will display the items donation list for Common Section.
 * This section is a sub-section of Items Donation page.
 */

import React from 'react'

import ExampleDonationItems from '../../../assets/dummy_api/ExampleDonationItems'

import { SearchBar2 } from '../../../components/shared/SearchBar'
import ItemsDonationList from '../../../components/shared/ItemsDonationList'

import Heading from '../../../themes/typography/Heading'
import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import SubHeading from '../../../themes/typography/SubHeading'
import Body from '../../../themes/typography/Body'

const CommonItemsSection = ({ className, style }) => {
  return (
    <div className={`${className}`} style={style}>
      <SearchBar2
        placeholder='Ketik kebutuhan umum...'
      />

      <div className='my-[50px]'>
        <div className='w-full flex flex-row items-center'>
          <Heading style={{ color: PrimaryColor.red }}>
            YUK, BANTU GRIYA PMI PEDULI! -
          </Heading>
          <SubHeading className={'italic'} style={{ color: PrimaryColor.red }}>
            “Satu uluran tanganmu, sejuta harapan bagi mereka.”
          </SubHeading>
        </div>

        <Body className={'mt-4'}>
          Mari bantu penuhi kebutuhan sehari-hari para penghuni Griya PMI Peduli agar mereka bisa menjalani hidup yang lebih layak!
        </Body>
      </div>

      <ItemsDonationList
        donations={ExampleDonationItems}
        cardsPerPage={5}
      />
    </div>
  )
}

export default CommonItemsSection