import React from 'react';
import '../../assets/style.css';

export default (props) => {
    const {
        name,
        image,
        id,
        phrase,
        age,
        phone
    } = props.user
    return (

        <div className='ActiveUser'>
        
            <div className='ActiveUser-Card'>
                <h3 className='ActiveUserClose' onClick={props.activeUserClos}>X</h3>
                <div className='ActiveUser-Card-Header'>
                    <img src={image} className='iconUser' />
                    <p>{name}</p>
                </div>
                <div className='ActiveUser-Card-info'>
                    <p>ID: {id}</p>
                    <p>Age: {age}</p>
                    <p>Phone: {phone}</p>
                    <p>Phrase: <i>{phrase}</i></p>
                </div>
               {/*  esli avtorizirovan
                { props.isAutorized && <div className='ActiveUser-Card-active'>
                    <button>Message</button>
                    <button>Report</button>
                </div>} */}
                
            </div>
        </div>
    )
}