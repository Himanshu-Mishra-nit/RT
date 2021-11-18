import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
        this.back=this.back.bind(this);
    }

    back(){
        this.props.history.push('/');
    }
    componentDidMount(){
        console.log(typeof(this.state.id)+''+this.state.id);
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
        console.log(this.state.employee);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = " col-md-6 offset-md-3" style={{backgroundColor:'whitesmoke',marginBottom:'20px'}}>
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name:      { this.state.employee.firstName }</label>
                            <div> </div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name:      { this.state.employee.lastName }</label>
                            <div> </div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID:        { this.state.employee.emailId }</label>
                            <div> </div>
                        </div>
                    </div>

                
                <div className='text-center' style={{marginTop:'10px'}}>
                <button onClick={ () => this.back()}  style={{marginleft:'10px',marginBottom:'20px'}} className="btn btn-success">Print</button>
                <button onClick={ () => this.back()} style={{marginleft:'10px',marginBottom:'20px'}} className="btn btn-primary">Back</button>
                </div>
            </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
// import React, { Component } from 'react';
// import EmployeeService from '../services/EmployeeService';

// class ViewEmployeeComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             id : this.props.match.params.id,
//             employee : {}

//         }
//     }
//     componentDidMount(){
//         EmployeeService.getEmployeeById(this.state.id).then( res => {
//             this.setState({employee: res.data});
//         });

//     }
//     BackEmployee(){
//         this.props.history.push(`/employees`);
//     }
    
//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className = "card col-md-12 offset-md-6">
//                     <h3 className = "text-center"> View Employee Details</h3>
//                     <div className = "card-body">
//                         <div className = "row">
//                             <label> Employee First Name: </label>
//                             <div>{ this.state.employee.firstname }</div>

//                         </div>
//                         <div className = "row">
//                             <label> Employee Last Name: </label>
//                             <div>{ this.state.employee.lastname }</div>

//                         </div>
//                         <div className = "row">
//                             <label> Employee EmailId: </label>
//                             <div>{ this.state.employee.emailId }</div>

//                         </div>
//                     </div>
//                     <div className = "text-center">
//                     <button onClick={()=>this.BackEmployee()} className="btn btn-info">Back</button>
//                     </div> 
//                 </div>
//             </div>
//         );
//     }
// }

// export default ViewEmployeeComponent;