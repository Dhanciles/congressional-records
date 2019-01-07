import React, { Component } from 'react'
// import '../src/styles/ExploreFilter.scss'

export class ExploreFilter extends Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  render() {
    const exploreIcon = this.state.selected ? '..src/icons/up-arrow.svg': '../src/icons/down-arrow.svg'
    const baseExploreItems = ['Recent Votes', 'Recent Bills', 'Upcoming Bills']
    const popularSubjects = ['Immigration', 'Climate', 'Criminal Justice', 'Police Brutality', 'Higher Education', 'Russia', 'Terrorism', 'Crimes Against Women', 'Fires', 'Mental Health', 'Oil and Gas'] 
    const baseList = baseExploreItems.map(item => (<li>{item}</li>))
    const popularList = popularSubjects.map(subject => (<li>{subject}</li>))
    const defaultRender = (
      <div className="explore-menu">
        <h3>Explore</h3>
          <img className="explore-arrow-icon" src={exploreIcon} alt="Down or up arrows used to represent if the Explore menu has been selected."/>
      </div>
    )
    const menuRender = (
      <div className="explore-menu">
        <h3>Explore</h3>
          <img className="explore-arrow-icon" src={exploreIcon} alt="Down or up arrows used to represent if the Explore menu has been selected."/>
        <div className="selected-menu-container">
          <article className="base-list">
            <ul>{baseList}</ul>
          </article>
          <article className="popular-subjects-list">
            <ul>{popularList}</ul>
          </article>
        </div>
      </div>
    )
    if (this.state.selected) {
      return (
      {menuRender}
      )
    } return (
      {defaultRender}
    )
  }
}

