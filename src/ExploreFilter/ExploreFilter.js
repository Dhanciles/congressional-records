import React, { Component } from 'react'
import  uuid  from 'uuid'
import '../styles/ExploreFilter.scss'
import { checkBaseItemName } from '../helper/helper.js';


export default class ExploreFilter extends Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  toggleMenu = (e) => {
    e.preventDefault()
    this.setState({
      selected: !this.state.selected
    })
  }

  handleClick = (item) => {
    const url = checkBaseItemName(item)
    console.log(url)
  }

  render() {
    let exploreIcon = this.state.selected ? './icons/003-up-arrow.svg' : './icons/002-down-arrow.svg'; 


    const basicExploreItems = ['Recent Votes', 'Recent Bills', 'Upcoming Bills']
    const popularSubjects = ['Immigration', 'Climate', 'Criminal Justice', 'Police Brutality', 'Higher Education', 'Russia', 'Terrorism', 'Crimes Against Women', 'Fires', 'Mental Health', 'Oil and Gas'] 
    
    const basicList = basicExploreItems.map(item => (<li name={item} onClick={() => this.handleClick(item)} key={uuid()} className="basic-item">{item}</li>))

    const popularList = popularSubjects.map(subject => (<li key={uuid()}className="popular-subject">{subject}</li>))

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

