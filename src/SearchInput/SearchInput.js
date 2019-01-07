import React, { Component } from 'react'
import '../styles/SearchInput.scss'


export default class SearchInput extends Component {
  constructor() {
    super()
    this.state = {
      subject:  ''
    }
  }
  
  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      subject: value
    })
  }

  handleSubmit = () => {
    this.setState({
      subject: ''
    })
  }

  render() {
    const searchIcon = '../icons/search.svg'
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}type="text" name="search" value={this.state.subject} placeholder="Search"/>
        <img className="search-icon" src={ searchIcon } alt='magnifying glass'/>
      </form>
    )
  }
}