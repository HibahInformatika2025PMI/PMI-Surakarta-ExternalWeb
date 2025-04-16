import React from 'react'
import GriyaPMI1 from '../../assets/images/GriyaPMI1.png'
import GriyaPMI2 from '../../assets/images/GriyaPMI2.png'
import GriyaPMI3 from '../../assets/images/GriyaPMI3.png'
import GriyaPMI4 from '../../assets/images/GriyaPMI4.png'
import PageTitle from '../../themes/typography/PageTitle'
import Body from '../../themes/typography/Body'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor'
import GradRedDarkButton from '../buttons/GradRedDarkButton'

const GriyaPMISection = () => {
  return (
    <div className='flex flex-col xl:flex-row items-center justify-center gap-10 px-[160px]'>
      <div className='w-1/2 grid grid-cols-1 xl:grid-cols-2 gap-2 justify-items-center'>
        <img 
          src={ GriyaPMI1 } 
          alt="Griya PMI" 
          className="object-cover w-[400px] xl:w-full rounded-l-lg rounded-t-lg row-span-2"
          style={{ color:PrimaryColor.red, border:'5px solid' }} 
        />
        <img 
          src={ GriyaPMI2 }
          alt="Griya PMI"
          className="object-cover w-[400px] xl:w-full rounded-r-lg rounded-t-lg"
          style={{ color:PrimaryColor.red, border:'5px solid' }}
        />
        <img 
          src={ GriyaPMI3 }
          alt="Griya PMI"
          className="object-cover w-[400px] xl:w-full rounded-r-lg rounded-b-lg row-span-2"
          style={{ color:PrimaryColor.red, border:'5px solid' }}
        />
        <img 
          src={ GriyaPMI4 } 
          alt="Griya PMI" 
          className="object-cover w-[400px] xl:w-full rounded-l-lg rounded-b-lg"
          style={{ color:PrimaryColor.red, border:'5px solid' }}
        />
      </div>

      <div className='flex flex-col items-center xl:items-start justify-center'>
        <PageTitle className={'uppercase text-center x;:text-left mb-5'}>Yuk, kita bantu Griya PMI Peduli!</PageTitle>
        <Body className={'max-w-[700px] text-justify mb-5'}>Griya PMI Peduli merupakan tempat yang digunakan untuk menampung orang-orang telantar dengan kondisi gangguan jiwa atau psikotik (kelainan jiwa yang disertai dengan disintegrasi kepribadian dan gangguan kontak dengan kenyataan). Orang-orang telantar dengan kondisi seperti ini, baik muda maupun tua, dapat ditampung di Griya PMI Peduli.</Body>
        <GradRedDarkButton path={'/donasi'}>Donasi Sekarang</GradRedDarkButton>
      </div>
    </div>
  )
}

export default GriyaPMISection 