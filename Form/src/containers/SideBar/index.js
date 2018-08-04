// isxodnie dannie
import React from 'react';
import './style.css';
import connect from 'react-redux/lib/connect/connect';

const date = new Date();
const societys = [ 
  {
  title: "fab fa-twitter soc-lightblue",
  path:'https://twitter.com',
  },
  {
    title: "fab fa-telegram soc-blue",
    path:'https://telegram.org',
    },
  {
    title: "fab fa-viber soc-purple",
    path:'https://www.viber.com/ru/',
  },
  {
    title: "fab fa-instagram soc-purple",
    path:'https://www.instagram.com/',
  },
  {
    title: "fab fa-facebook soc-blue",
    path:'https://www.facebook.com',
  },
];
var user = {
  isLog: false,
  name: 'Vasya',
  message: '',
  countNewMessage: 0,
  letter: '',
  countNewLetter:0,
}


// basoviy container SidePanel
class SideBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userProfile : user,
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

// component - Modul profilya
function Profile (props) {
  const {
    image,name,id,age
  } = props.user;
  return (
    <div className='Profile'>
    {props.user.name && 
    <div className='Profile'>
          <p><img src={image} className='iconUser'/></p>
          <p>{name}</p>
          <p>age-{age}</p>
          <p>id-{id}</p>
        </div>}
      {!props.user && 
        <div>
         <i className="fas fa-lock fa-2x soc-red"></i>
        </div>
      }
    </div>
  )
}
// modul vremeni
function Timing (props) {
  return (
      <div className='time'>
          <p className='time_hm'>
           {date.getHours()}:
           {date.getMinutes()}
          </p>
          <p className='time_date'>
            {date.getDate()}:
            {date.getMonth()}:
            {date.getFullYear()}
          </p>
          
        </div>
  )
}
// modul vipadaushego menu
function DropMenu (props) {
  return (
    <div className='dropMenu'>
      {societys.map(item =>{
        return(
        <p><a href={item.path}><i className={`${item.title} fa-2x`}></i></a></p>)
      })}
    </div>
    
  )
}

const mapStateToProps = (state) =>{
  return {
    loginUser:state.login,
  }
}
export default connect(mapStateToProps)(SideBar)