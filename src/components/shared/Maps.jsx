/***
 * This component is used to display the Google Maps of PMI Surakarta
 */

import React from 'react'

const Maps = () => {
  return (
    <iframe 
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=PMI%20Kota%20Surakarta+(PMI%20Kota%20Surakarta)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      className="w-full h-full border-none"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    />
  )
}

export default Maps