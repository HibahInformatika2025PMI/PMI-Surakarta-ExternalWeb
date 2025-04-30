/***
 * This is the text data for the profile page.
 * 
 * Is used in:
 * - AboutPMISection.jsx
 */

import React from 'react'

import { PrimaryColor } from '../../themes/color_palletes/ColorPalletes'
import Body from '../../themes/typography/Body'

// Short description about PMI
export const AboutPMI = ({ className }) => {
  return (
    <Body className={`text-justify ${className}`} style={{ color: PrimaryColor.white }}>
      Sebagaimana diatur dalam Undang Undang RI Nomor 1 Tahun 2018 tentang Kepalangmerahan, PMI adalah perhimpunan nasional yang berdiri atas asas perikemanusiaan dan atas dasar sukarela dengan tidak membeda-bedakan bangsa, golongan, dan paham politik. Kegiatan kemanusiaan yang dilakukan PMI adalah bersifat meringankan penderitaan sesama manusia dengan tidak membedakan agama atau kepercayaan, suku, jenis kelamin, kedudukan sosial, atau kriteria lain yang serupa.
    </Body>
  )
}

// History of PMI Kota Surakarta
export const HistoryPMI = ({ className }) => {
  return (
    <Body className={`text-justify ${className}`} style={{ color: PrimaryColor.white }}>
      Palang Merah Indonesia (PMI) Kota Surakarta adalah satu dari lima PMI pelopor di Indonesia selain Surabaya, Yogyakarta, Semarang, dan Bandung. Disebut pelopor karena kelima PMI cabang itulah yang berdiri tujuh bulan setelah PMI Pusat diresmikan pada 17 September 1945.
    </Body>
  )
}

// Vision of PMI Kota Surakarta
export const VisionPMI = ({ className }) => {
  return (
    <Body className={`text-justify ${className}`}>
      Mewujudkan PMI yang profesional, berintegritas, dan bergerak bersama masyarakat
    </Body>
  )
}

// Mission of PMI Kota Surakarta
export const MissionPMI = ({ className }) => {
  const missionList = [
    "Memelihara reputasi organisasi PMI di tingkat nasional dan internasional",
    "Menjadi organisasi kemanusiaan terdepan yang memberikan layanan berkualitas kepada masyarakat sesuai dengan Prinsip-Prinsip Dasar Gerakan Palang Merah dan Bulan Sabit Merah Internasional",
    "Meningkatkan integritas dan kemandirian organisasi melalui kerja sama strategis yang berkesinambungan dengan pemerintah, swasta, mitra gerakan, masyarakat, dan pemangku kepentingan lainnya di semua tingkatan PMI dengan mengutamakan keberpihakan kepada masyarakat yang memerlukan bantuan."
  ];

  return (
    <div className={`${className}`}>
      {missionList.map((mission, index) => (
        <Body key={index} className={'text-justify flex items-start gap-2'}>
          <span><strong>{index + 1}.</strong></span>
          <span>{mission}</span>
        </Body>
      ))}
    </div>
  )
}

// Regulation in PMI Kota Surakarta
export const RegulationPMI = ({ className }) => {
  const regulationList = [
    "Membuat Layanan yang berkualitas sesuai dengan permintaan pelanggan",
    "Meningkatkan produktivitas kerja serta pelayanan kepada pelanggan",
    "Selalu melakukan perbaikan kinerja dan sistem manajemen mutu secara terus menerus"
  ];

  return (
    <div className={`${className}`}>
      {regulationList.map((regulation, index) => (
        <Body key={index} className={'text-justify flex items-start gap-2'}>
          <span>&bull;</span>
          <span>{regulation}</span>
        </Body>
      ))}
    </div>
  )
}

// Short description of Palang Merah Principle
export const AboutPrinciple = ({ className }) => {
  return (
    <Body className={`text-justify ${className}`} style={{ color: PrimaryColor.white }}>
      Dalam setiap melaksanakan tugas kemanusiaan, Palang Merah Indonesia selalu berdasar pada tujuh prinsip dasar gerakan Palang Merah dan Bulan Sabit Merah Internasional.
    </Body>
  )
}

// Principle of Palang Merah
export const PalangMerahPrinciple = ({ className }) => {
  const principleList = [
    {
      firstSentence: "Kemanusiaan :",
      otherSentence: "Prinsip yang menekankan Kegiatan Kemanusiaan dalam hal memberikan bantuan tanpa diskriminasi kepada para korban perang, mencegah, dan mengurangi penderitaan manusia di mana pun dengan memanfaatkan kemampuannya, baik secara nasional maupun internasional."
    },
    {
      firstSentence: "Kesamaan :",
      otherSentence: "Prinsip yang menekankan Kegiatan Kemanusiaan menyamakan dan tidak membedakan atas dasar kebangsaan, ras, agama, status, ataupun pandangan politik. Tujuannya meringankan penderitaan individu dan hanya membedakan korban menurut keadaan kesehatannya sehingga prioritas diberikan kepada korban yang keperluannya paling mendesak."
    },
    {
      firstSentence: "Kesukarelaan :",
      otherSentence: "Prinsip yang menekankan Kegiatan Kemanusiaan bersifat sukarela dan tidak bermaksud sama sekali untuk mencari keuntungan."
    },
    {
      firstSentence: "Kemandirian :",
      otherSentence: "Prinsip yang menekankan Kegiatan Kemanusiaan yang mandiri. Perhimpunan Nasional, yang melakukan jasa-jasa kemanusiaan dan membantu Pemerintah Pusat dan Pemerintah Daerah serta tunduk pada hukum nasional di negaranya, harus selalu mempertahankan kemandiriannya sehingga mereka setiap saat dapat bertindak sesuai dengan prinsip-prinsip Gerakan."
    },
    {
      firstSentence: "Kesatuan :",
      otherSentence: "Hanya dapat didirikan satu perhimpunan palang merah atau bulan sabit merah nasional di dalam suatu negara. Palang merah atau bulan sabit merah tersebut harus terbuka bagi semua orang dan harus melaksanakan pelayanan kemanusiaannya di seluruh wilayah negara."
    },
    {
      firstSentence: "Kenetralan :",
      otherSentence: "Prinsip yang menekankan Kegiatan Kemanusiaan dalam rangka menjaga kepercayaan para pihak dengan tidak berpihak di dalam perselisihan atau terlibat dalam kontroversi yang bersifat politis, rasial, keagamaan, atau ideologis."
    },
    {
      firstSentence: "Kesemestaan :",
      otherSentence: "Anggota-anggota gerakan Kegiatan Kemanusiaan diakui di seluruh negara. Masing-masing negara memiliki status atau kedudukan yang sama dan berbagi tanggung jawab dan kewajiban yang sama guna saling membantu di seluruh dunia."
    }
  ];
  
  return (
    <div className={`${className}`}>
      {principleList.map((principle, index) => (
        <Body key={index} className={'text-justify flex items-start gap-3 mb-2'}>
          <span>{index + 1}.</span>
          <span><strong>{principle.firstSentence}</strong> {principle.otherSentence} </span>
        </Body>
      ))}
    </div>
  )
}