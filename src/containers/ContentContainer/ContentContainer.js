import React, { Component } from 'react'; 
import  uuid  from 'uuid'; 
import '../../styles/ContentContainer.scss'; 
import { connect } from 'react-redux'; 
import Bills  from '../../components/Bills/Bills.js'; 
import { LandingPage } from '../../components/LandingPage/LandingPage';
import { queryCheck } from '../../helper/helper.js';
import { setFilter } from '../../actions/index.js'; 
import { fetchData } from '../../thunks/fetchData.js'; 
import PropTypes from 'prop-types'

export class ContentContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {   
    this.handlePopularListSelection(this.props.tacos)
  }

  handlePopularListSelection = async (subject) => {
    const newSubject = queryCheck(subject)
    this.props.updateSelection(newSubject)
    const url = `https://api.propublica.org/congress/v1/bills/subjects/${newSubject}.json`
    await this.props.fetchData(url, newSubject)
  } 
  
  dataFromProps = () => this.props.data[queryCheck(this.props.tacos)] || []

  render() {  
    if (this.props.loading) {
        return (
            <div className="loading-container">
              <div className="logo-container">
                <img className="logo"src='./icons/congress.svg' alt='capitol building'/>
              </div>
              <h1>Loading...</h1>
            </div>
        )
    } else {
    const renderedBills = this.dataFromProps().map(bill => (<Bills key={uuid()} bill={bill}/>))
     return (
      <main className="content-container">
        <article className="search-subject-container">
          <h1>Searched - <span>{this.props.selection}</span></h1>
        </article>
        <div className="inner-content-container">
          {renderedBills}
        </div>
      </main>
    )

    }
    
  }
}

export const mapStateToProps = (state) => ({
  data: state.data, 
  error: state.error,
  loading: state.loading, 
  selection: state.selection
})

export const mapDispatchToProps = (dispatch) => ({
  fetchData: (url, query) => dispatch(fetchData(url, query)), 
  updateSelection: (selection) => dispatch(setFilter(selection))
})



export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)
  

ContentContainer.propTypes = {
  data: PropTypes.object, 
  error: PropTypes.bool, 
  loading: PropTypes.bool, 
  selection: PropTypes.string, 
  fetchData: PropTypes.func.isRequired, 
  updateSelection: PropTypes.func.isRequired
}