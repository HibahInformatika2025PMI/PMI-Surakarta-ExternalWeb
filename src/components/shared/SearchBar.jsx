/***
 * This component is used for components that need a search bar on the website.
 */

import React from 'react'
import { FaSearch } from 'react-icons/fa'

import SearchButton from '../buttons/SearchButton'

import { PrimaryColor, SecondaryColor } from '../../themes/color_palletes/ColorPalletes'

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <div className='relative w-full h-[48px] mt-5 mb-6 mx-auto'>
      <FaSearch
        className='absolute left-4 top-1/2 transform -translate-y-1/2'
        style={{ color: PrimaryColor }}
      />

      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className='w-full h-full pl-10 pr-24 border rounded-2xl font-inter text-lg'
        style={{ borderColor: SecondaryColor.darker_red }}
      />

      <SearchButton className={'absolute right-0 top-0 h-full px-6 rounded-r-2xl'}>
        Search
      </SearchButton>
    </div>
  )
}

export default SearchBar