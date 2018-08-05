import React from 'react';
import '../../containers/Users/style.css';

export default (props) => {
    return(
        <div className='Users-item ' onClick ={() => props.userClick(props.item)} >
            <div>
                <img src={props.item.image} className='iconUser'/>
            </div>
            <div>
                <p>{props.item.name}</p>
            </div>
            <div>
                <p>{props.item.age}</p>
            </div>
            <div>
                <p>{props.item.phone}</p>
            </div>
        </div>
    )
}