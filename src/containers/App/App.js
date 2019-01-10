import React, { Component } from 'react';
import '../../styles/App.scss';
import { Header } from '../../components/Header/Header'; 
import { LandingPage } from '../../components/LandingPage/LandingPage'; 
import { connect } from 'react-redux';
import  ContentContainer  from '../ContentContainer/ContentContainer'; 
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import TrackedBills  from '../TrackedBills/TrackedBills';



export class App extends Component {
  constructor() {
  super()
}

render() {
  if (this.props.redirect) {
    this.props.changeRedirect(false);
    return <Redirect to={`/${this.props.selection}`}/>
  }
    return (
      <div className="App">
        <Header /> 
        <Switch>
          <Route exact path='/favorites' render={() => <TrackedBills location='/favorites'/>}/>
          <Route exact path='/:selection' render={({match: {params: {selection}}, ...props}) => { 
          return  <ContentContainer tacos={selection} {...props} favorites={false}/>
          }}/>
          <Route  exact path='/' component={LandingPage}/>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  selection: state.selection, 
  isLoading: state.isLoading, 
  redirect: state.redirect, 
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  changeRedirect: (bool) => dispatch({ type: 'REDIRECT', redirect: bool})
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
  )

App.propTypes = {
  selection: PropTypes.string.isRequired, 
  isLoading: PropTypes.bool
}


