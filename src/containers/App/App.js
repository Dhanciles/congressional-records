import React, { Component } from 'react';
import '../../styles/App.scss';
import { Header } from '../../components/Header/Header'; 
import { LandingPage } from '../../components/LandingPage/LandingPage'; 
import { connect } from 'react-redux';
import  ContentContainer  from '../ContentContainer/ContentContainer'; 
import { Route, Switch } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'



export class App extends Component {
  constructor() {
  super()
}

render() { 
    return (
      <div className="App">
        <Header /> 
        <Switch>
          <Route path='/:selection' render={({match: {params: {selection}}, ...props}) => { 
          return  <ContentContainer tacos={selection} {...props}/>
          }}/>
          <Route  path='/' component={LandingPage}/>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  selection: state.selection, 
  isLoading: state.isLoading
})

export default withRouter(
  connect(mapStateToProps)(App)
  )

App.propTypes = {
  selection: PropTypes.string.isRequired, 
  isLoading: PropTypes.bool
}


