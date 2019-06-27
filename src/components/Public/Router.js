import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import LoginForm from '../LoginForm';

export class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={LoginForm} />
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
