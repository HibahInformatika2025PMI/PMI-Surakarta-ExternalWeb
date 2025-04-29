/***
 * This component is used for components that need a search bar on the website.
 * 
 * Is used in:
 * - News.jsx
 */

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import SearchButton from '../buttons/SearchButton'

import { PrimaryColor, SecondaryColor } from '../../themes/color_palletes/ColorPalletes'

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className='relative w-full h-[48px] mt-5 mb-6 mx-auto'>
      <FaSearch
        className='absolute left-4 top-1/2 transform -translate-y-1/2'
        style={{ color: PrimaryColor }}
      />

      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='w-full h-full pl-10 pr-24 border rounded-2xl font-inter text-lg'
        style={{ borderColor: SecondaryColor.darker_red }}
      />

      <SearchButton 
        type="submit"
        className={'absolute right-0 top-0 h-full px-6 rounded-r-2xl'}
      >
        Search
      </SearchButton>
    </form>
  )
}

export default SearchBar