import React, { Component } from 'react'; 
import '../../styles/Bills.scss'; 
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { trackBill, addFavorites, removeFavorites } from '../../actions/index.js'; 

export class Bills extends Component {
  constructor() {
    super()
  }

  handleFavorites = () => {
    const { billId, addFavorites } = this.props
    addFavorites(billId)
  }

  handleRemoveFavorites = () => {
    const { billId, removeFavorites } = this.props
    removeFavorites(billId)
  }
 
  render() {
    const { billId, sponsor, title, lastVote, committee, query } =  this.props
    let icon
    if (!this.props.favorites.includes(billId)) {
        icon = <img onClick={() =>  this.handleFavorites()} className="bookmark-icon"src='./icons/bookmark.svg' alt='bookmark'/>  
    } else {
      icon = <img onClick={() => this.handleRemoveFavorites()} className="bookmark-icon"src='./icons/bookmark.svg' alt='bookmark'/> 
    }
    return (
      <article className="bill-container">
        <div className="top-level-card">
          <p className="bill-id">{billId}</p>
          <p className="chamber">Chamber - House</p>
          <p className="commitees">{committee}</p>
          <p className="sponsor">{sponsor}</p>
          {icon}
        </div>
        <div className="bill-title-container">
          <h4 className="bill-title">{title}</h4>
        </div>
      </article>
    )
  }
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  trackBill: (id, query) => dispatch(trackBill(id, query)), 
  addFavorites: (id) => dispatch(addFavorites(id)), 
  removeFavorites: (id) => dispatch(removeFavorites(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bills)

Bills.propTypes = {
  billId: PropTypes.string, 
  sponsor: PropTypes.string, 
  title: PropTypes.string, 
  committee: PropTypes.string, 
  active: PropTypes.string, 
  lastVote: PropTypes.string
}



