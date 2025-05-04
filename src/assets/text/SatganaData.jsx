/***
 * This is the data for the Satgana page.
 * 
 * Is used in:
 * - Satgana.jsx
 */

import React from 'react'

import Body from '../../themes/typography/Body'

export const SatganaDescription = ({ className, style }) => {
  return (
    <Body className={className} style={style}>
      Tim yang dibentuk, dibina, dan dikerahkan PMI sebelum , selama, setelah bencana
    </Body>
  )
}

export const AboutSatgana = ({ className }) => {
  const aboutSatganaList = [
    "Bagi anggota Palang Merah Indonesia istilah SATGANA (Satuan Siaga Penanggulangan Bencana) sudah tidak asing lagi demikian juga perannya dalam membantu masyarakat yang tertimpa bencana. Satgana secara khusus merupakan satuan tanggap darurat bencana. Ketika terjadi bencana di suatu wilayah, maka tim Satgana akan diterjunkan guna turut menjadi relawan untuk membantu para korban.",
    "PMI Kota Surakarta selalu meningkatkan pengetahuan, keterampilan di bidang Penanggulangan Bencana juga dalam hal pemberdayaan SATGANA. Kepedulian terhadap terjadinya bencana di Indonesia juga memicu Tim SATGANA untuk selalu mengembangkan diri. Anggota Tim SATGANA terdiri dari Pengurus PMI, Relawan PMI (anggota KSR/TSR), Pembina/pelatih PMR/KSR, Tenaga Kesehatan, Pegawai PMI dan juga Masyarakat."
  ];

  return (
    <div className={className}>
      {aboutSatganaList.map((item, index) => (
        <Body className='text-justify mb-6' key={index}>
          {item}
        </Body>
      ))}
    </div>
  )
}