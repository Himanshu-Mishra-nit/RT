import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state ={
            id: this.props.match.params.id,
            firstName:'',
            lastName:'',
            emailId:''
            
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount(){
        console.log("++++++++++++++++++++++++++");
        EmployeeService.getEmployeeById(this.state.id).then(res=>{
                    let employee=res.data;
                    this.setState({firstName : employee.firstName,
                    lastName : employee.lastName,
                    emailId : employee.emailId
            });
            console.log(this.state.firstName+"%%"+this.state.lastName);
        });

    }
    updateEmployee=(e)=>{
        e.preventDefault();
        let employee={firstName: this.state.firstName, lastName:this.state.lastName,emailId: this.state.emailId};
        console.log('employee11=>'+JSON.stringify(employee)+' '+this.state.id+' ravan');

        EmployeeService.updateEmployee(employee,this.state.id).then(res=>{
            this.props.history.push(`/employees`);

        })

      

    }
    changeFirstNameHandler=(event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler=(event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({emailId: event.target.value});

    }
    cancle(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
                <div className="container">
                    <div className="row ">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name:</label>
                                        <input placeholder="First Name" name="firstname" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name:</label>
                                        <input placeholder="Last Name" name="lastname" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id:</label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className='text-center'>
                                    <button style={{marginTop: "10px"}}  className="btn btn-success" onClick={this.updateEmployee}>save</button>
                                    <button  style={{marginTop: "10px",marginLeft:"10px"}} className="btn btn-danger" onClick={this.cancle.bind(this)} >Cancle</button>
                                    </div>  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default UpdateEmployeeComponent;
// import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService';

// class UpdateEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             firstName: '',
//             lastName: '',
//             emailId: ''
//         }
//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//         this.updateEmployee = this.updateEmployee.bind(this);
//     }

//     componentDidMount(){
//         EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
//             let employee = res.data;
//             this.setState({firstName: employee.firstName,
//                 lastName: employee.lastName,
//                 emailId : employee.emailId
//             });
//         });
//     }

//     updateEmployee = (e) => {
//         e.preventDefault();
//         let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
//         console.log('employee => ' + JSON.stringify(employee));
//         console.log('id => ' + JSON.stringify(this.state.id));
//         EmployeeService.updateEmployee(employee, this.state.id).then( res => {
//             this.props.history.push('/employees');
//         });
//     }
    
//     changeFirstNameHandler= (event) => {
//         this.setState({firstName: event.target.value});
//     }

//     changeLastNameHandler= (event) => {
//         this.setState({lastName: event.target.value});
//     }

//     changeEmailHandler= (event) => {
//         this.setState({emailId: event.target.value});
//     }

//     cancel(){
//         this.props.history.push('/employees');
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                    <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 <h3 className="text-center">Update Employee</h3>
//                                 <div className = "card-body">
//                                     <form>
//                                         <div className = "form-group">
//                                             <label> First Name: </label>
//                                             <input placeholder="First Name" name="firstName" className="form-control" 
//                                                 value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Last Name: </label>
//                                             <input placeholder="Last Name" name="lastName" className="form-control" 
//                                                 value={this.state.lastName} onChange={this.changeLastNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Email Id: </label>
//                                             <input placeholder="Email Address" name="emailId" className="form-control" 
//                                                 value={this.state.emailId} onChange={this.changeEmailHandler}/>
//                                         </div>

//                                         <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                    </div>
//             </div>
//         )
//     }
// }

// export default UpdateEmployeeComponent