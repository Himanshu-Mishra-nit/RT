import React, { Component } from 'react'
//import './aboutus.css';
import hra from './hra.jpg'
import * as AiIcons from 'react-icons/ai';
export default class SupportComponent extends Component {
    render() {
        return (
            <div>
                <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
                </div>

                <h2 style={{textAlign:"center",marginTop:'5px',color:'#0839db',fontFamily:'sans-serif'}}>Our Team</h2>
               <div className="container">
               <div class="row">
                      <div class="col-6 col-md-4" style={{backgroundColor:'green'}}>
                          <div className='text-center'>
                          
                            <img src={hra} alt="Mike" style={{width:"100%"}}/>
                            <div >
                                <h2>Mike Ross</h2>
                                <p>Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                
                            
                            </div>

                          </div>
                      </div>
                      <div class="col-6 col-md-4">
                      <div className='text-center'>
                          
                          <img src={hra} alt="Mike" style={{width:"100%"}}/>
                          <div >
                              <h2>Mike Ross</h2>
                              <p>Art Director</p>
                              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                              <p>mike@example.com</p>
                              
                          
                          </div>

                        </div>
                      </div>
                      <div class="col-6 col-md-4"> <div className='text-center'>
                          
                          <img src={'.images/HR.jpg'} alt="Mike" style={{width:"100%"}}/>
                          <div >
                              <h2>Mike Ross</h2>
                              <p>Art Director</p>
                              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                              <p>mike@example.com</p>
                              
                          
                          </div>

                        </div>
                        </div>
               </div>
                </div>  
                <h2 style={{textAlign:"center",marginTop:'10px',color:'#0839db'}}>Our Company Values</h2> 
                <div className="container" >
                    
                    <div className="row" style={{marginBottom:"100px"}}>
                        <div className="col order-first">
                         
                          <h2 className='text-center'> <AiIcons.AiOutlineAudit /></h2>
                          <h3 className='text-center'> Transparency</h3>
                          <p className='center'> Openness with our team and clients.We raise issues and provided solutions promptly</p>
                        </div>
                        
                        <div className="col">
                        <h2 className='text-center'> <AiIcons.AiOutlineRocket /></h2>    
                        <h3 className='text-center'>Self Improvement</h3>
                        <p className='text-center'style={{textAlign:'justify'}}> Never stop learning ,never stop evolving into who we want to 
                         be  and where we want to be.</p>
                        </div>
                        <div className="col order-last">
                       
                        <h2 className='text-center'> <AiIcons. AiOutlineUser /></h2> 
                        <h3 className='text-center'>Commitment</h3>
                        <p className='text-center'>Our Word and hard work over everything else.Our clients and vision are our guiding beacons.</p>
                        </div>
                    </div>
                    </div> 

                   
                
             
            </div>
        )
    }
}
