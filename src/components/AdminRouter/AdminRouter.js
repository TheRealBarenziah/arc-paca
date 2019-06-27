import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import Profile from '../Profile';

export class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/admin" component={Profile} />
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
