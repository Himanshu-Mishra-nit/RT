import React, { Component } from 'react'
import { Form,Button,Col,Row } from "react-bootstrap";
import InternshipService from '../../services/InternshipService';
import "./LeaveApplicationEmpForm.css";
export default class AddLeaveFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            employeeName: '',
            leaveType: '',
            fromDate: '',
            toDate: '',
            reasonForLeave: ''

        }
        this.changeemployeenamehandler=this.changeemployeenamehandler.bind(this);
        this.changeleaveTypehandler=this.changeleaveTypehandler.bind(this);
        this.changefromDatehandler=this.changefromDatehandler.bind(this);
        this.changetoDatehandler=this.changetoDatehandler.bind(this);
         this.saveLeave=this.saveLeave.bind(this);   
         this.changereasonForLeavehandler=this.changereasonForLeavehandler.bind(this);
    }
    changeemployeenamehandler=(e)=>{
             this.setState({
                   employeeName: e.target.value
             })
             console.log("akki sharma");
    }
    changefromDatehandler=(e)=>{
        this.setState({fromDate: e.target.value})
        console.log("akki sharma");
    }
    changeleaveTypehandler=(e)=>{
        this.setState({leaveType: e.target.value})
        console.log("akki sharma");
    }
    changereasonForLeavehandler=(e)=>{
        this.setState({reasonForLeave: e.target.value})
        console.log("akki sharma");
    }
    changetoDatehandler=(e)=>{
        this.setState({toDate: e.target.value})
        console.log("akki sharma");
    }
    saveLeave=(e)=>{
        console.log("click to save");
        e.preventDefault();
        let employee={employeeName: this.state.employeeName, leaveType:this.state.leaveType,reasonForLeave: this.state.reasonForLeave,fromDate: this.state.fromDate,toDate: this.state.toDate};
        console.log('employee22=>'+JSON.stringify(employee));
        InternshipService.SetLeaveEmployee(employee).then(res =>{
            this.props.history.push(`/leave`);
        });

    }
    cancle(){
        console.log("akki sharma111");
        this.props.history.push(`/leave`);
    }
    

    render() {
        return (
          <>
            <div className="container "  style={{ marginTop: "20px"}}>
                    <div className="row " >
                        <div className="col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{ marginTop: "10px"}}>Add LeaveApplicationEmp Details</h3>
                            
                                <form style={{ marginTop: "20px", marginBottom:"20px"}}>
                                <div className="form-group">
                                    <label for="leavetype">Leave Type:</label>

                                        <select name="leavetype" id="leavetype" onChange={this.changeleaveTypehandler}>
                                        
                                        <option value="" disabled selected>
                                            Select your option
                                        </option>
                                       <option value="Sick Leave">Sick Leave</option>
                                       <option value="Casual Leave">Casual Leave</option>
                                        <option value="Privilege Leave">Privilege Leave</option>
               

                                        </select>
                                      </div>  
                                    <div className="form-group">
                                        <label> Employee Name:</label>
                                        <input placeholder="Employee Name" name="employeename" className="form-control" value={this.state.employeeName} onChange={this.changeemployeenamehandler}/>
                                    </div>
                                    {/*<div className="form-group">
                                        <label> Leave Type:</label>
                                        <input placeholder="Leave Type" name="leavetype" className="form-control" value={this.state.leaveType} onChange={this.changeleaveTypehandler}/>
                                    </div>
                                    */}
                                  
                                    <div className="form-group">
                                        <label> Reason for Leave:</label>
                                        <input placeholder="Reason for Leave" name="reasonforleave" className="form-control" value={this.state.reasonForLeave} onChange={this.changereasonForLeavehandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> toDate:</label>
                                        <input type='date'  name="todate" className="form-control" value={this.state.toDate} onChange={this.changetoDatehandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> fromDate:</label>
                                        <input type='date' name="from date" className="form-control" value={this.state.fromDate} onChange={this.changefromDatehandler}/>
                                    </div>
                                    
                                    <div className="text-center">
                                    <button style={{marginTop: "10px"}}  className="btn btn-info" onClick={this.saveLeave}>save</button>
                                    <button style={{marginTop: "10px",marginLeft:"10px"}} className="btn btn-info" onClick={this.cancle.bind(this)} >Cancle</button>
                                    </div> 
                                </form>
                            
                        </div>
                    </div>
                </div>
          </>
        )
    }
}
