import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {user} from '../users'
export default class UserDetail extends Component {
  
  render() {
      var res=user;
    var result = ()=>{
        for(var i=0;i<res.length;i++){
            // if(user[i].id==="1"){
            //     console.log(user[i])
            //     return user[i];

            console.log(res[i])
            }
        }
    //}

    return (
      <div>
      <div className="nav">
            <Link  to="/" className="ml-auto">
            <i className="fas fa-arrow-left"></i>
            </Link>
        
        User Details
        </div>
           
      </div>
    )
  }
}
