import React from 'react'
import ExploreFilter from '../ExploreFilter/ExploreFilter.js'; 
import SearchInput from '../SearchInput/SearchInput.js'; 

export const Header = () => {
  return (
    <header>
      <ExploreFilter />
      <SearchInput />
    </header>
  )
}