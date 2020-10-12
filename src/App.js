import React,{Component} from 'react';
import { BrowserRouter, Route, Switch ,Router,Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { Divider } from 'material-ui';
 
 



class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
        {/* <ul>
          <li>
            <Link to ="/Login"></Link>
          </li>
          <li>
            <Link to="/Welcome"></Link>
          </li>
        </ul> */}
        <Switch>
          <Route exact path="/" component={Login}/> 
          <Route exact path="/Welcome" component={Welcome}/>
        </Switch>
        </BrowserRouter>

      </div>
     
    );
  }
}

export default App;
    

