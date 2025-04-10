/***
 * This component is used to display the PMI logo 
 * with a clickable image that will redirects to the specified page when clicked.
 */

import { Link } from "react-router-dom"
import pmi_logo from '../../assets/images/pmi_logo.png';

const PMILogo = ({ navigate }) => {
  return (
    <Link to={ navigate }>
      <img 
        src={ pmi_logo } 
        alt="PMI Kota Surakarta" 
        className="w-[300px] object-contain cursor-pointer transition-colors duration-300 rounded-2xl" 
      />
    </Link>
  )
}

export default PMILogo