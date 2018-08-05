import React from 'react';
import '../../containers/Users/style.css';

export default (props) => {
    const {
        name,
        image,
        id,
        phrase,
        age,
        phone,
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
                    <p>Phrase: {phrase}</p>
                </div>
                {console.log( props.loginUser)}
                
                { props.loginUser.id && <div className='ActiveUser-Card-active'>
                    { props.loginUser.id === id && <p>Here we are!</p>}
                    { !(props.loginUser.id === id) &&
                    <div><button>Message</button>
                    <button>Report</button></div>}
                </div>} 
                
            </div>
        </div>
    )
}