/***
 * This is the data for the PMR page.
 * 
 * Is used in:
 * - PMR.jsx
 * - FirstPMRSection.jsx
 */

import React from 'react'

import SubHeading from '../../themes/typography/SubHeading';
import Body from '../../themes/typography/Body'

export const AboutPMR1 = ({className}) => {
  const aboutPMR1List = [
    "Palang Merah Remaja (PMR) merupakan wadah kegiatan dan pengembangan remaja di sekolah (tingkat SD, SMP, SMA atau yang sederajat) serta lembaga pendidikan formal dalam kepalangmerahan melalui program ekstrakurikuler.",
    "Saat ini sebanyak 75 persen sekolah menengah (SMP, SMA) di Kota Surakarta sudah memiliki satuan unit PMR. Semantara untuk PMR di tingkat SD, setidaknya sudah ada 30 persen SD di Kota Surakarta yang memilikinya. Pihak PMI berharap dan mengusahakan agar ke depan seluruh sekolah di Kota Surakarta dapat memiliki unit kegiatan PMR.",
  ];

  return (
    <div className={`${className}`}>
      {aboutPMR1List.map((aboutPMR1, index) => (
        <Body key={index} className={'text-justify flex items-start mb-3'}>
          {aboutPMR1}
        </Body>
      ))}
    </div>
  )
}

export const AboutPMR2 = ({className}) => {
  const aboutPMR2List = [
    {
      paragraph: "Keterlibatan anggota PMR dalam berbagai kegiatan kepalangmerahan merupakan karya dan bakti nyata setelah mengikuti pelatihan serta pengakuan terhadap keberadaan dan kompetensi dalam meningkatkan kualitas anggota dan organisasi, dan juga memberikan jawaban atas berbagai minat bergabungnya remaja dengan PMI. Ada pun isi dari Tri Bhakti PMI adalah sebagai berikut :",
      subItems: [
        "Meningkatkan keterampilan hidup sehat",
        "Berkarya dan berbakti di masyarakat",
        "Mempererat persahabatan nasional dan internasional"
      ]
    },
    "Dalam   kegiatan   ekstrakurikuler   PMI   ini,   para   pelajar dibina untuk dapat keluar dari zona pendidikan formal. Mereka dilatih  untuk  berorganisasi,  mengetahui  tujuan  hidup,  serta peduli terhadap sesama. Ini merupakan salah satu usaha untuk membangun karakter para remaja agar cepat tanggap terhadap situasi yang terjadi di sekitarnya. Pembimbing ekstrakurikuler PMR di sekolah-sekolah di Kota Surakarta bisa berasal dari kalangan guru yang telah mendapat pelatihan  khusus  dari  PMI  Surakarta.  Jika  tidak  ada,  maka pihak sekolah dapat mengajukan permohonan Pembina PMR kepada PMI Surakarta. Para anggota KSR dari perguruan tinggi dapat ditugasnya untuk menggantikan guru menjadi pembina ekstrakurikuler PMR di sekolah-sekolah. Tentunya anggota KSR tersebut sebelumnya juga telah mendapat pelatihan khusus dari PMI  Surakarta.  Pelatihan yang  diberikan  kepada  anggota  PMR merupakan pelatihan pertolongan pertama serta hal-hal dasar tentang kepalangmerahan."
  ];

  return (
    <div className={`${className}`}>
      {aboutPMR2List.map((aboutPMI2, index) => (
        typeof aboutPMI2 === 'string' ? (
          <Body key={index} className={'text-justify flex items-start mb-3'}>
            {aboutPMI2}
          </Body>
        ) : (
          <div key={index}>
            <Body className={'text-justify flex items-start mb-3'}>
              {aboutPMI2.paragraph}
            </Body>
            <ul className='ml-11 list-disc mb-3'>
              {aboutPMI2.subItems.map((sub, subIndex) => (
                <Body key={subIndex} className={'text-justify flex items-start gap-2'}>
                  <span>{subIndex + 1}.</span>
                  <span>{sub}</span>
                </Body>
              ))}
            </ul>
          </div>
        )
      ))}
    </div>
  )
}

export const PMRMember = ({className}) => {
  const PMRMemberList = [
    {
      name: 'PMR Mula',
      total: 165
    },
    {
      name: 'PMR Madya',
      total: 799
    },
    {
      name: 'PMR Wira',
      total: 1891
    }
  ];
  
  return (
    <div className={`${className}`}>
      {PMRMemberList.map((PMRMember, index) => (
        <SubHeading key={index} className={'text-center flex flex-col justify-center items-center gap-2'}>
          <span>{PMRMember.total}+</span>
          <span>{PMRMember.name}</span>
        </SubHeading>
      ))}
    </div>
  )
}