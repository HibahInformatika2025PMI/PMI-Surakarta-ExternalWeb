/***
 * This is the data for the donation home page.
 * 
 * Is used in:
 * - FirstHomeSection.jsx
 * - ThirdHomeSection.jsx
 */

import React from 'react'
import { FaBox, FaDropbox, FaRegFileAlt, FaShippingFast } from 'react-icons/fa'
import { MdOutlineContactMail, MdPayments } from 'react-icons/md'

import DonationTypesCard from '../../components/cards/DonationTypesCard'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import Body from '../../themes/typography/Body'
import PageSubTitle from '../../themes/typography/PageSubTitle'
import DonationProcedureCard from '../../components/cards/DonationProcedureCard'
import GradRedDarkButton from '../../components/buttons/GradRedDarkButton'

// Donation Types Data
export const DonationTypesData = ({ iconSize, className, style }) => {
  const donationTypesList = [
    {
      icon: <FaDropbox size={iconSize} />,
      title: 'Donasi Barang',
      description: 'Setiap barang yang Anda berikan merupakan harapan bagi mereka yang membutuhkan. Dari bahan makanan pokok hingga barang kebutuhan harian, setiap donasi yang Anda berikan akan jadi kekuatan besar untuk menolong sesama.',
      button: 'Pelajari Lebih Lanjut',
      path: '/donasi/donasi-barang'
    },
    {
      icon: <MdPayments size={iconSize} />,
      title: 'Donasi Dana',
      description: 'Setiap rupiah yang Anda sumbangkan bukan hanya angka, melainkan secercah harapan yang membantu sesama bangkit, bertahan, dan melanjutkan hidup dengan lebih layak. Bersama, kita bisa ciptakan perubahan nyata.',
      button: 'Daftar Donasi Uang',
      path: '/donasi/donasi-dana'
    },
  ]
  return (
    <div className={`flex flex-col md:flex-row gap-10 ${className}`} style={{ ...style }}>
      {donationTypesList.map((donationType, index) => (
        <DonationTypesCard 
          key={index}
          icon={donationType.icon}
          title={donationType.title}
          description={donationType.description}
          button={donationType.button}
          path={donationType.path}
        />
      ))}
    </div>
  )
}

// Basic Need Data
export const BasicNeedData = ({ className, style }) => {
  const basicNeedList = [
    {
      firstSentence: "Warga Griya Saat ini berjumlah ",
      otherSentence: "110 orang"
    },
    {
      firstSentence: "Kebutuhan yang harus dipenuhi sebesar ",
      otherSentence: "Rp 775.000 / orang / bulan (pembulatan)."
    }
  ];

  return (
    <div className={`flex flex-col gap-5 ${className}`} style={{ ...style }}>
      <ul className='ml-8 list-disc'>
        {basicNeedList.map((basicNeed, index) => (
          <li key={index}>
            <Body>
              <strong>
                {basicNeed.firstSentence}
                <span style={{ color: PrimaryColor.red }}>
                  {basicNeed.otherSentence}
                </span>
              </strong>
            </Body>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Donation Requirements Data
export const DonationRequirementsData = ({ className, style }) => {
  const donationRequirementsList = [
    "Pastikan barang dalam kondisi baik dan layak pakai atau konsumsi.",
    "Barang yang dibutuhkan meliputi: makanan kering, alat kebersihan, pakaian layak pakai, dan perlengkapan kesehatan.",
    "Kirimkan barang ke Markas PMI Kota Surakarta, atau hubungi kami untuk penjemputan.",
    "Sertakan catatan jenis dan jumlah barang saat donasi.",
    "PMI berhak menolak barang yang tidak sesuai dengan ketentuan di atas.",
    "Donasi bersifat sukarela dan tidak dipungut biaya apa pun."
  ];

  return (
    <div
      className={`flex flex-col rounded-3xl p-8 shadow-md ${className}`}
      style={{ background: PrimaryColor.white, ...style }}
    >
      <PageSubTitle className={'mb-4'}>Syarat & Ketentuan</PageSubTitle>
      <ul className='ml-8 list-disc'>
        {donationRequirementsList.map((donationRequirement, index) => (
          <li key={index}>
            <Body>{donationRequirement}</Body>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Donation Method Data
export const DonationMethodData = ({ iconSize, className, style }) => {
  const donationMethodList = [
    {
      icon: <FaBox size={iconSize} />,
      title: 'Siapkan Barang',
      description: 'Pastikan barang donasi sesuai dengan S&K dan beri label pada setiap jenis barang.'
    },
    {
      icon: <MdOutlineContactMail size={iconSize} />,
      title: 'Hubungi PMI',
      description: 'Hubungi PMI Kota Surakarta melalui WhatsApp atau datang langsung ke kantor untuk konfirmasi jenis dan waktu pengiriman donasi.'
    },
    {
      icon: <FaShippingFast size={iconSize} />,
      title: 'Antar Langsung ke Lokasi',
      description: 'Hubungi PMI Kota Surakarta melalui WhatsApp atau datang langsung ke kantor untuk konfirmasi jenis dan waktu pengiriman donasi.'
    },
    {
      icon: <FaRegFileAlt size={iconSize} />,
      title: 'Siapkan Barang',
      description: 'Petugas PMI akan menerima dan mencatat barang yang diterima. Bukti serah terima akan diberikan kepada donatur sebagai arsip.'
    }
  ];

  return (
    <div
      className={`flex flex-col rounded-3xl p-8 shadow-md gap-10 ${className}`}
      style={{ background: PrimaryColor.white, ...style }}
    >
      <PageSubTitle className={'mb-4'}>Cara Donasi</PageSubTitle>
      <div className='flex flex-row gap-5 md:gap-0'>
        {donationMethodList.map((donationType, index) => (
          <DonationProcedureCard 
            key={index}
            icon={donationType.icon}
            title={donationType.title}
            description={donationType.description}
          />
        ))}
      </div>
      <GradRedDarkButton className={'flex justify-center w-full'} path={'/donasi/donasi-barang'}>Daftar Donasi Barang</GradRedDarkButton>
    </div>
  )
}

