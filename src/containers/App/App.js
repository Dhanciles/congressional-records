import React, { Component } from 'react';
import '../../styles/App.scss';
import { Header } from '../../components/Header/Header'; 
import { LandingPage } from '../../components/LandingPage/LandingPage'; 
import { connect } from 'react-redux';
import { ContentContainer } from '../ContentContainer/ContentContainer'; 


export class App extends Component {
  constructor() {
  super()
}

render() {
    const contentToRender = this.props.selection ?  <ContentContainer /> : <LandingPage />
    return (
      <div className="App">
        <Header />        
        {contentToRender}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  selection: state.selection
})

export default connect(mapStateToProps)(App)


