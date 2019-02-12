import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Table from './components/table'
import UserDetail from './components/userDetail.js';
import Default from './components/default'
class App extends Component {
  state ={
    id:1
  }
  
  
  render() {
    

    return (
      <React.Fragment>
      
       <Switch>
         
          <Route exact path="/" component={Table}></Route>
        <Route path="/user/:id" component={UserDetail}></Route>
        <Route component={Default}></Route>
       </Switch>
      </React.Fragment>
    );
  }
}

export default App;
