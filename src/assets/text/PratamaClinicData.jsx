/***
 * This is the text data for the Pratama Clinic page.
 * 
 * Is used in:
 * - PratamaClinic.jsx
 * - ClinicFacilitySection.jsx
 * - ClinicServicesSection.jsx
 */

import React from 'react'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes';
import PageTitle from '../../themes/typography/PageTitle';
import SubHeading from '../../themes/typography/SubHeading';
import Body from '../../themes/typography/Body';

// Short description about the clinic
export const AboutPratamaClinic = ({ title, className, style }) => {
  const aboutPratamaClinic = [
    "Klinik ini beroperasi setiap hari Senin-Sabtu mulai pukul 08.00 sampai 21.00 WIB (hari Minggu dan tanggal merah libur). Saat ini Klinik Pratama PMI Surakarta menjadi fasilitas kesehatan (faskes) tingkat 1 dan melayani pasien umum serta BPJS Kesehatan.",
    "Klinik Pratama PMI Surakarta menyelenggarakan dan mengelola pelayanan medik dasar bagi masyarakat di Kota Surakarta dan sekitarnya. PMI Kota Surakarta telah merencanakan untuk mengembangkan klinik ini, serta menyelenggarakan klinik baru berupa klinik spesialis obgyn/kandungan."
  ];
  
  return (
    <div className={`flex flex-col gap-[10px] ${className}`} style={style}>
      <PageTitle className={'mb-4'}>
        {title}
      </PageTitle>

      {aboutPratamaClinic.map((about, index) => (
        <Body key={index} className={'text-justify'}>
          {about}
        </Body>
      ))}
    </div>
  )
}

// Clinic Facility
export const ClinicFacility = ({ className }) => {
  const clinicFacilityList = [
    "Gratis KB Suntik setahun 4x (3 bulan sekali)",
    "Gratis Medical ringan (rawat luka ringan)",
    {
      title: "Gratis Pemeriksaan medical check up peserta prolanis 6 bulan sekali:",
      subItems: [
        "HbA1C",
        "Microalbumin",
        "Cholesterol Total",
        "HDL, LDL",
        "Trigliserida",
        "Ureum & Kreatinin",
        "Pemeriksaan Gula Darah diagnosa DM (1 bulan sekali)"
      ]
    }
  ];

  return (
    <div className={`${className}`}>
      {clinicFacilityList.map((facility, index) => (
        typeof facility === 'string' ? (
          <Body key={index} className={'text-justify flex items-start gap-2'}>
            <span>{index + 1}.</span>
            <span>{facility}</span>
          </Body>
        ) : (
          <div key={index} className='flex flex-col items-start mb-1 w-full'>
            <Body className={'text-justify flex items-start gap-2'}>
              <span>{index + 1}.</span>
              <span>{facility.title}</span>
            </Body>
            <ul className='ml-11 list-disc'>
              {facility.subItems.map((sub, subIndex) => (
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

// Clinic Services
export const ClinicServices = ({ className, style }) => {
  const clinicServicesList = [
    {
      title: "Laboratorium Klinik",
      description: "Kami memiliki Laboratorium Klinik buka 24 jam dengan harga yang terjangkau & murah, serta dapat menerima pengambilan sampel di rumah."
    },
    {
      title: "Free Ambulance 24 Jam",
      description: "Layanan Ambulance siap melayani 24 jam secara gratis untuk dalam kota sedangkan untuk luar kota terdapat biaya tambahan per kilometernya."
    },
    {
      title: "Home Visit",
      description: "Kami siap melayani medical chek up & rawat luka secara Home visit dengan petugas yang berkompeten serta handal dibidangnya. Minimal 1 kali dalam seminggu Kami melakukan pelayanan home visit untuk pasien-pasien yang tidak bisa berkunjung ke klinik."
    },
    {
      title: "Instalasi Farmasi",
      description: "Unit pelaksana fungsional yang menyelenggarakan seluruh kegiatan pelayanan kefarmasian di Klinik Pratama PMI Kota Surakarta. Apoteker Penanggung Jawab yaitu apt. Tri Diyah Nugrahawati, S.Farm dg SIPA : 19821114/SIPA_33.72/2016/2257 & STRA : 19821114/STRA-USB/2006/25481."
    }
  ];

  return (
    <div className={`${className}`} style={style}>
      {clinicServicesList.map((service, index) => (
        <div key={index} className='flex flex-col items-start mb-1 w-full p-6 rounded-lg' style={{ backgroundColor: PrimaryColor.white }}>
          <SubHeading className={'text-justify flex items-start gap-2 mb-4'}>
            <strong><span>{service.title}</span></strong>
          </SubHeading>
          <Body className={'text-justify'}>{service.description}</Body>
        </div>
      ))}
    </div>
  )
}
