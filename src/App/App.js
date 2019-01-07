import React, { Component } from 'react';
import '../styles/App.scss';
import { Header } from '../Header/Header'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}


