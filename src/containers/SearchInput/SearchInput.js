import React, { Component } from 'react'
import '../../styles/SearchInput.scss'
import { connect } from 'react-redux';
import { fetchData } from '../../thunks/fetchData.js'; 
import { queryCheck } from '../../helper/helper.js';
import { setFilter } from '../../actions/index.js'; 


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

  handleSubmit =  async (e) => {
    e.preventDefault()
    const { subject } = this.state
    this.props.updateSelection(subject)
    const newSubject = queryCheck(subject)
    const url = `https://api.propublica.org/congress/v1/bills/subjects/${newSubject}.json`
    await this.props.fetchData(url, newSubject)
    this.setState({
      subject: ''
    })
  }

  render() {
    const { subject } = this.state
    const searchIcon = './icons/001-search.svg'
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input onChange={this.handleChange}type="text" name="search" value={subject} placeholder="Search"/>
        <img className="search-icon" src={searchIcon} alt='magnifying glass'/>
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchData: (url, query) => dispatch(fetchData(url, query)),
  updateSelection: (selection) => dispatch(setFilter(selection))
})

export default connect(null, mapDispatchToProps)(SearchInput)