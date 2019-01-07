import React, { Component } from 'react'
import { uuid } from 'uuid'
import '../styles/ExploreFilter.scss'

export default class ExploreFilter extends Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  render() {
    let exploreIcon = this.state.selected ? './icons/002-up-arrow.svg' : './icons/001-down-arrow.svg'; 


    const basicExploreItems = ['Recent Votes', 'Recent Bills', 'Upcoming Bills']
    const popularSubjects = ['Immigration', 'Climate', 'Criminal Justice', 'Police Brutality', 'Higher Education', 'Russia', 'Terrorism', 'Crimes Against Women', 'Fires', 'Mental Health', 'Oil and Gas'] 
    
    const basicList = basicExploreItems.map(item => (<li key={uuid} className="basic-item">{item}</li>))
    const popularList = popularSubjects.map(subject => (<li className="popular-subject">{subject}</li>))

    const defaultRender = (
      <div className="explore-menu">
        <div className="container">
          <h3>Explore</h3>
          <img className="explore-arrow-icon" src={exploreIcon} alt='arrow down'/>
        </div>
      </div>
    )

    const menuRender = (
      <div className="explore-menu">
        <div className="container">
          <h3>Explore</h3>
          <img className="explore-arrow-icon" src={exploreIcon} alt='arrow down'/>
        </div> 
        <div className="selected-menu-container">
          <article className="base-list">
            <ul>{basicList}</ul>
          </article>
          <article className="popular-subjects-list">
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

