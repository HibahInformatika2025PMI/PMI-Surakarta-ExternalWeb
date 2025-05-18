/***
 * This component is used for components that need a search bar on the website.
 * 
 * Is used in:
 * - News.jsx
 * - SecondHomeSection.jsx
 * - ItemDonate.jsx
 * - SecondHomeSection.jsx
 */

import React, { useState } from 'react'
import { FaFilter, FaSearch } from 'react-icons/fa'

import RedOutlineButton from '../buttons/RedOutlineButton'
import SearchButton from '../buttons/SearchButton'

import { PrimaryColor, SecondaryColor } from '../../themes/color_palletes/ColorPalletes'

// Search Bar with button Search
export const SearchBar1 = ({ placeholder, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className='relative w-full h-[48px] mt-5 mb-6 mx-auto'>
      <FaSearch
        className='absolute left-4 top-1/2 transform -translate-y-1/2'
        style={{ color: PrimaryColor.grey }}
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

// Search Bar with button filter and search
export const SearchBar2 = ({ placeholder, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form
      onSubmit={handleSearch}
      className='flex flex-col md:flex-row w-full md:h-[48px] mt-5 mb-6 mx-auto rounded-lg gap-2'
      style={{ borderColor: SecondaryColor.darker_red }}
    >
      <div className='relative w-full h-[48px] rounded-lg shadow-lg mx-auto'>
        <FaSearch className='absolute left-5 top-1/2 transform -translate-y-1/2' style={{ color: PrimaryColor.grey }} />
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full h-full pl-[50px] pr-24 border font-inter text-lg'
        />
      </div>

      <RedOutlineButton
        className={'h-full px-6 rounded-lg mx-2 flex items-center justify-center gap-2'}
      >
        <FaFilter style={{ color: PrimaryColor.grey }} />
        Filter
      </RedOutlineButton>

      <SearchButton 
        type="submit"
        className={'h-full px-6 rounded-lg'}
      >
        Cari
      </SearchButton>
    </form>
  )
}