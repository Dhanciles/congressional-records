import React from 'react'; 
import '../styles/Bills.scss'; 
import { connect } from 'react-redux';

export const Bills = () => {
  return (
    <article className="bill-container">
      <p className="bill-id">bill-id</p>
      <p className="chamber">Chamber - House</p>
      <p className="sponsor">Sponsor</p>
      <img src='./icons/bookmark.svg' alt='bookmark'/>
      <h4 className="bill-title">Title</h4>
      <p className="commitees">Commitees</p>
      <p className="status"> Active - False </p>
      <p className="vote-infromation">Vote Information</p>
    </article>
  )
}
