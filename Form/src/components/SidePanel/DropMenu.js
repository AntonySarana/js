import React from 'react'

// modul vipadaushego menu
export default (props) =>{
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
    return (
      <div className='dropMenu'>
        {societys.map(item =>{
          return(
          <p><a href={item.path}><i className={`${item.title} fa-2x`}></i></a></p>)
        })}
      </div>
      
    )
  }