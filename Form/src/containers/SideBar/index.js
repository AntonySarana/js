// isxodnie dannie
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

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
export default class App extends React.Component{
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
        <Profile user = {this.state.userProfile} />
        <Timing date={date}/> 
        <i
          class="fas fa-bars fa-2x"
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
    isLog,name,countNewMessage
  } = props.user;
  return (
    <div className='Profile'>
    {isLog && 
    <div className='Profile'>
          <p>icon</p>
          <p>{name}</p>
          <p>{isLog}</p>
          <p>{countNewMessage}</p>
        </div>}
      {!isLog && 
        <div>
         <i class="fas fa-lock fa-2x soc-red"></i>
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