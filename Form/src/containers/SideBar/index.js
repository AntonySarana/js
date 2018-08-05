// isxodnie dannie
import React from 'react';
import './sidebar.css';
import connect from 'react-redux/lib/connect/connect';
import {link} from 'react-redux';

//components
import AuthorizeForm from '../AuthorizeForm';
import Timing from '../../components/SidePanel/Timing';
import Profile from '../../components/SidePanel/Profile';
import DropMenu from '../../components/SidePanel/DropMenu';


const date = new Date();

// basoviy container SidePanel
class SideBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userProfile : {},
      isSideMenuOpen : false,
    }
  }

  render(){
    return(
    <div className= 'sideBar'>
        <Profile 
          user = {this.props.loginUser}
          />
        <Timing date={date}/> 
        <i
          className="fas fa-bars fa-2x"
          onClick = {() =>
            this.setState ({
            isSideMenuOpen : !this.state.isSideMenuOpen,
          })}> </i>
        {this.state.isSideMenuOpen && <DropMenu/>}
    </div>
    )
  }
}






const mapStateToProps = (state) =>{
  return {
    loginUser:state.login,
  }
}
export default connect(mapStateToProps)(SideBar)