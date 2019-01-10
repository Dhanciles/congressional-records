import React, { Component } from 'react'; 
import '../../styles/Bills.scss'; 
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { trackBill, addFavorites, removeFavorites } from '../../actions/index.js'; 

export class Bills extends Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  handleFavorites = () => {
    const { addFavorites, favorites, bill, removeFavorites } = this.props
    favorites.filter(favorite => favorite.billId === bill.billId).length
      ? removeFavorites(bill) 
      : addFavorites(bill)
  }

  render() {
    const { billId, sponsor, title, lastVote, committee, query } =  this.props.bill
    const icon = <img onClick={this.handleFavorites} className="bookmark-icon" src='./icons/bookmark.svg' alt='bookmark'/>   
   
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
  addFavorites: (bill) => dispatch(addFavorites(bill)), 
  removeFavorites: (bill) => dispatch(removeFavorites(bill))
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



