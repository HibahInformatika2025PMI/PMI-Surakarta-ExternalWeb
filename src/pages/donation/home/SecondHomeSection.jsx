/***
 * This is the second home section of the donation home page.
 * This section is sub-section of the Donation Home page.
 */

import React from 'react'

import PMICarouselImage from '../../../assets/images/pmi_griya3.png'

import { SearchBar2 } from '../../../components/shared/SearchBar'

import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../../themes/typography/PageSubTitle'
import Body from '../../../themes/typography/Body'
import CarouselCard from '../../../components/cards/CarouselCard'

const SecondHomeSection = ({ className, style }) => {
  

  return (
    <div className={`px-[50px] md:px-[100px] xl:px-[160px] py-[75px] ${className}`} style={style}>
      <PageSubTitle className={'text-center mb-4'} style={{ color: PrimaryColor.red }}>KAMPANYE DONASI : BANTU SESAMA LEWAT AKSI NYATA</PageSubTitle>
      <Body className={'text-center'}>Lihat bagaimana setiap rupiah dan barang yang kamu donasikan membantu sesama dan menciptakan perubahan nyata bersama PMI Kota Surakarta.</Body>

      <div className='w-full py-[50px]'>
        <SearchBar2 
          placeholder={'Ketik nama pasien atau kampanye donasi...'}
        />
      </div>

      <div className='h-[500px] flex transition-transform duration-500'>
        <CarouselCard
          image={PMICarouselImage}
          title={'YUK, BANTU GRIYA PMI PEDULI!'}
          summary={'Griya PMI Peduli merupakan tempat yang digunakan untuk menampung orang-orang telantar dengan kondisi gangguan jiwa atau psikotik (kelainan jiwa yang disertai dengan disintegrasi kepribadian dan gangguan kontak dengan kenyataan). Orang-orang telantar dengan kondisi seperti ini, baik muda maupun tua, dapat ditampung di Griya PMI Peduli.'}
        />
      </div>
    </div>
  )
}

export default SecondHomeSection