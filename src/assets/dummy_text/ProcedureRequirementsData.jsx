/***
 * This is the data for the blood donation page.
 * 
 * Is used in:
 * - ProceduresRequirements.jsx
 * - Procedures.jsx
 * - Requirements.jsx
 * - BloodDonationTypes.jsx
 */

import React from 'react'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import Body from '../../themes/typography/Body'
import ProcedureCard from '../../components/cards/ProcedureCard'

// Short description about procedures and requirements of blood donation
export const AboutProceduresRequirements = ({ className }) => {
  return (
    <Body className={`text-justify ${className}`} style={{ color: PrimaryColor.white }}>
      Ada beberapa persyaratan & prosedur yang harus dipenuhi oleh calon pendonor untuk dapat melakukan donor darah di PMI Surakarta
    </Body>
  )
}

// Procedures of blood donation
export const BloodDonationProcedures = ({ className, style }) => {
  const proceduresList = [
    {
      title: 'Registrasi Donor',
      description: 'Pendonor mengisi Informed Consent / formulir donor sesuai dengan data pendonor melalui komputerisasi maupun manual.'
    },
    {
      title: 'Validasi Data Pendonor',
      description: 'Pendonor akan dilakukan pengecekan kelengkapan dan kebenaran data pendonor sesuai identitas pendonor.'
    },
    {
      title: 'Seleksi Awal',
      description:'Pendonor akan dilakukan pemeriksaan tekanan darah, kadar Hemoglobin, golongan darah dan pemeriksaan fisik sederhana oleh dokter atau petugas.'
    },
    {
      title: 'Pengambilan Darah Donor',
      description: 'Pendonor diminta untuk mencuci lengan pendonor dengan sabun sebelum dilakukan pengambilan darah donor.'
    }
  ];

  return (
    <div className={`flex flex-wrap justify-center items-center gap-5 ${className}`} style={style}>
      {proceduresList.map((procedure, index) => (
        <ProcedureCard
          key={index}
          num={index + 1}
          title={procedure.title}
          description={procedure.description}
          className={'gap-5'}
        />
      ))}
    </div>
  )
}

// Requirements of blood donation
export const BloodDonationRequirements = ({ className, style }) => {
  const requirementsList = [
    "Berusia minimal 17 tahun",
    "Berat badan minimal 45 kg",
    {
      title: "Tekanan Darah:",
      subItems: [
        "Sistolik: 90-160 mm Hg",
        "Diastolik: 60-100 mm Hg"
      ]
    },
    "Nadi 60-100 x/menit teratur",
    "Kadar Hemoglobin antara 12,5 g/dL - 17 g/dL",
    "Sudah sarapan/makan",
    "Tidak sedang minum obat selama 5 hari terakhir",
    "Tidak sedang haid/hamil/menyusui",
    "Bukan pecandu alkohol/narkotika",
    "Tidak mengidap penyakit jantung, hati, dan ginjal",
    "Jarak dengan donor terakhir minimal 2 bulan",
    "Membawa kartu identitas (KTP/SIM/Kartu Pelajar/Kartu Mahasiswa)",
  ];
  
  return (
    <div 
      className={`max-w-[800px] rounded-3xl p-8 shadow-md flex flex-col justify-self-center ${className}`}
      style={{ background: PrimaryColor.white, ...style }}
    >
      {requirementsList.map((requirement, index) => (
        // Check if the requirement is a string or an object
        typeof requirement === 'string' ? (
          <Body key={index} className={'text-justify flex items-start gap-2'}>
            <span>{index + 1}.</span>
            <span>{requirement}</span>
          </Body>
        ) : (
          <div key={index} className='flex flex-col items-start mb-1 w-full'>
            <Body className={'text-justify flex items-start gap-2'}>
              <span>{index + 1}.</span>
              <span>{requirement.title}</span>
            </Body>
            <ul className='ml-11 list-disc'>
              {requirement.subItems.map((sub, subIndex) => (
                <li key={subIndex}>
                  <Body className={'text-justify'}>{sub}</Body>
                </li>
              ))}
            </ul>
          </div>
        )
      ))}
    </div>
  )
}

// Blood donation types: Conventional
export const ConventionalType = ({ className, style }) => {
  return (
    <Body className={`text-justify ${className}`} style={style}>
      Donor darah konvensional, sebagaimana yang telah diketahui oleh masyarakat, merupakan donor darah dengan prosedur sederhana di mana darah yang diambil berupa produk dalam bentuk whole blood (darah utuh).
    </Body>
  )
}

// Blood donation types: Apheresis
export const ApheresisType = ({ className, style }) => {
  return (
    <Body className={`text-justify ${className}`} style={style}>
      Donor darah dengan prosedur apheresis merupakan prosedur pengambilan darah dari pendonor, di mana hanya komponen tertentu saja yang akan dikeluarkan, dan komponen darah lainnya dikembalikan ke dalam tubuh pada saat itu juga.
    </Body>
  )
}
