import React, { Component } from 'react'
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    console.log("props from Profile.jsx :", this.props)
    return (
      <div>
        <h1>Hello Global Props</h1>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

