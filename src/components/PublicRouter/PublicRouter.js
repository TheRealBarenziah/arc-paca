import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../HomePage/HomePage';
import DashboardPage from '../DashboardPage/DashboardPage';
import CitizenPage from '../CitizenPage/CitizenPage';
import DevelopperPage from '../DevelopperPage/DevelopperPage';
import PublicOfficialPage from '../PublicOfficialPage/PublicOfficialPage';
import AboutPage from '../AboutPage/AboutPage';
import RessourcesPage from '../RessourcesPage/RessourcesPage';

export class Router extends Component {
  render() {
    return (
      <Switch>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/citizen" component={CitizenPage} />
        <Route exact path="/developper" component={DevelopperPage} />
        <Route exact path="/publicofficial" component={PublicOfficialPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/ressources" component={RessourcesPage} />

      </Switch>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router))
