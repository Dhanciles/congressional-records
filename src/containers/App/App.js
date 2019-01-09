import React, { Component } from 'react';
import '../../styles/App.scss';
import { Header } from '../../components/Header/Header'; 
import { LandingPage } from '../../components/LandingPage/LandingPage'; 
import { connect } from 'react-redux';
import { ContentContainer } from '../ContentContainer/ContentContainer'; 
import { Route, Switch } from 'react-router-dom'


export class App extends Component {
  constructor() {
  super()
}

render() {
  const { path } = this.props.selection
    return (
      <div className="App">
        <Header /> 
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path={`${path}`} render={() => <ContentContainer location ={`/${path}`}/>}/>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  selection: state.selection, 
  isLoading: state.isLoading
})

export default connect(mapStateToProps)(App)


