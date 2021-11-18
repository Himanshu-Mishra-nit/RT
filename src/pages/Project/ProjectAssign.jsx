import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InternshipService from '../../services/InternshipService';
import ProjectService from '../../services/ProjectService';
export default class ProjectAssign extends Component {
    constructor(props) {
        super(props);
        this.state={
            aiemployees:[],
            dsemployees:[],
            pyemployees:[],
            jvemployees:[],
           aiemployee:0,
           dsemployee:0,
           pyemployee:0,
           jvemployee:0
        }
    }
    componentDidMount(){
        ProjectService.getaiEmployees().then((res)=>{
          this.setState({aiemployees:res.data});
        });
        ProjectService.getdsEmployees().then((res)=>{
            this.setState({dsemployees:res.data});
          });
          ProjectService.getjvEmployees().then((res)=>{
            this.setState({jvemployees:res.data});
          });
          ProjectService.getpyEmployees().then((res)=>{
            this.setState({pyemployees:res.data});
          });
        InternshipService.getCountAiEmployees().then((res) => {
            this.setState({ aiemployee: res.data});
        });
        InternshipService.getCountJavaEmployees().then((res) => {
            this.setState({ jvemployee: res.data});
        });
        InternshipService.getCountDataScienceEmployees().then((res) => {
            this.setState({ dsemployee: res.data});
        });
        InternshipService.getCountPythonEmployees().then((res) => {
            this.setState({ pyemployee: res.data});
        });
    }
    
    render() {
        return (
            <div>
              <div className='container'>
                  <h1 className='text-center'>Project's</h1>
                  <button className='btn-btn-info'style={{marginLeft:'14px'}}>Add Project </button>
                 
                  <div className="row text-center" style={{marginLeft:'30px',marginRight:'30px',marginTop:'30px'}}>
	        	<div className="col " style={{ padding:'10px',background:'#F5DEB3',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                 <h1><span className="glyphicon glyphicon-earphone"></span></h1>
                 <Link  onClick={this.AiProject} style={{textDecoration:"none"}}><h3>Artificial Intelligence</h3></Link> 
                   <p>Project</p>
                   <p>Total Employee={this.state.aiemployee}</p>
                 </div>
                <div className="col " style={{padding:'10px',marginLeft:'10px',background:'#F3E5AB',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                  <h1><span className="glyphicon glyphicon-home"></span></h1>
                  <Link  onClick={this.JavaProject} style={{textDecoration:"none"}}><h3>Java</h3></Link>
                  <p>Project</p>
                  <p>Total Employee={this.state.jvemployee}</p>
                  
                </div>
                <div className="col " style={{padding:'10px',marginLeft:'10px',background:'#FFDEAD',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <h1><span className="glyphicon glyphicon-send"></span></h1>
                <Link  onClick={this.PythonProject} style={{textDecoration:"none"}}><h3>Python</h3></Link>  
                <p>Project</p>
                <p>Total Employee={this.state.pyemployee}</p>
                 </div>
                <div className="col " style={{padding:'10px',marginLeft:'10px',background:'#DEB887',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
    	        <h1><span className="glyphicon glyphicon-leaf"></span></h1>
                <Link  onClick={this.DSProject} style={{textDecoration:"none"}}><h3>Data Science</h3></Link>
                 <p>Project</p>
                 <p>Total Employee={this.state.dsemployee}</p>
                 </div>
	          </div>   
           
            <div className='row text-center' style={{marginTop:'10px'}}>
                <div className='col text center'>
                    <p>AI Project Assigned Employee List</p>
                    <table  class="table">
                    <thead class="thead-light">
                                <tr>
                                    <th> Name</th>
                                    <th> Project Name</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.aiemployees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.studentName} </td>   
                                             <td> {employee.projectName}</td>
                                            
                                           
                                        </tr>
                                    )
                                }
                            </tbody>    
                    </table>
                </div>
                <div className='col  text center'>
                <p>Java Project Assigned Employee List</p>
                <table  class="table">
                    <thead class="thead-light">
                                <tr>
                                    <th> Name</th>
                                    <th> Project Name</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.jvemployees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.studentName} </td>   
                                             <td> {employee.projectName}</td>
                                            
                                           
                                        </tr>
                                    )
                                }
                            </tbody> 
                    </table>
                </div>
                <div className='col  text center'>
                <p>Python Project Assigned Employee List</p>
                <table  class="table">
                    <thead class="thead-light">
                                <tr>
                                    <th> Name</th>
                                    <th> Project Name</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.pyemployees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.studentName} </td>   
                                             <td> {employee.projectName}</td>
                                            
                                           
                                        </tr>
                                    )
                                }
                            </tbody> 
                    </table>
                </div>
                <div className='col  text center'>
                <p>DS Project Assigned Employee List</p>
                <table  class="table">
                    <thead class="thead-light">
                                <tr>
                                    <th> Name</th>
                                    <th> Project Name</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.dsemployees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.studentName} </td>   
                                             <td> {employee.projectName}</td>
                                            
                                           
                                        </tr>
                                    )
                                }
                            </tbody> 
                    </table>
                </div>
            </div>
            </div> 
            </div> 
        )
    }
}
