/***
 * This component is used to display the top navbar of the website.
 * Contains the PMI logo and social media links.
 */

import Body from "../../themes/typography/Body"
import PMILogo from "../shared/PMILogo"
import SocialMediaLink from "../shared/SocialMediaLink"

const TopNavbar = () => {
  return (
    <div className='flex px-[16px] md:px-[32px] xl:px-[125px] py-1 justify-between'>
      <PMILogo navigate={'/'} />

      <div className="flex items-center">
        <Body className={'italic mr-4'}>find us on</Body>
        <SocialMediaLink size={32} />
      </div>
    </div>
  )
}

export default TopNavbar