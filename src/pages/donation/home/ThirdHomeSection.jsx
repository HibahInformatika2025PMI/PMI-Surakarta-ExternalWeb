/***
 * This is the third home section of the donation home page.
 * This section is sub-section of the Donation Home page.
 */

import React from 'react'

import ExampleBasicNeeds from '../../../assets/dummy_api/ExampleBasicNeeds'
import { BasicNeedData } from '../../../assets/text/DonationHomeData'

import GradRedDarkButton from '../../../components/buttons/GradRedDarkButton'

import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../../themes/typography/PageSubTitle'
import Table3Header from '../../../components/shared/Table3Header'
import Body from '../../../themes/typography/Body'

const ThirdHomeSection = ({ className, style }) => {
  return (
    <div
      className={`rounded-2xl border-t-8 shadow-md mx-[50px] md:mx-[100px] xl:mx-[160px] px-[50px] py-[75px] flex flex-col gap-10 ${className}`}
      style={{ backgroundColor: PrimaryColor.white, borderColor: PrimaryColor.red, ...style }}
    >
       <PageSubTitle className={'text-center mb-4'}>Bantu Penuhi Kebutuhan Pokok Penghuni Griya PMI Surakarta</PageSubTitle>

       <div className='flex flex-col md:flex-row gap-10'>
        <div className='w-full md:w-1/2'>
          <BasicNeedData className={'mb-8'} />
          <Body className={'text-justify mb-8'}>
            Griya PMI sangat membutuhkan bantuan untuk memenuhi kebutuhan pokok bulanan para penghuninya. Seperti Bahan Makanan, Pakaian, dan berbagai kebutuhan sehari hari lainnya. Donasi yang diberikan dapat dalam bentuk uang atau barang kebutuhan yang spesifik. Setiap kontribusi Anda akan sangat berarti untuk kehidupan mereka selanjutnya.
          </Body>
          <GradRedDarkButton className={'w-full'} path={'/donasi/donasi-barang'}>
            Lihat Selengkapnya
          </GradRedDarkButton>
        </div>
        <div className='w-full md:w-1/2 flex flex-col'>
          <Body className={'text-justify mb-8'} style={{ color: PrimaryColor.red }}>
            <strong>Kebutuhan Dana Kemanusiaan per Tahun :</strong>
          </Body>
          <Table3Header
            className={'w-full'}
            data={ExampleBasicNeeds}
            tableHeading1='Peruntukan'
            tableHeading2='Jumlah'
            tableHeading3='Satuan'
          />
        </div>
       </div>
    </div>
  )
}

export default ThirdHomeSection