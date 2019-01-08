import React, { Compoenent } from 'react'; 
import  uuid  from 'uuid'; 
import '../styles/ContentContainer.scss'; 
import { connect } from 'redux'
import { Bills } from '../Bills/Bills.js'; 

export class ContentContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main className="content-container">
        <article className="search-subject-container">
          <h1>Searched - <span>Government</span></h1>
        </article>
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  data: state.data
})


export default connect(mapStateToProps)(ContentContainer)