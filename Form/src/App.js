import React, { Component } from 'react';
import {BrowserRouter as Router,Route,BrowserHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import { createConnect } from 'react-redux/lib/connect/connect';




//
import './App.css';
import data from './data.txt';
import * as actionInit from './actions/stateInitAction';
// components
import Homepage from './containers/Homepage';
import About from './containers/About';
import Users from './containers/Users';
import Profile from './containers/Profile';
import Chat from './containers/Chat';
import Head from './components/Header';
import SideBar from './containers/SideBar';
import AuthorizeFrom from './containers/AuthorizeForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data:[],
    }
  }
  componentWillMount(){
    fetch(data)
    .then(response =>response.json())
    .then(data => 
      this.setState({
        data,
      })
    )
  }
  componentDidUpdate(){
    const data = this.state.data;
    this.props.userData(data);
  }
  render() {
    
    return (
      <React.Fragment>
        <Router >
          <div>
            <Head />
            <SideBar />
            <Route path = '/' component = {Homepage} strict  exact  />
            <Route path = '/about' component = {About} />
            <Route path = '/users' component = {Users} />
            <Route path = '/profile' component = {Profile} />
            <Route path = '/chat' component = {Chat} />
            <Route path = '/AuthorizeForm' component = {AuthorizeFrom} />
          </div>
        </Router>
        
      </React.Fragment>
    );
  }
}

/* const mapStateToProps = (store) =>{
  return {
    data: store,
  }
} */
const mapDispatchToProps = (dispatch) => {
  return{
    userData : userdata => dispatch(actionInit.stateInit(userdata)), // pole propsa:argument funkcii => telo funkcii
  }
}

export default connect(null,mapDispatchToProps)(App)
