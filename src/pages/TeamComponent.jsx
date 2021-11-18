import React, { Component } from 'react'
import InternshipService from '../services/InternshipService'
import * as GrIcons from 'react-icons/gr';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
export default class TeamComponent extends Component {
    constructor(props) {
        super(props)
        console.log('i am here');
        this.state = {
                javaemployees: [],
                pythonemployees: [],
                aiemployees: [],
                datascienceemployees: []
                
        }
        this.viewEmployee = this.viewEmployee.bind(this);
       
        this.offerletter = this.offerletter.bind(this);
        this.certificate = this.certificate.bind(this);
       
    }
    
    componentDidMount(){
        InternshipService.getPythonEmployees().then((res) => {
            this.setState({ pythonemployees: res.data});
        });
        InternshipService.getJavaEmployees().then((res) => {
            this.setState({ javaemployees: res.data});
        });
        InternshipService.getAiEmployees().then((res) => {
            this.setState({ aiemployees: res.data});
        });
        InternshipService.getDataScienceEmployees().then((res) => {
            this.setState({ datascienceemployees: res.data});
        });
        console.log('#####'+this.state.datascienceemployees);
    }
    viewEmployee(id){
        this.props.history.push(`/viewEmployee/${id}`);
    }
    offerletter(id){
                 this.props.history.push('/offerLetter');
    }
    certificate(id){
        this.props.history.push('/certificate');
    }
    render() {
        return (
            <>
            
            <div className='container'>
            <div className='text-center'>
                         <h2 id="role-title">Our Team's</h2>
                      </div>
                 <div className = "row">
                 
                     <div className='col'>
                     <div className='text-center'>
                         <h2 id="role-title">Data science</h2>
                      </div>
                        <table className = "table table-striped table-bordered">
                     
                            <thead>
                                <tr>
                                    <th> Employee Name</th>
                                    <th> Email id</th>
                                    <th> Action</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.datascienceemployees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} {employee.lastName} </td>   

                                             <td> {employee.emailId}</td>
                                             <td>
                                                 <Link onClick={ () => this.viewEmployee(employee.id) } ><GrIcons.GrView /></Link>
                                                 <Link onClick={ () => this.offerletter(employee.id)} style={{marginLeft:'10px'}} ><RiIcons.RiPagesLine /></Link>
                                                 <Link onClick={ () => this.certificate(employee.id)} style={{marginLeft:'10px'}}><AiIcons.AiFillSafetyCertificate /></Link>
                                                 {/* <button onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.offerletter(employee.id)} className="btn btn-info">Offer Letter </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.certificate(employee.id)} className="btn btn-info">Certificate </button> */}
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                         </table>
                         </div>  
                         <div className='col'>
                         <div className='text-center'>
                         <h2 id="role-title">Artificial Intelligence</h2>
                      </div>
                        <table className = "table table-striped table-bordered">
                     
                            <thead>
                                <tr>
                                    <th> Employee Name</th>
                                    <th> EmailId</th>
                                    <th> Action</th>
                                  
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.aiemployees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} {employee.lastName} </td>   
                                             
                                             <td> {employee.emailId}</td>
                                             <td>
                                             <Link onClick={ () => this.viewEmployee(employee.id) } ><GrIcons.GrView /></Link>
                                                 <Link onClick={ () => this.offerletter(employee.id)} style={{marginLeft:'10px'}} ><RiIcons.RiPagesLine /></Link>
                                                 <Link onClick={ () => this.certificate(employee.id)} style={{marginLeft:'10px'}}><AiIcons.AiFillSafetyCertificate /></Link>
                                                 {/* <button onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.offerletter(employee.id)} className="btn btn-info">Offer Letter </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.certificate(employee.id)} className="btn btn-info">Certificate </button>
                                                  */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                         </table>
                         </div>  
                 </div>
                 <div className = "row">
                 
                 <div className='col'>
                 <div className='text-center'>
                     <h2 id="role-title">Python</h2>
                  </div>
                    <table className = "table table-striped table-bordered">
                 
                        <thead>
                            <tr>
                                <th> Employee Name</th>
                                <th> EmailId</th>
                                <th> Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.pythonemployees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} {employee.lastName}</td>   
                                            
                                             <td> {employee.emailId}</td>
                                             <td>
                                             <Link onClick={ () => this.viewEmployee(employee.id) } ><GrIcons.GrView /></Link>
                                                 <Link onClick={ () => this.offerletter(employee.id)} style={{marginLeft:'10px'}} ><RiIcons.RiPagesLine /></Link>
                                                 <Link onClick={ () => this.certificate(employee.id)} style={{marginLeft:'10px'}}><AiIcons.AiFillSafetyCertificate /></Link>
                                                 {/* <button onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.offerletter(employee.id)} className="btn btn-info">Offer Letter </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.certificate(employee.id)} className="btn btn-info">Certificate </button>
                                                  */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                     </table>
                     </div>  
                     <div className='col'>
                     <div className='text-center'>
                     <h2 id="role-title">Java</h2>
                  </div>
                    <table className = "table table-striped table-bordered">
                 
                        <thead>
                            <tr>
                                <th> Employee Name</th>
                                <th> EmailId</th>
                                <th> Action</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.javaemployees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} {employee.lastName} </td>   
                                             
                                             <td> {employee.emailId}</td>
                                             <td>
                                             <Link onClick={ () => this.viewEmployee(employee.id) } ><GrIcons.GrView /></Link>
                                                 <Link onClick={ () => this.offerletter(employee.id)} style={{marginLeft:'10px'}} ><RiIcons.RiPagesLine /></Link>
                                                 <Link onClick={ () => this.certificate(employee.id)} style={{marginLeft:'10px'}}><AiIcons.AiFillSafetyCertificate /></Link>
                                                 {/* <button onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.offerletter(employee.id)} className="btn btn-info">Offer Letter </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.certificate(employee.id)} className="btn btn-info">Certificate </button>
                                                  */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                     </table>
                     </div>  
             </div>
            
            </div>
            </>
        )
    }
}
