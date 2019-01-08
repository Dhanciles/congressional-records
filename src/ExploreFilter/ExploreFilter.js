import React, { Component } from 'react'
import  uuid  from 'uuid'
import '../styles/ExploreFilter.scss'
import { checkBaseItemName } from '../helper/helper.js';
import { connect } from 'react-redux';
import { fetchData } from '../thunks/fetchData.js'; 
import { queryCheck } from '../helper/helper.js';

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
    const url = checkBaseItemName(item)
    this.props.fetchData(url, item)
    this.toggleMenu()
  }

  handlePopularListSelection = (subject) => {
    debugger; 
    const newSubject = queryCheck(subject)
    const url = `https://api.propublica.org/congress/v1/bills/subjects/${newSubject}.json`
    this.props.fetchData(url, newSubject)
  } 

  render() {
    let exploreIcon = this.state.selected ? './icons/003-up-arrow.svg' : './icons/002-down-arrow.svg'; 


    const basicExploreItems = ['Recent Votes', 'Recent Bills', 'Upcoming Bills']
    const popularSubjects = ['Immigration', 'Climate', 'Criminal Justice', 'Police Brutality', 'Higher Education', 'Russia', 'Terrorism', 'Crimes Against Women', 'Fires', 'Mental Health', 'Oil and Gas'] 
    
    const basicList = basicExploreItems.map(item => (<li name={item} onClick={() => this.handleBasicListSelection(item)} key={uuid()} className="basic-item">{item}</li>))

    const popularList = popularSubjects.map(subject => (<li onClick={() => this.handlePopularListSelection(subject)} name={subject} key={uuid()}className="popular-subject">{subject}</li>))

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
  fetchData: (url, query) => dispatch(fetchData(url, query))
})

export default connect(null, mapDispatchToProps)(ExploreFilter)