import React,{Component} from 'react';
import { BrowserRouter, Route, Switch ,Router,Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { Divider } from 'material-ui';
import Error from './components/Error';
 
function App() {
  return (
  <BrowserRouter>
  
  <Switch>
    <Route exact path="/" component={Login}/> 
    <Route exact path="/Welcome" component={Welcome}/>
    <Route path="**" component={Error}/>
    
  </Switch>
  </BrowserRouter>
     
  );
}
export default App;


 


    

