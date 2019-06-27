import React, { Component } from 'react';

import AdminRouter from './components/AdminRouter/AdminRouter';
// import PublicRouter  from './components/PublicRouter/PublicRouter';
import AboutPage from './components/AboutPage/AboutPage';

import './App.css';


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {
          !window.location.href.includes('admin') && 
          <AboutPage />
        }
        {
          window.location.href.includes('admin') &&
          <AdminRouter />
        }
      </div>
    );
  }
}

export default App;
