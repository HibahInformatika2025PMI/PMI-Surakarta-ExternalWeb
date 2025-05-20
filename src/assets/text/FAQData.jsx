/***
 * This is the data for the FAQ page.
 * 
 * Is used in:
 * - FAQ.jsx
 */

import React from 'react'

import Body from '../../themes/typography/Body'

export const FirstQuestion = ({ className, style }) => {
  const AboutPMIDonation = [
    "Kampanye donasi ini diselenggarakan oleh PMI kota Surakarta untuk menampung, mengelola dan mendistribusikan dari masyarakat dan untuk masyarakat yang membutuhkan. Sesuai dengan <a href='https://peraturan.bpk.go.id/Details/70086/uu-no-1-tahun-2018' target='_blank' rel='noopener noreferrer' className='underline' style={{ color: PrimaryColor.blue }}>Undang-Undang No. 1 Tahun 2018 tentang Kepalangmerahan</a>, ruang lingkup kampanye donasi ini antara lain meliputi :",
    {
      subItems: [
        "Penanggulangan Bencana.",
        "Pelayanan Kesehatan.",
        "Pelayanan Kemanusiaan.",
        "Pembinaan relawan.",
        "dsb."
      ]
    },
    "<strong>Kami Percaya,</strong>",
    "Bahwa untuk melaksanakan kegiatan kemanusiaan, PMI (Palang Merah Indonesia) perlu dukungan penuh dari seluruh masyarakat Republik Indonesia.",
    "Atas nama kemanusiaan, Ayo! Gotong-royong ringankan penderitaan sesama manusia tanpa membedakan agama/kepercayaan, suku, jenis kelamin, kedudukan sosial, atau kriteria lain yang serupa."
  ]

  return (
    <div className={`${className}`} style={style}>
      {AboutPMIDonation.map((item, index) => (
        typeof item === 'string' ? (
          <Body key={index} className='text-justify mb-2' dangerouslySetInnerHTML={{ __html: item }} />
        ) : (
          <Body key={index} className='text-justify mb-4'>
            <ul className='ml-11 list-disc'>
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Body dangerouslySetInnerHTML={{ __html: subItem }} />
                </li>
              ))}
            </ul>
          </Body>
        )
      ))}
    </div>
  )
}

export const SecondQuestion = ({ className, style }) => {
  const StepsDonation = [
    "Klik donasi pada salah satu kampanye donasi PMI yang anda pilih.",
    "Cantumkan Nama Anda, dan pilih jumlah donasi Anda.",
    "Konfirmasi data donasi yang Anda isikan sebelumnya.",
    "Pilih metode pembayaran donasi sesuai pilihan Anda."
  ]

  return (
    <div className={`${className}`} style={style}>
      {StepsDonation.map((item, index) => (
        <Body key={index} className='text-justify mb-2'>
          {index + 1}. {item}
        </Body>
      ))}
    </div>
  )
}

export const ThirdQuestion = ({ className, style }) => {
  const PrivacyPolicy = [
    "Informasi Pribadi yang kami kumpulkan dari Anda , hanya dapat disimpan atau kelola oleh Palang Merah Indonesia.",
    "Untuk data donasi Anda, PMI bekerjasama dengan Penyedia layanan pihak ketiga (<a href='https://midtrans.com' target='_blank' rel='noopener noreferrer' className='underline' style={{ color: PrimaryColor.blue }}>Midtrans.com</a>) yang memiliki hubungan hukum dengan Kami. Kami akan menggunakan semua upaya yang wajar untuk memastikan bahwa semua penyedia layanan pihak ketiga tersebut memberikan tingkat perlindungan yang sebanding dengan komitmen Kami berdasarkan Kebijakan Privasi ini.",
    "Dengan mengakses situs Kami, dan menggunakan Layanan Kami, Anda mengakui bahwa Anda telah membaca dan memahami Kebijakan Privasi ini dan menyetujui segala ketentuannya. Secara khusus, Anda setuju dan memberikan persetujuan kepada Kami untuk mengumpulkan, menggunakan, membagikan, mengungkapkan, menyimpan, mentransfer, atau mengolah Informasi Anda sesuai dengan Kebijakan Privasi ini."
  ]

  return (
    <div className={`${className}`} style={style}>
      {PrivacyPolicy.map((item, index) => (
        <Body key={index} className='text-justify mb-2' dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </div>
  )
}

export const FourthQuestion = ({ className, style }) => {
  const DonationAdmin = [
    "Kami mengimplementasikan kebijakan 5% platform fee per-campaign untuk mendukung pengembangan program Platform fee yang dimaksud kurang lebih akan diperuntukkan untuk pengeluaran perbulan sebagai berikut:",
    {
      subItems: [
        "Biaya pengembangan dan pemeliharaan server, mobile apps & website.",
        "Office space (coworking space).",
        "Upaya-upaya marketing (publikasi pasien, campaign dll).",
        "Biaya-biaya overhead seperti administrasi, & transportasi selama verifikasi & campaign berjalan."
      ]
    }
  ]

  return (
    <div className={`${className}`} style={style}>
      {DonationAdmin.map((item, index) => (
        typeof item === 'string' ? (
          <Body key={index} className='text-justify mb-2' dangerouslySetInnerHTML={{ __html: item }} />
        ) : (
          <Body key={index} className='text-justify mb-4'>
            {item.subItems.map((subItem, subIndex) => (
              <Body key={subIndex}>{subIndex + 1}. {subItem}</Body>
            ))}
          </Body>
        )
      ))}
    </div>
  )
}