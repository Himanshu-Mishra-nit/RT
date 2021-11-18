import React, { Component } from 'react'
import './aboutus.css';
import HR from './HR.jpg'
import founder from './founder1.jpg'
import ceo from './ceo.jpg'
import wood from './wood1.jpg'
import * as AiIcons from 'react-icons/ai';
import { height } from 'dom-helpers';
export default class SupportComponent extends Component {
    render() {
        return (
            <div >
                <div className="about-section" >
                <h1>About Us </h1>
                <p>Our Mission is to increase the Education and technology</p>
                <p>and increase underStanding how to work with .</p>
                </div>

                
               <div className="container">
               <div class="row">
               <h2 style={{textAlign:"center",marginTop:'5px',color:'#0839db',fontFamily:'sans-serif'}}>Our Team</h2>
                      <div class="col-6 col-md-4" >
                          <div className='text-center'>
                          
                            <img src={founder} alt="Mike" style={{width:"200px",borderRadius: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                            <div >
                                <h2>Digendra Sharma</h2>
                                <p>Founder & CEO</p>
                                <p>I'm a author,speaker and the founder of Intern's.</p>
                                <p>Digendra@gmail.com</p>
                                
                            
                            </div>

                          </div>
                      </div>
                      <div class="col-6 col-md-4">
                      <div className='text-center'>
                          
                          <img src={ceo} alt="Mike" style={{width:"210px",height:'230px',borderRadius: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                          <div >
                              <h2>Rakhi lalwani</h2>
                              <p>Editor-in-chief & COO</p>
                              <p>I have skills of leadership and business acumen</p>
                              <p>rakhi@gmail.com</p>
                              
                          
                          </div>

                        </div>
                      </div>
                      <div class="col-6 col-md-4"> 
                      <div className='text-center'>
                          
                          <img src={HR} alt="Mike" style={{width:"210px",height:'230px',borderRadius: '10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}/>
                          <div >
                              <h2>David Ross</h2>
                              <p>Vice president of Finance</p>
                              <p>I have strategies of financing and budget management.</p>
                              <p>david@gmail.com</p>
                              
                          
                          </div>

                        </div>
                        </div>
               </div>
                </div>  
             
                <div className="container" >
                <h2 style={{textAlign:"center",marginTop:'10px',color:'#0839db'}}>Our Company Values</h2> 
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
