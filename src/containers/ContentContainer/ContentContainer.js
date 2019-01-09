import React, { Component } from 'react'; 
import  uuid  from 'uuid'; 
import '../../styles/ContentContainer.scss'; 
import { connect } from 'react-redux'; 
import { Bills }  from '../../components/Bills/Bills.js'; 
import { LandingPage } from '../../components/LandingPage/LandingPage';
import { queryCheck } from '../../helper/helper.js';
import { setFilter } from '../../actions/index.js'; 
import { fetchData } from '../../thunks/fetchData.js'; 
import { withRouter } from "react-router-dom";




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
            <LandingPage />
        )
    } else {
    const renderedBills = this.dataFromProps().map(item => (<Bills key={uuid()} {...item}/>))
     return (
      <main className="content-container">
        <article className="search-subject-container">
          <h1>Searched - <span>{this.props.selection}</span></h1>
        </article>
          {renderedBills}  
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



export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContentContainer)
  )