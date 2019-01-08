import React from 'react'
import ExploreFilter  from '../../containers/ExploreFilter/ExploreFilter.js'; 
import SearchInput  from '../../containers/SearchInput/SearchInput.js'; 
import '../../styles/Header.scss'; 

export const Header = () => {
  return (
    <header>
      <ExploreFilter />
      <SearchInput />
    </header>
  )
}