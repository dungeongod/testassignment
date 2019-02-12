import React , {Component} from 'react'
import {user} from '../users';
import  ReactTable , { userReactTable }from 'react-table'
import "react-table/react-table.css"
import "./style.css";
import {Link} from 'react-router-dom'
import userDetail from './userDetail';

class Table extends Component{
state={
    data:user,
    table:'',
    detail:'none'
}

render() {
    function result(id) {
        var url = "localhost:3000/user"+id
        window.location(url);
    }

    const columns =[
        {
            Header:"First Name",
            accessor:"first_name"
        },
        {
            Header:"Last Name",
            accessor:"last_name",
            filterable:false
        },
        {
            Header:"Company Name",
            accessor:"company_name",
            filterable:false
        },
        {
            Header:"City Name",
            accessor:"city",
            filterable:false
        },
        {
            Header:"State",
            accessor:"state",
            filterable:false
        },
        {
            Header:"Zip",
            accessor:"zip",
            filterable:false
        },
        {
            Header:"Email",
            accessor:"email",
            filterable:false
        },
        {
            Header:"Web",
            accessor:"web",
            filterable:false
        },
        {
            Header:"Age",
            accessor:"age",
            filterable:false
        }
    ]
    const onRowClick = (state, rowInfo, column, instance) => {
        return {
            style: {
                cursor:"pointer"
            },
            onClick: e => {
                result(rowInfo.original.id);                              
            }
        }
    }
  
    return (
      <div>
      <div className="navbar navbar-expand-sm
         navbar-dark px-sm-5" style={{display:this.state.table}} >
          <div className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                TableView
              </Link>
            </li>

         </div>
        </div>
        <ReactTable className="table"
        columns={columns}
        data={this.state.data}
        filterable
        defaultPageSize={5}
        getTrProps ={onRowClick}
        >
        
        
   
        </ReactTable>
      </div>
    )
}
  
}
export default Table;
