import React, { Component } from 'react'
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/react";
import { Button } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import InternshipService from '../../services/InternshipService';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';


const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;
export default class LeaveListComponent extends Component {
    constructor(props) {
        super(props);
        this.state={

          leaveEmployee: []

        }
        this.AddLeaveForm=this.AddLeaveForm.bind(this);
        this.DeleteEmployee=this.DeleteEmployee.bind(this);
        //this.addEmployee = this.addEmployee.bind(this);
    }
    componentDidMount(){
      InternshipService.getLeaveEmployees().then((res) => {
        this.setState({ leaveEmployee: res.data});
    });
    }
    DeleteEmployee(id){
      console.log("$$$"+id);
      InternshipService.deleteEmployee(id).then( res => {
          this.setState({leaveEmployee: this.state.leaveEmployee.filter(employee => employee.id !== id)});
      });
  }
    AddLeaveForm(){
        this.props.history.push(`./addLeaveForm`)
    }
    render() {
        return (
            <div className='container'>
                  
                  <div id="table-outer-div-scroll">
                      <div className='text-center'>
                         <h2 id="role-title">Leave Application's</h2>
                      </div>

        <Button
          variant="primary"
          id="add-button"
         // onClick={this.props.onAddLeaveApplicationEmp}
         onClick={this.AddLeaveForm}
        >
          <FontAwesomeIcon icon={faPlus} id="plus-icon" />
          Add
        </Button>

        <div id="clear-both" />


        {!this.state.loading ? (
          <div
            id="table-div"
            className="ag-theme-balham"
          //   style={
          //     {
          //     height: "500px",
          //     width: "100%"
          //   }
          // }
          >
              
              <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee Name</th>
                                    <th> Leave Type</th>
                                    <th>Reason for leave</th>
                                    <th> FromDate</th>
                                    <th> ToDate</th>
                                    <th> Delete</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.leaveEmployee.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.employeeName} </td>   
                                             <td> {employee.leaveType}</td>
                                             <td> {employee.reasonForLeave}</td>
                                             <td> {employee.fromDate}</td>
                                             <td> {employee.toDate}</td>
                                             <td>
                                             <Link onClick={ () => this.DeleteEmployee(employee.id) } style={{marginLeft:'10px'}} ><RiIcons.RiDeleteBin6Line /></Link>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                         </table>
                 </div>           
            {/* <AgGridReact
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              columnTypes={this.state.columnTypes}
              rowData={this.state.rowData}
              // floatingFilter={true}
              // onGridReady={this.onGridReady}
              pagination={true}
              paginationPageSize={10}
              getRowHeight={this.state.getRowHeight}
            /> */}
          </div>
        ) : (
            <div id="loading-bar">
              <RingLoader
                css={override}
                sizeUnit={"px"}
                size={50}
                color={"#0000ff"}
                loading={true}
              />
            </div>
          )}



      </div>
            </div>
        )
    }
}
