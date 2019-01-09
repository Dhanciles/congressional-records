import React, { Component } from 'react'
import '../../styles/SearchInput.scss'
import { connect } from 'react-redux';
import { fetchData } from '../../thunks/fetchData.js'; 
import { queryCheck } from '../../helper/helper.js';
import { setFilter } from '../../actions/index.js'; 
import PropTypes from 'prop-types'; 
import { Redirect, withRouter } from 'react-router-dom'; 

export class SearchInput extends Component {
  constructor() {
    super()
    this.state = {
      subject:  '',
      match: false
    }
  }

  redirectUser = (text) => {
    const { subject} = this.state 
    if (text === subject) {
      return <Redirect to='/subject'/>
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
    this.props.changeRedirect(true);
    // this.redirectUser(subject)
    this.props.history.push(`/${subject}`);
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
        <input onChange={this.handleChange}type="text" name="search" className="search-input" value={subject} placeholder="Search"/>
        <img className="search-icon" src={searchIcon} alt='magnifying glass'/>
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchData: (url, query) => dispatch(fetchData(url, query)),
  updateSelection: (selection) => dispatch(setFilter(selection)),
  changeRedirect: (bool) => dispatch({type: 'REDIRECT', redirect: bool}),
})

export default withRouter(connect(null, mapDispatchToProps)(SearchInput))

SearchInput.propTypes = {
  fetchData: PropTypes.func.isRequired, 
  updateSelection: PropTypes.func
}