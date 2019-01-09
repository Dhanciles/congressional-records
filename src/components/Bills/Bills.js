import React, { Component } from 'react'; 
import '../../styles/Bills.scss'; 

export class Bills extends Component {
  constructor() {
    super()
  }
  render() {
    const { billId, sponsor, title, lastVote, committee } =  this.props
    const status = lastVote === null ? false : true
    return (
      <article className="bill-container">
        <p className="bill-id">{billId}</p>
        <p className="chamber">Chamber - House</p>
        <p className="sponsor">{sponsor}</p>
        <img  className="bookmark-icon"src='./icons/bookmark.svg' alt='bookmark'/>
        <h4 className="bill-title">{title}</h4>
        <p className="commitees">{committee}</p>
        <p className="status"> Active - {status} </p>
        <p className="vote-infromation">{lastVote}</p>
      </article>
    )
  }
}



