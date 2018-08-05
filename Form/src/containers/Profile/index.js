import React from 'react';
import {connect} from 'react-redux';
import './style.css';


 class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogin:false,

        }
    }
    render() {
        const {
            image,
            name,
            age,
            phrase,
            phone,
            id,
        } = this.props.loginUser;
        console.log(this.props);
        return(
            <div className='Profile'>
                {!name && 
                    <div className= 'Profile__noUser'>
                        <h2>
                            Autorize, plz
                        </h2>
                    </div>
                }
                {name && 
                    <div className = 'Profile__user' >
                        <div className='Profile__header'>
                            <div className='Profile__img'><img src={image} /></div>
                            <h3>{name}</h3>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <p className='Profile__title'>Id</p>
                            </div> 
                            <div className='col-lg-8'>
                                <p>{id}</p>
                            </div> 
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <p className='Profile__title'>age</p>
                            </div> 
                            <div className='col-lg-8'>
                                <p>{age}</p>
                            </div> 
                        </div><div className='row'>
                            <div className='col-lg-4'>
                                <p className='Profile__title'>Phone</p>
                            </div> 
                            <div className='col-lg-8'>
                                <p>{phone}</p>
                            </div> 
                        </div><div className='row'>
                            <div className='col-lg-4'>
                                <p className='Profile__title'>Phrase</p>
                            </div> 
                            <div className='col-lg-8'>
                                <p>{phrase}</p>
                            </div> 
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginUser : state.login
    }
}

export default connect(mapStateToProps)(Profile)