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
            isSorted:'',
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
        
        if (end)  return data && data.slice(currentPage * 15, currentPage * 15 + 15)
        else return data && data.slice(currentPage * 15);
        
    }

    userSort = (e) => {
        const config = e.target.name
        let sortMass = this.state.data;
        let sorted;
        if (this.state.isSorted == config) {
            sorted = sortMass.sort((a,b) => {
            return a[config] < b[config] ? 1: -1})
            this.setState({
                isSorted : '',
            })
        }
        
        else {
            sorted = sortMass.sort((a,b) => {
            return a[config] > b[config] ? 1: -1})
            this.setState({
                isSorted : config,
            })   
        };
        this.setState({
            data: sorted,
        })
    }

    userClick = (activeUser) => {
        this.setState({
            isActiveUser:true,
            activeUser,
        })
        
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
                            <button
                                className = 'btn btn-secondary'
                                name = 'id' 
                                onClick = {(e) => this.userSort(e)}
                                >Avatar
                            </button>
                        </div>
                        <div>
                            <button
                                className = 'btn btn-secondary'
                                name = 'name' 
                                onClick = {(e) => this.userSort(e)}
                                > Name
                            </button>
                        </div>
                        <div>
                            <button
                                className = 'btn btn-secondary'
                                name = 'age' 
                                onClick = {(e) => this.userSort(e)}
                                >Age
                            </button>
                        </div>
                        <div>
                            <button
                                className = 'btn btn-secondary'
                                name = 'phone' 
                                onClick = {(e) => this.userSort(e)}
                                >Phone
                            </button>
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
                <div className='btn-group pagination'>
                    <button
                        disabled = {currentPage > 0 ? false : true}
                        className = 'btn btn-dark'
                        onClick = {() => this.pagination(-1)}
                        >prev</button>
                    <button disabled className='btn btn-dark'>{currentPage+1}</button>
                    <button
                        disabled = {currentPage < (Math.ceil(data.length/15)-1) ? false: true }
                        className='btn btn-dark'
                        onClick = {() => this.pagination(1)}
                        >next</button>
                </div>
                {isActiveUser && <ActiveUser user={activeUser} activeUserClos={this.activeUserClos}/>}
            </React.Fragment>
        )
    }
}