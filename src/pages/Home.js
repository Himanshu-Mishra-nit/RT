import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as GrIcons from 'react-icons/gr';
import * as BsIcons from 'react-icons/bs';
import * as TiIcons from 'react-icons/ti';
import EmployeeService from '../services/EmployeeService';
import InternshipService from '../services/InternshipService';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            employee: 0,
            internemployee: 0

        };
        this.showabout=this.showabout.bind(this);
    }
    componentDidMount(){
        EmployeeService.getCountEmployees().then((res) => {
            this.setState({ employee: res.data});
        });
        InternshipService.getCountEmployees().then((res) => {
            this.setState({ internemployee: res.data});
        });
    }

    showabout(){
        this.props.history.push(`/contactus`);
    }
    render() {
        return (
            <div className="site-info">
                    <div className="row text-center" style={{marginLeft:'50px',marginRight:'50px',marginTop:'20px'}}>
	        	<div className="col " style={{ padding:'10px',background:'#E6BF83',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                 <h1 style={{marginTop:'15px'}}><span className="glyphicon glyphicon-earphone"><GrIcons.GrGroup/></span></h1>
                 <Link  onClick={this.AiProject} style={{textDecoration:"none"}}><h3>Total Employee</h3></Link> 
                   
                   <p>Total Employee={this.state.employee}</p>
                 </div>
                <div className="col " style={{padding:'10px',marginLeft:'10px',background:'#F0C98D',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                  <h1 style={{marginTop:'15px'}}><span className="glyphicon glyphicon-home"><BsIcons.BsGraphUp/></span></h1>
                  <Link  onClick={this.JavaProject} style={{textDecoration:"none"}}><h3>Internship</h3></Link>
                  
                  <p>Total Completed={this.state.internemployee}</p>
                  
                </div>
                <div className="col " style={{padding:'10px',marginLeft:'10px',background:'#DEB887',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <h1 style={{marginTop:'15px'}}><span className="glyphicon glyphicon-send"></span><BsIcons.BsGraphDown/></h1>
                <Link  onClick={this.PythonProject} style={{textDecoration:"none"}}><h3>Internship</h3></Link>  
                
                <p>Not Completed={this.state.employee-this.state.internemployee}</p>
                 </div>
                <div className="col " style={{padding:'10px',marginLeft:'10px',background:'#D2B48C',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
    	        <h1 style={{marginTop:'15px'}}><span className="glyphicon glyphicon-leaf"><TiIcons.TiContacts/></span></h1>
                <Link  onClick={this.showabout} style={{textDecoration:"none"}}><h3>ContactUs</h3></Link>
               
                 </div>
	          </div>   
                <div className="title">
                    Intern's
                </div>
                {/*<div className="sub-title">
                   <Link  onClick={this.showabout}>contact us</Link> 
                </div>*/
        }            
                </div>
        )
    }
}
