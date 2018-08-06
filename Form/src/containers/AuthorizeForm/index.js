import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

//components & styles
import './style.css';
import Login from '../../components/Forms/Login.js';
import Register from '../../components/Forms/Register.js';
import * as Action from '../../actions/authorizeAction.js';



class RegForm extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      isTabEnable:true,
      login:'',
      password:'',
      confirmPassword:'',
      email:'',
      policy: false,
    }
  }
  onSubmitLogin = (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value;
    this.setState({
      login,
      password,
    })
    this.authorize();
    this.onCancel();
  }
  onSubmitRegister = (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const policy = e.target.policy.value;
    this.setState({
      login,
      password,
      email,
      confirmPassword,
      policy,
    })
    this.onCancel();
  }
  onCancel = () =>{
      this.setState({
      login:'',
      password:'',
      confirmPassword:'',
      email:'',
      policy: false,
    })
    console.log(this.props);
  } 
  OnChange = (e) => {
    const element = e.target.name;
    this.setState({
      [element]:e.target.value,
    })
  }
  onTabClick = ()=>{
    this.setState({isTabEnable:!this.state.isTabEnable});
    this.onCancel();
  }
  authorize = () => {
    let islogin = this.props.userData.filter(item => {
      return (item.name.toLowerCase() === this.state.login.toLowerCase()) && (item.age == this.state.password)
    })
    if (islogin.length != 0 )  this.props.login(islogin[0]);
    /* else Notification */ else console.log('takogo nema')
  }

  render(){
    const {
      login,
      password,
      confirmPassword,
      policy,
      email,
      isTabEnable,
    } = this.state;
    return(
      <div className='Autorisation'>
        <div className ='Autorisation-window'>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-secondary"
              disabled = {isTabEnable}
              onClick = {() => this.onTabClick()}
              >LOGIN</button>
            <button
              type="button"
              className="btn btn-secondary"
              disabled = {!isTabEnable}
              onClick = {() => this.onTabClick()}
              >REGISTER</button>
          </div>
           {
            isTabEnable && 
           <Login 
              OnChange = {this.OnChange}
              onSubmitLogin = {this.onSubmitLogin}
              onCancelLogin = {this.onCancel}
              login = {login}
              password = {password} />
              }
          {
             !isTabEnable && 
             <Register
                OnChange = {this.OnChange}
                onSubmitRegister = {this.onSubmitRegister}
                onCancelRegister = {this.onCancel}
                {...this.state}
             /> 
          }  
        </div>
      </div>
    
    )
  }
}
  
  const mapDispathToProps = (dispatch) => {
    return {
      login: user => dispatch(Action.authorize(user))
    }
  }

  const mapStateToProps = (state) => {
    return {
      userData:state.userData,
      loginUser:state.login,
    }
  }
  export default connect(mapStateToProps,mapDispathToProps)(RegForm)