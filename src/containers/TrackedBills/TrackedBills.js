import React, { Component } from 'react'
import  uuid  from 'uuid'; 
import Bills  from '../../components/Bills/Bills.js'; 
import { LandingPage } from '../../components/LandingPage/LandingPage';
import '../../styles/ContentContainer.scss'; 
import { connect } from 'react-redux'; 


export class TrackedBills extends Component {
  constructor() {
    super()
  }

  render() {
    let contentToRender

    if (this.props.favorites.length > 0 && this.props.location === '/favorites') { 
      contentToRender = this.props.favorites.map(bill =>  (<Bills key={uuid()} bill={bill}/>))
    } else {
      contentToRender = (<h1>No Favorites</h1>)
    }  
    return (
      <main className="content-container">
           <div className="inner-content-container">
            {contentToRender}
          </div>
        </main>
      ) 
  }
}


export const mapStateToProps = (state) => ({
  favorites: state.favorites
})

export default connect(mapStateToProps)(TrackedBills)