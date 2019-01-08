import React, { Component } from 'react'; 
import  uuid  from 'uuid'; 
import '../../styles/ContentContainer.scss'; 
import { connect } from 'react-redux'; 
import { Bills } from '../../components/Bills/Bills.js'; 


export class ContentContainer extends Component {
  constructor(props) {
    super(props)
  }
  

  render() {
    let bills;
     if(this.props.data) {
      bills = this.props.data.map(item => <Bills key={uuid()} {...item}/>)
     }
      
    return (
      <main className="content-container">
        <article className="search-subject-container">
          <h1>Searched - <span>{this.props.selection}</span></h1>
        </article>
        { this.props.data && 
          {bills} 
        } 
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  data: state.data[state.selection], 
  error: state.error,
  loading: state.loading, 
  selection: state.selection
})



export default connect(mapStateToProps)(ContentContainer)