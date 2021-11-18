import React, { Component } from 'react'
import HR from './internship.jpg'
export default class OfferLetter extends Component {
    render() {
        return (
            <div>
                
                 <div className='text-center container' style={{backgroundColor:'whitesmoke', marginTop:'10px'}}>
                 <h1>OfferLetter</h1>
                      <img src={HR} alt="Mike" style={{width:"550px",height:'450px',borderRadius: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                </div>
                <div className='text-center'>
                        <button onClick={ () => this.editEmployee()} className="btn btn-info">Send </button>
                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee()} className="btn btn-success">Download </button>
                
                 </div>
            </div>
        )
    }
}
