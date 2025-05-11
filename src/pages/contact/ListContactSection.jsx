/***
 * This section contains the list of contact information of the PMI Kota Surakarta.
 * This section is a sub-section of Contact page.
 */

import React from 'react'

import ContactList from '../../components/shared/ContactList'

import PageSubTitle from '../../themes/typography/PageSubTitle'
import Body from '../../themes/typography/Body'

const ListContactSection = ({ className }) => {
  return (
    <div className={`${className}`}>
      <PageSubTitle className={'mb-4'}>Kontak Kami</PageSubTitle>
      <Body className={'mb-4 text-justify'}>
        Bagi masyarakat yang ingin menghubungi atau bertanya seputar kegiatan PMI Kota Surakarta dan juga memberikan saran atau kritik dapat mengisi formulir kirim pesan.
      </Body>

      <ContactList className={'w-full'} size={40}/>
    </div>
  )
}

export default ListContactSection