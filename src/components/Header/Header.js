import React from 'react'
import SearchInput  from '../../containers/SearchInput/SearchInput.js'; 
import '../../styles/Header.scss'; 

export const Header = () => {
  return (
    <header>
      <SearchInput />
    </header>
  )
}