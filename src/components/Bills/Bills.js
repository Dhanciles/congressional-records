import React, { Component } from 'react'; 
import '../../styles/Bills.scss'; 
import PropTypes from 'prop-types'

export class Bills extends Component {
  constructor() {
    super()
  }
  render() {
    const { billId, sponsor, title, lastVote, committee } =  this.props
    const status = lastVote === null ? false : true
    return (
      <article className="bill-container">
        <div className="top-level-card">
          <p className="bill-id">{billId}</p>
          <p className="chamber">Chamber - House</p>
          <p className="sponsor">{sponsor}</p>
          <img  className="bookmark-icon"src='./icons/bookmark.svg' alt='bookmark'/>
        </div>
        <div className="bill-title-container">
          <h4 className="bill-title">{title}</h4>
        </div>
        <div className="bottom-level-card">
          <p className="commitees">{committee}</p>
          <p className="status"> Active - {status} </p>
          <p className="vote-infromation">{lastVote}</p>
        </div>
      </article>
    )
  }
}

Bills.propTypes = {
  billId: PropTypes.string, 
  sponsor: PropTypes.string, 
  title: PropTypes.string, 
  committee: PropTypes.string, 
  active: PropTypes.string, 
  lastVote: PropTypes.string
}



