import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Homepage from './containers/Homepage';
import About from './containers/About';
import Users from './containers/Users';
import Profile from './containers/Profile';
import Chat from './containers/Chat';
import Head from './components/Header';
import SideBar from './containers/SideBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Head />
            <SideBar />
            <Route path = '/' component = {Homepage} exact = {true} />
            <Route path = '/about' component = {About} />
            <Route path = '/users' component = {Users} />
            <Route path = '/profile' component = {Profile} />
            <Route path = '/chat' component = {Chat} />
          </div>
        </Router>
        
      </React.Fragment>
    );
  }
}

export default App;
