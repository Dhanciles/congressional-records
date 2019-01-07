import React from 'react'
import ExploreFilter   from '../ExploreFilter/ExploreFilter.js'; 
import SearchInput  from '../SearchInput/SearchInput.js'; 
import '../styles/Header.scss'; 

export const Header = () => {
  return (
    <header>
      <ExploreFilter />
      <SearchInput />
    </header>
  )
}