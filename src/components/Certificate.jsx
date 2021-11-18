import React, { Component } from 'react'
import HR from './certificate1.png'
export default class Certificate extends Component {
    render() {
        return (
            <div>
                <div className='text-center container' style={{backgroundColor:'whitesmoke', marginTop:'100px'}}>
                      <h1>Certificate</h1>
                      <img src={HR} alt="Mike" style={{width:"550px",height:'350px',borderRadius: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                </div>
                <div className='text-center'style={{marginBottom:'20px'}}>
                        <button onClick={ () => this.editEmployee()} className="btn btn-info">Send </button>
                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee()} className="btn btn-success">Download </button>
                
                 </div>
            </div>
        )
    }
}
