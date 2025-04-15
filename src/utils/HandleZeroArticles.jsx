/***
 * HandleZeroArticles Component is used to display a message when no articles are found.
 */

import React from 'react'
import Body from '../themes/typography/Body';

const HandleZeroArticles = () => {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="text-center">
        <Body className="text-gray-600">Tidak ada berita yang ditemukan.</Body>
      </div>
    </div>
  )
}

export default HandleZeroArticles;