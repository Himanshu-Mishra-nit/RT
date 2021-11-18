import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import InternshipService from '../services/InternshipService'
import 'bootstrap/dist/css/bootstrap.css';
class InternListComponent extends Component {
    constructor(props) {
        super(props)
        console.log('i am here');
        this.state = {
                employees: [],
                employee: {}
        }
        this.javaEmployee = this.javaEmployee.bind(this);
        this.aiEmployee = this.aiEmployee.bind(this);
        this.pythonEmployee = this.pythonEmployee.bind(this);
        this.datascienceEmployee = this.datascienceEmployee.bind(this);
    }

    javaEmployee(id){
        EmployeeService.getEmployeeById(id).then( res => {
            this.setState({employee: res.data});
            InternshipService.SetJavaEmployee(this.state.employee).then(res=>{
                this.props.history.push('/internslist');
        });  
        
    });
    }
    aiEmployee(id){
        EmployeeService.getEmployeeById(id).then( res => {
            this.setState({employee: res.data});
            InternshipService.SetAiEmployee(this.state.employee).then(res=>{
                this.props.history.push('/internslist');
        });  
        
    });
        
    }
    pythonEmployee(id){
        EmployeeService.getEmployeeById(id).then( res => {
            this.setState({employee: res.data});
            InternshipService.SetPythonEmployee(this.state.employee).then(res=>{
                this.props.history.push('/internslist');
        });  
        
    });
    }

    componentDidMount(){
        InternshipService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    datascienceEmployee(id){
        EmployeeService.getEmployeeById(id).then( res => {
            this.setState({employee: res.data});
            InternshipService.SetDataScienceEmployee(this.state.employee).then(res=>{
                this.props.history.push('/internslist');
        });  
        
    });
    }

    render() {
        return (
            <div className='container'>
                 <h2 className="text-center" style={{marginTop:'10px'}}>Intern's Employees List</h2>
                 
                  
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Select For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.javaEmployee(employee.id)} className="btn btn-info">Java </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.pythonEmployee(employee.id)} className="btn btn-danger">Python </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.aiEmployee(employee.id)} className="btn btn-info">Ai </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.datascienceEmployee(employee.id)} className="btn btn-info">Data science </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default InternListComponent;