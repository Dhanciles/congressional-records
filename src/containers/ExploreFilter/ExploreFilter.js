import React, { Component } from 'react'
import  uuid  from 'uuid'
import '../../styles/ExploreFilter.scss'
import { checkBaseItemName } from '../../helper/helper.js';
import { connect } from 'react-redux';
import { fetchData } from '../../thunks/fetchData.js'; 
import { queryCheck } from '../../helper/helper.js';
import { setFilter } from '../../actions/index.js'; 
import { NavLink } from 'react-router-dom'; 
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'

export class ExploreFilter extends Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  toggleMenu = () => {
    this.setState({
      selected: !this.state.selected
    })
  }

  handleBasicListSelection = (item) => {
    this.props.updateSelection(item)
    const url = checkBaseItemName(item)
    this.props.fetchData(url, item)
    this.toggleMenu()
  }

  
  render() {
    let exploreIcon = this.state.selected ? './icons/003-up-arrow.svg' : './icons/002-down-arrow.svg'; 


    const basicExploreItems = ['Recent Votes', 'Recent Bills', 'Upcoming Bills']
    const popularSubjects = ['Immigration', 'Climate', 'Criminal Justice', 'Police Brutality', 'Higher Education', 'Russia', 'Terrorism', 'Crimes Against Women', 'Fires', 'Mental Health', 'Oil and Gas'] 
    
    const basicList = basicExploreItems.map(item => (<NavLink key={uuid()} to={item}><li name={item} key={uuid()} className="basic-item">{item}</li></NavLink>))

    const popularList = popularSubjects.map(subject => (<NavLink key={uuid()} to={subject}><li name={subject}  className="popular-subject">{subject}</li></NavLink>))

    const defaultRender = (
      <div className="explore-menu">
        <div className="container">
          <h3 onClick={this.toggleMenu}>Explore</h3>
          <img className="explore-arrow-icon" src={exploreIcon} alt='arrow down'/>
        </div>
      </div>
    )

    const menuRender = (
      <div className="explore-menu">
        <div className="container">
          <h3 onClick={this.toggleMenu}>Explore</h3>
          <img className="explore-arrow-icon" src={exploreIcon} alt='arrow down'/>
        </div> 
        <div className="selected-menu-container">
          <article className="base-list">
            <ul>{basicList}</ul>
          </article>
          <article className="popular-subjects-list">
            <h3 className="popular  -subject-title">Popular Subjects</h3>
            <ul>{popularList}</ul>
          </article>
        </div>
      </div>
    )
    const componentToRender = this.state.selected ? menuRender : defaultRender
      return (
        componentToRender
      )
  }
}


export const mapDispatchToProps = (dispatch) => ({
  fetchData: (url, query) => dispatch(fetchData(url, query)), 
  updateSelection: (selection) => dispatch(setFilter(selection))
})

export default withRouter(
  connect(null, mapDispatchToProps)(ExploreFilter)
)

ExploreFilter.propTypes = {
  fetchData: PropTypes.func.isRequired, 
  updateSelection: PropTypes.func.isRequired
}

