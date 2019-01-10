import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchInput  from '../../containers/SearchInput/SearchInput.js'; 
import '../../styles/Header.scss'; 

export const Header = () => {
  return (
    <header>
      <SearchInput />
      <NavLink to='/favorites'><button className="tracked-bills-button">Tracked Bills</button></NavLink>
    </header>
  )
}