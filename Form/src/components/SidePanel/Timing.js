import React from 'react'

// modul vremeni
export default  (props) => {
    const date = new Date();
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