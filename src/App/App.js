import React, { Component } from 'react';
import '../styles/App.scss';
import { Header } from '../Header/Header'; 
import { LandingPage } from '../LandingPage/LandingPage'; 

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />        
        <LandingPage />
      </div>
    );
  }
}




