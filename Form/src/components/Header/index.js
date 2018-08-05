import React from 'react';
import {NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import './style.css';
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
        <div className="Header" >
            <div className = 'header-logo'>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='btn-group-toggle' >
                {menu.map((item,index) => {
                    return( 
                    <NavLink  
                        key={index} 
                        to={item.path}
                        activeClassName='active-button'>
                            <button className='btn btn-outline-secondary'>
                                {item.title}
                            </button>
                    </NavLink >
                    )
                })}
            </div>
        </div>
    )
}