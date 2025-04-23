/***
 * This component is used to display the PMI logo
 * with a clickable image that navigates to the specified route.
 */

import { Link } from "react-router-dom"

import PMI_Logo from '../../assets/images/pmi_logo.png'

const PMILogo = ({ navigate }) => {
  return (
    <Link to={navigate}>
      <img 
        src={PMI_Logo}
        alt='PMI Logo'
        className='w-[300px] object-contain cursor-pointer transition-colors duration-300 rounded-2xl'
      />
    </Link>
  )
}

export default PMILogo
