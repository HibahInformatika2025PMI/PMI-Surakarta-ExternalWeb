/***
 * This is the data for the training page (Pelatihan).
 * 
 * Is used in:
 * - Training.jsx
 */

import React from 'react'

import Body from '../../themes/typography/Body'
import PageSubTitle from '../../themes/typography/PageSubTitle'

// Short description about PPGD
export const AboutPPGD = ({ className, style }) => {
  return (
    <div className={`${className}`} style={style}>
      <Body className='text-justify'>
        Pelatihan Penanganan Penderita Gawat Darurat (PPGD) adalah pelatihan tentang bagaimana menangani kasus-kasus kegawatdaruratan yang mengancam jiwa yang sering terjadi dalam kehidupan sehari-hari seperti kecelakaan lalu lintas, perdarahan, luka bakar, tersengat listrik, henti nafas, maupun henti jantung.
      </Body>
      <Body className='text-justify'>
        Dalam rangka menghadapi situasi kegawatan, diharapkan semua orang mampu memberikan pertolongan pertama dengan tepat, sehingga angka kematian dalam pemberian pertolongan pertama dapat diminimalkan. Pelatihan ini ditujukan untuk masyarakat umum terutama yang berada di tempat dengan resiko tinggi seperti jalan raya.
      </Body>
    </div>
  )
}

// Importance of PPGD
export const ImportanceOfPPGD = ({ className, style }) => {
  return (
    <div className={`${className}`} style={style}>
      <Body className='text-justify'>
        Berdasarkan dari data, dapat diketahui angka kecelakaan lalu lintas dan kecelakaan kerja meningkat setiap tahun. Maka dari itu PMI Kota Surakarta ingin menyebarluaskan ilmu mengenai Penanganan Penderita Gawat Darurat (PPGD) sehingga masyarakat dapat memberikan pertolongan pertama kepada korban sebelum mendapat pertolongan dari paramedik.
      </Body>
    </div>
  )
}

// Basic Material
export const BasicMaterial = ({ className, style }) => {
  const basicMaterialList = [
    "Pengantar Pertolongan Pertama",
    "Penilaian Korban atau Penderita",
    "Bantuan Hidup Dasar (Basic Life Support) atau Resusitasi Jantung Paru"
  ]

  return (
    <div className={`${className}`} style={style}>
      <PageSubTitle className={'mb-4'}>Materi Dasar</PageSubTitle>
      <ul className='ml-8 list-disc'>
        {basicMaterialList.map((item, index) => (
          <li key={index}>
            <Body className='text-justify'>
              {item}
            </Body>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Facility
export const Facility = ({ className, style }) => {
  const facilityList = [
    "Pemateri & Instruktur Kompeten",
    "Media Pelatihan (Manekin, Strecher, Bidai, dll)",
    "Hardcopy Materi",
    "Sertifikat untuk peserta",
    "Sertifikat untuk Instansi Penyelenggara"
  ]

  return (
    <div className={`${className}`} style={style}>
      <PageSubTitle className={'mb-4'}>Fasilitas</PageSubTitle>
      <ul className='ml-8 list-disc'>
        {facilityList.map((item, index) => (
          <li key={index}>
            <Body className='text-justify'>
              {item}
            </Body>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Elective Material
export const ElectiveMaterial = ({ className, style }) => {
  const electiveMaterialList = [
    "Penanganan Perdarahan & Syok",
    "Penanganan Cidera Jaringan Lunak (Luka)",
    "Penanganan Cidera Patah Tulang & Cidera Otot Rangka",
    "Penanganan Cidera Kepala, Leher & Spinal",
    "Penanganan Luka Bakar",
    "Penanganan Kedaruratan Lingkungan (paparan suhu ekstrim)",
    "Penanganan Awal Kedaruratan Medis (Stroke, Serangan Jantung, Pingsan, dll)"
  ]

  return (
    <div className={`${className}`} style={style}>
      <PageSubTitle className={'mb-4'}>Materi Pilihan</PageSubTitle>
      <ul className='ml-8 list-disc'>
        {electiveMaterialList.map((item, index) => (
          <li key={index}>
            <Body className='text-justify'>{item}</Body>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Training Location
export const TrainingLocation = ({ className, style }) => {
  const trainingLocationList = [
    "PMI Kota Surakarta beralamat di Jl. Kol. Sutarto No.58 Jebres, Surakarta.",
    {
      title: "Perusahaan/instansi penyelenggara, dengan ketentuan :",
      subItems: [
        "Menyediakan ruang pelatihan beserta peralatannya (Meja, Kursi, LCD, Backdrop dll).",
        "Alat peraga pelatihan tanggung jawab PMI Kota Surakarta.",
        "Penyelenggaraan di Provinsi Jateng (diluar wilayah eks Karesidenan Surakarta) pihak Penyelenggara menanggung biaya transportasi dan akomodasi Instruktur dan Fasilitator PMI Kota Surakarta."
      ]
    }
  ]

  return (
    <div className={`${className}`} style={style}>
      <Body className='text-justify'>Tempat pelaksanaan pelatihan bisa dilakukan di :</Body>
      {trainingLocationList.map((location, index) => (
        typeof location === 'string' ? (
          <Body key={index} className='text-justify flex items-start gap-2'>
            <span>{index + 1}.</span>
            <span>{location}</span>
          </Body>
        ) : (
          <div key={index} className='flex flex-col items-start mb-1 w-full'>
            <Body className='text-justify flex items-start gap-2'>
              <span>{index + 1}.</span>
              <span>{location.title}</span>
            </Body>
            <ul className='ml-11 list-disc'>
              {location.subItems.map((sub, subIndex) => (
                <li key={subIndex}>
                  <Body className='text-justify'>{sub}</Body>
                </li>
              ))}
            </ul>
          </div>
        )
      ))}
    </div>
  )
}
