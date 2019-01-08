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
    return (
      <div className="App">
        <Header />       
        <LandingPage />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading
})

export default connect(mapStateToProps)(App)


