import React, { Component } from 'react'
import '../styles/SearchInput.scss'
import { connect } from 'react-redux';
import { fetchData } from '../thunks/fetchData.js'; 

export class SearchInput extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault()
    const { subject } = this.state
    const url = `https://api.propublica.org/congress/v1/bills/subjects/${subject}.json`
    await this.props.fetchData(url, subject)
  }

  render() {
    const { subject } = this.state
    const searchIcon = './icons/001-search.svg'
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}type="text" name="search" value={subject} placeholder="Search"/>
        <img className="search-icon" src={searchIcon} alt='magnifying glass'/>
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchData: (url, query) => dispatch(fetchData(url, query))
})

export default connect(null, mapDispatchToProps)(SearchInput)