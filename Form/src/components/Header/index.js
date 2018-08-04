import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import '../../App.css';
import Homepage from '../../containers/Homepage';


export default (props) => {
    const menu = [
        {
            title:'Homepage',
            path:'/'
        },
        {
            title:'About',
            path:'/about',
        },
        {
            title:'Users',
            path:'/users',
        },
        {
            title:'Profile',
            path:'/profile',
        },
        {
            title:'Chat',
            path:'/chat',
        },
    ];
    
    return(
        <div className="App" className="App-header">
            {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to stmh,what looks like a FORUM</h1>
          </header>
        </div> */}
            <img src={logo} className="App-logo" alt="logo" />
            <nav className='btn-group' >
                {menu.map((item,index) => {
                    return( 
                    <Link key={index} to={item.path}><button className='btn btn-dark'>{item.title}</button></Link>
                    )
                })}
            </nav>
        </div>
    )
}