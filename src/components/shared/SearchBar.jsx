/***
 * Search Bar Component will render
 * a search bar with a search button.
 */

import { FaSearch } from "react-icons/fa"
import SecondaryColor from "../../themes/color_pallete/SecondaryColor"
import SearchButton from "../buttons/SearchButton"

const SearchBar = () => {
  return (
    <div className='relative w-full h-[48px] mt-5 mb-6 mx-auto'>
      {/* Search Icon */}
      <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-black' />

      {/* Search Input */}
      <input
        className={`w-full h-full pl-10 pr-24 border border-[${SecondaryColor.blackRed}] rounded-2xl font-inter text-lg`}
        placeholder="Cari artikel disini...."
      />

      {/* Search Button */}
      <SearchButton className={'absolute right-0 top-0 h-full px-6 rounded-r-2xl font-bold'}>
        Search
      </SearchButton>
    </div>
  )
}

export default SearchBar