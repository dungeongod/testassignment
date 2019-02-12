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
            return res[i]
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
            <div className="row">
                <div className="col-md-12">
                    <h1>{result.first_name}</h1>
                    <div className="col-md-6">Company</div><div className="col-md-6">{result.company_name}</div>
                    <div className="col-md-6">City</div><div className="col-md-6">{result.city}</div>
                    <div className="col-md-6">State</div><div className="col-md-6">{result.state}</div>
                    <div className="col-md-6">ZIP</div><div className="col-md-6">{result.zip}</div>
                    <div className="col-md-6">Email</div><div className="col-md-6">{result.email}</div>
                    <div className="col-md-6">Web</div><div className="col-md-6">{result.web}</div>
                    <div className="col-md-6">Age</div><div className="col-md-6">{result.age}</div>
                </div>
            </div>
      </div>
    )
  }
}
