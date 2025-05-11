/***
 * This is the data for the apheresis page.
 * 
 * Is used in:
 * - Apheresis.jsx
 */

import React from 'react'

import ProcedureCard from '../../components/cards/ProcedureCard'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import PageSubTitle from '../../themes/typography/PageSubTitle'
import Body from '../../themes/typography/Body'

// Short description about Apheresis
export const AboutApheresis = ({ className, style }) => {
  return (
    <div className='flex flex-col gap-4'>
      <Body className={`text-justify ${className}`} style={{ color: PrimaryColor.white, ...style }}>
        Donor darah dengan prosedur Apheresis merupakan prosedur pengambilan darah dari pendonor, di mana hanya komponen tertentu saja yang akan dikeluarkan, dan komponen darah lainnya dikembalikan ke dalam tubuh pada saat itu juga dengan alat khusus.
      </Body>
      <Body className={`text-justify ${className}`} style={{ color: PrimaryColor.white, ...style }}>
        Jumlahnya bahkan bisa sampai 7-8 kali dari produk donor darah secara konvensional, sebab volume produk yang lainnya dikembalikan ke dalam tubuh.
      </Body>
    </div>
  )
}

// Apheresis Blood Donation Types
export const ApheresisTypesData = ({ className, style }) => {
  const proceduresList = [
    {
      title: 'Trombafersis',
      description: 'Proses apheresis untuk mengambil trombosit.'
    },
    {
      title: 'Eritraferesis',
      description: 'Proses apheresis untuk mengambil sel darah merah.'
    },
    {
      title: 'Leukaferesis',
      description: 'Proses apheresis untuk mengambil sel darah putih.'
    },
    {
      title: 'Plasmaferesis',
      description: 'Proses apheresis untuk mengambil plasma darah.'
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
          italic={'italic'}
        />
      ))}
    </div>
  )
}

// Apheresis Blood Donation Requirements
export const ApheresisRequirementsData = ({ className, title }) => {
  const requirementsList = [
    "Sehat Jasmani & rohani",
    "Usia minimal 17 tahun",
    "Minimal donor darah konvensional 3 kali",
    "Pria harus memiliki berat badan minimal 55 kg, sementara wanita minimal 60 kg",
    "Memiliki kadar Hemoglobin 12.5 – 17.0 gr/dL",
    "Tekanan darah sistole antara 110 – 150 mmHg dan diastole antara 70 – 90 mmHg",
    "Denyut nadi 50 – 100x/menit",
    "Akses Vena besar",
    "Rentang waktu donor apheresis yang kedua kali minimal 2 minggu setelah donor pertama. Sementara untuk eritraferesis (donor sel darah  merah) minimal 8 minggu dan plasmaferesis (donor plasma darah) minimal 1 minggu"
  ];

  return (
    <div className={`${className}`}>
      <PageSubTitle className={'text-center mb-4'}>
        {title}
      </PageSubTitle>

      {requirementsList.map((requirement, index) => (
        <div key={index}>
          <Body className={'text-justify flex items-start gap-2'}>
            <span>&bull;</span>
            <span>{requirement}</span>
          </Body>
        </div>
      ))}
    </div>
  )
}

// Apheresis Blood Donation Procedures
export const ApheresisProceduresData = ({ className, title }) => {
  const proceduresList = [
    "Skrining untuk mengetahui adanya infeksi menular lewat transfusi darah pada tubuh pendonor. Tes ini akan menentukan apakah seseorang diperbolehkan untuk melakukan donor apheresis atau tidak.",
    "Pengambilan sampel darah sebanyak 3 – 12 mililiter untuk melakukan pemeriksaan hematologi.",
    "Setelah pemeriksaan sudah diketahui hasilnya, pendonor akan diminta untuk mengisi formulir informed consent.",
    "Melakukan pemeriksaan medis dan diberikan penjelasan seputar persiapan untuk donor apheresis.",
    "Proses donor apheresis akan berlangsung selama 1/2 – 2 jam, tergantung kondisi masing-masing pendonor.",
    "Jika sudah selesai, pendonor diminta untuk beristirahat sejenak atau sekitar 10 menit di tempat tidur. Pendonor juga diminta mengonsumsi beberapa menu, seperti susu dan larutan ion untuk membuat tubuh kembali fit."
  ];

  return (
    <div className={`${className}`}>
      <PageSubTitle className={'text-center mb-4'}>
        {title}
      </PageSubTitle>

      {proceduresList.map((procedure, index) => (
        <div key={index}>
          <Body className={'text-justify flex items-start gap-2'}>
            <span>&bull;</span>
            <span>{procedure}</span>
          </Body>
        </div>
      ))}
    </div>
  )
}
