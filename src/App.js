import React, { Component } from 'react';

import AdminRouter from './components/AdminRouter/AdminRouter';
import PublicRouter  from './components/PublicRouter/PublicRouter';

import './App.css';
import NavBar from './components/HomePage/Navbar/NavBar';


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <NavBar />
        {
          !window.location.href.includes('admin') && 
          <PublicRouter />
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
