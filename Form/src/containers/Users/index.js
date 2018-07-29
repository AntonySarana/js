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
        super(props);
        this.state = {
            data: [],
            isActiveUser: false,
            activeUser:{},
            currentPage: 0,
        }
    }
    componentWillMount() {
        fetch(data)
        .then(response => response.json())
        .then(data => {
            this.defaultUsers = data;
            this.setState({
                defaultUsers:[...data],
                data,
                currentPage: 0,
                isActiveUser : false,
            })
        })
    }
    showPage = () =>{
        const {
            currentPage,
            data
        } = this.state;
        const end = data[currentPage * 15 + 15];
        console.log(Math.ceil(data.length/15));
        if (end)  return data && data.slice(currentPage * 15, currentPage * 15 + 15)
        else return data && data.slice(currentPage * 15);
        
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
    pagination = (move) => {
        const currentPage = this.state.currentPage + (move);
        this.setState({
            currentPage: this.state.currentPage+move,
        })
    }
    render(){
        const page = this.showPage();
        const {
            data,
            activeUser,
            isActiveUser,
            currentPage,
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
                        page.map((item,index) => {
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
                <div className='btn-group'>
                    {currentPage > 0 && <button
                        className='btn btn-dark'
                        onClick = {() => this.pagination(-1)}
                        >prev</button>}
                    <button disabled className='btn btn-dark'>{currentPage+1}</button>
                    {currentPage < (Math.ceil(data.length/15)-1) && <button
                        className='btn btn-dark'
                        onClick = {() => this.pagination(1)}
                        >next</button>}
                </div>
                {isActiveUser && <ActiveUser user={activeUser} activeUserClos={this.activeUserClos}/>}
            </React.Fragment>
        )
    }
}