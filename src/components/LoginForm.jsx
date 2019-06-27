import React, { Component } from 'react'
import {authAction} from '../store/actions/auth'
import { connect } from 'react-redux';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.authAction({userId: 1, isAdmin: true, username: 'Jh0n_D03', isConnected: true})}
        >Click ME to login as Admin</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  authAction: (userData) => dispatch(authAction(userData))
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
