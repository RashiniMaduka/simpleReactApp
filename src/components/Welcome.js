import React, {Component } from 'react';
import localStorage from 'local-storage';
class Welcome extends Component{
    state={
        user:''
        };
    componentDidMount() {
        const user = localStorage.getItem('user');
         
        this.setState({ user});
      }
      render(){
          return(
          <h1>welcome {this.state.user}</h1>
          )
      }
}
export default Welcome;
