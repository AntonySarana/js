// -  REACT
import React from 'react';

// -  Data,Styles, etc..
import data from '../../data.txt';
import '../../assets/style.css';

// -  Components
import UsersItem from '../../components/UsersItem';
import ActiveUser from '../../components/ActiveUser';


export default class Users extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isActiveUser: false,
            activeUser:{},
        }
    }
    componentWillMount() {
        fetch(data)
        .then(response => response.json())
        .then(data => {
            this.defaultUsers = [...data];
            this.setState({
                data,
                isActiveUser : false,
            })

        })
    }
    userClick = (activeUser) => {
        this.setState({
            isActiveUser:true,
            activeUser,
        })
        console.log(this.state.activeUser);
    }
    activeUserClos = () =>{
        this.setState({
            isActiveUser:false,
        })
    }
    render(){
        const {
            data,
            activeUser,
            isActiveUser,
        } = this.state;
        return(
            <React.Fragment>
                <div className='Users'>
                    <div className='Users-header'>
                        <div>
                            <p>Avatar</p>
                        </div>
                        <div>
                            <p>Name</p>
                        </div>
                        <div>
                            <p>Age</p>
                        </div>
                        <div>
                            <p>Phone</p>
                        </div>
                        
                    </div>
                    {
                        data.map((item,index) => {
                            return(
                                <UsersItem 
                                item={item} 
                                key={index} 
                                userClick={(user)=>this.userClick(user)} 
                                />
                            )
                        })
                    }
                </div>
                {isActiveUser && <ActiveUser user={activeUser} activeUserClos={this.activeUserClos}/>}
            </React.Fragment>
        )
    }
}