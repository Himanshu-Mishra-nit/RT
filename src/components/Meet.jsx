import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Meet extends Component {
     constructor(props) {
         super(props);

         this.AiProject=this.AiProject.bind(this);
         
        
     }
     componentDidMount(){
         
     }
     AiProject(){

     }
    
     
    render() {
        return (
            <div className=" container text-center">
                <button type="button" className="btn-btn-primary" style={{marginTop:'20px',marginBottom:'20px', backgroundColor:"skyblue"}}>
                <a href="https://meet.google.com/xzg-mtad-fvo" style={{ color:'black',textDecoration:"none"}}>
                    Click here to Start Meeting!!!
                    </a>
                    </button>
                    <h2 style={{textAlign:'left',color:'black'}}>Send Link to :</h2>
                   <div className="row">
                       <div className="col" style={{padding:'10px',marginLeft:'10px',background:'#F0C98D',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                           
                           <Link  onClick={this.AiProject} style={{ color:'black',textDecoration:"none"}}><h3>DataScience Meet</h3></Link>
                       </div>
                       <div className="col" style={{padding:'10px',marginLeft:'10px',background:'#F0C98D',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                           
                           <Link  onClick={this.JavaProject} style={{ color:'black',textDecoration:"none"}}><h3>Ai Meet</h3></Link>
                           </div>
                       <div className="col" style={{padding:'10px',marginLeft:'10px',background:'#F0C98D',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                           
                           <Link  onClick={this.JavaProject} style={{ color:'black',textDecoration:"none"}}><h3>Java Meet</h3></Link>
                       </div>
                       <div className="col" style={{padding:'10px',marginLeft:'10px',background:'#F0C98D',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        
                           <Link  onClick={this.JavaProject} style={{ color:'black',textDecoration:"none"}}><h3>Python Meet</h3></Link>
                           </div>
                   </div>
                 <div className='row'style={{marginBottom:'20px'}}>
                     <div className='col'> 
                   <div className='row' style={{marginTop:'15px'}}>
                       <div className='col' style={{padding:'10px',marginLeft:'10%',marginRight:'10%',background:'#F0C98D',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                       
                       <Link  onClick={this.JavaProject} style={{ color:'black',textDecoration:"none"}}><h5>send to Attendence Ai Employee </h5></Link>
                       </div>
                   </div>
                   <div className='row' style={{marginTop:'15px'}}>
                       <div className='col' style={{padding:'10px',marginLeft:'10%',marginRight:'10%',background:'#F0C98D',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        
                        <Link  onClick={this.JavaProject} style={{ color:'black',textDecoration:"none"}}><h5>send to Attendence DataScience Employee </h5></Link>
                       </div>
                   </div>
                   <div className='row' style={{marginTop:'15px'}}>
                       <div className='col' style={{padding:'10px',marginLeft:'10%',marginRight:'10%',background:'#F0C98D',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                       
                       <Link  onClick={this.JavaProject} style={{ color:'black',textDecoration:"none"}}><h5>send to Attendence Java Employee </h5></Link>
                       </div>
                   </div>
                   <div className='row' style={{marginTop:'15px'}}>
                       <div className='col' style={{padding:'10px',marginLeft:'10%',marginRight:'10%',background:'#F0C98D',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                       
                       <Link  onClick={this.JavaProject} style={{ color:'black',textDecoration:"none"}}><h5>send to Attendence Python Employee </h5></Link>
                       </div>
                   </div>
                   </div>
                   <div className='col'> 
                    <div style={{marginTop:'20px'}}>   
                    
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSeBD7aTF7QQN9aPrcx03G9RnuRoDlWBSa56z-QYnAe19a-4veX3GNCWXPnKSOu-0n5pC4pMcEkb3dp/pubhtml?widget=true&amp;headers=false" style={{width:'100%'}}></iframe>        
                  </div>
                  </div>
                  </div>
            </div>
        )
    }
}
