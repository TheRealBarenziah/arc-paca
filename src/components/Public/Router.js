import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from '../LoginForm';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Citizen from '../Citizen/Citizen';
import Developper from '../Developper/Developper';
import PublicOfficial from '../PublicOfficial/PublicOfficial';
import About from '../About/About';
import Ressources from '../Ressources/Ressources';

export class Router extends Component {
  render() {
    return (
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/citizen" component={Citizen} />
        <Route exact path="/developper" component={Developper} />
        <Route exact path="/publicofficial" component={PublicOfficial} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ressources" component={Ressources} />

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
