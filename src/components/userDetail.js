import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {user} from '../users'
export default class UserDetail extends Component {
  
  render() {
    
    var result = user[this.props.match.params.id]

    return (
      <div>
      <div className="nav">
            <Link  to="/" className="ml-auto">
            <i className="fas fa-arrow-left"></i>
            </Link>
        
        User Details
        </div>
          <h2>{result.first_name}</h2>
            <div className="row">
              
                  
                    <div className="col-md-6">Company</div><div className="col-md-6">{result.company_name}</div>
                    <div className="col-md-6">City</div><div className="col-md-6">{result.city}</div>
                    <div className="col-md-6">State</div><div className="col-md-6">{result.state}</div>
                    <div className="col-md-6">ZIP</div><div className="col-md-6">{result.zip}</div>
                    <div className="col-md-6">Email</div><div className="col-md-6">{result.email}</div>
                    <div className="col-md-6">Web</div><div className="col-md-6">{result.web}</div>
                    <div className="col-md-6">Age</div><div className="col-md-6">{result.age}</div>
                </div>
       
      </div>
    )
  }
}
