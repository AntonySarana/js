import React from 'react'
import {Link} from 'react-router-dom';

// component - Modul profilya
export default (props) => {
    const {
      image,
      name,
      id,
      age,
      showAuthorizeForm,
    } = props.user;
    return (
      <div className='Profile'>
      {props.user.name && 
        <div >
            <p><img src={image} className='iconUser'/></p>
            <p>{name}</p>
            <p>age-{age}</p>
            <p>id-{id}</p>
        </div>}
        {!props.user.name && 
          <div>
              <Link to='/AuthorizeForm'>
                  <i className="fas fa-lock fa-2x soc-red"></i>
              </Link>
          </div>
        }
      </div>
    )
  }