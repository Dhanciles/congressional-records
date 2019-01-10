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

  componentDidMount() {
    const { bill, favorites } = this.props
    favorites.filter(favorite => favorite.billId === bill.billId).length
      ? this.setState({ selected: !this.state.selected }) 
      : this.setState({ selected: false })  
  }

  handleFavorites = () => {
    const { addFavorites, favorites, bill, removeFavorites } = this.props
    favorites.filter(favorite => favorite.billId === bill.billId).length
      ? removeFavorites(bill) 
      : addFavorites(bill)
  }

  render() {
    const { billId, sponsor, title, committee } =  this.props.bill
    const icon = <img onClick={this.handleFavorites} className="bookmark-icon" src='./icons/bookmark.svg' alt='bookmark'/> 
    const color = this.state.selected ? 'tracked-bill-container'  : 'bill-container'
   
    return (
      <article className={color}>
          <div className="who-container">
            <div className="bill-id-container">
              <p className="bill-id">{billId}</p>
            </div>
            <div className="chamber-container">
              <p className="chamber">Chamber - House</p>
            </div>
            <div className="committees-container">
              <p className="committees">{committee}</p>
            </div> 
            <div className="sponsor-container">
              <p className="sponsor">{sponsor}</p> 
            </div>
          </div>
        <div className="details-container">
          <div className="icon-container">
            {icon}
          </div>  
          <div className="bill-title-container">
            <h4 className="bill-title">{title}</h4>
          </div> 
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



