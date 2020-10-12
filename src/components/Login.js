import React, { Component } from 'react';
import {localStorage} from 'local-storage';
import { createBrowserHistory as history} from 'history';
import { Link } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            password:''
        };
    }
    
    handleChange=(event)=>{
         let user=event.target.name;
         let password=event.target.value;
         this.setState({[user]:password});
    }
    handleFormSubmit=()=>{
        const{user,password}=this.state;
        localStorage.setItem('user',user);
        localStorage.setItem('password',password);


    }
    
    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    User:<input type="text" name="user" value={this.state.user} onChange={this.handleChange}  />
                </label>
                <label>
                Password:<input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                {/* <button type="submit" onClick={() => history.push('/Welcome')}>Log In</button> */}
                <Link to="/Welcome">Login</Link>

            </form>

        );
    }
}
export default Login;