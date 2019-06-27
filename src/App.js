import React, { Component } from 'react';

import AdminTouter from './components/Admin/Router';
import PublicRouter  from './components/Public/Router';

import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {
          !window.location.href.includes('admin') && 
          <PublicRouter />
        }
        {
          window.location.href.includes('admin') &&
          <AdminTouter />
        }
      </div>
    );
  }
}

export default App;
